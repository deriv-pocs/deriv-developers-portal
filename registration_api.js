const isStorageSupported = storage => {
    if (typeof storage === 'undefined') {
        return false;
    }
    const test_key = 'test';
    try {
        storage.setItem(test_key, '1');
        storage.removeItem(test_key);
        return true;
    } catch (e) {
        return false;
    }
};

const redirectToLogin = (is_logged_in, language, has_params = true, redirect_delay = 0) => {
    if (!is_logged_in && isStorageSupported(sessionStorage)) {
        const l = window.location;
        const redirect_url = has_params ? window.location.href : `${l.protocol}//${l.host}${l.pathname}`;
        sessionStorage.setItem('redirect_url', redirect_url);
        setTimeout(() => {
            window.location.href = loginUrl({ language });
        }, redirect_delay);
    }
};

const getObject = function (key) {
    return JSON.parse(this.getItem(key) || '{}');
};

const setObject = function (key, value) {
    if (value && value instanceof Object) {
        try {
            this.setItem(key, JSON.stringify(value));
        } catch (e) {
            /* do nothing */
        }
    }
};

const Store = function (storage) {
    this.storage = storage;
    this.storage.getObject = getObject;
    this.storage.setObject = setObject;
};

Store.prototype = {
    get(key) {
        return this.storage.getItem(key) || undefined;
    },
    set(key, value) {
        if (typeof value !== 'undefined') {
            this.storage.setItem(key, value);
        }
    },
    getObject(key) {
        return typeof this.storage.getObject === 'function' // Prevent runtime error in IE
            ? this.storage.getObject(key)
            : JSON.parse(this.storage.getItem(key) || '{}');
    },
    setObject(key, value) {
        if (typeof this.storage.setObject === 'function') {
            // Prevent runtime error in IE
            this.storage.setObject(key, value);
        } else {
            this.storage.setItem(key, JSON.stringify(value));
        }
    },
    remove(key) {
        this.storage.removeItem(key);
    },
    clear() {
        this.storage.clear();
    },
};

const InScriptStore = function (object) {
    this.store = typeof object !== 'undefined' ? object : {};
};

InScriptStore.prototype = {
    get(key) {
        return getPropertyValue(this.store, key);
    },
    set(k, value, obj = this.store) {
        let key = k;
        if (!Array.isArray(key)) key = [key];
        if (key.length > 1) {
            if (!(key[0] in obj) || isEmptyObject(obj[key[0]])) obj[key[0]] = {};
            this.set(key.slice(1), value, obj[key[0]]);
        } else {
            obj[key[0]] = value;
        }
    },
    getObject(key) {
        return JSON.parse(this.get(key) || '{}');
    },
    setObject(key, value) {
        this.set(key, JSON.stringify(value));
    },
    remove(...keys) {
        keys.forEach(key => {
            delete this.store[key];
        });
    },
    clear() {
        this.store = {};
    },
    has(key) {
        return this.get(key) !== undefined;
    },
    keys() {
        return Object.keys(this.store);
    },
    call(key) {
        if (typeof this.get(key) === 'function') this.get(key)();
    },
};

const LocalStore = isStorageSupported(window.localStorage)
    ? new Store(window.localStorage)
    : new InScriptStore();

const CookieStorage = function (cookie_name) {
    this.initialized = false;
    this.cookie_name = cookie_name;
    this.domain = 'api.deriv.com';
    this.path = '/';
    this.expires = new Date('Thu, 1 Jan 2037 12:00:00 GMT');
    this.value = {};
};

CookieStorage.prototype = {
    read() {
        const cookie_value = Cookies.get(this.cookie_name);
        try {
            this.value = cookie_value ? JSON.parse(cookie_value) : {};
        } catch (e) {
            this.value = {};
        }
        this.initialized = true;
    },
    write(val, expireDate, isSecure) {
        if (!this.initialized) this.read();
        this.value = val;
        if (expireDate) this.expires = expireDate;
        Cookies.set(this.cookie_name, this.value, {
            expires: this.expires,
            path: this.path,
            domain: this.domain,
            secure: !!isSecure,
        });
    },
    get(key) {
        if (!this.initialized) this.read();
        return this.value[key];
    },
    set(key, val) {
        if (!this.initialized) this.read();
        this.value[key] = val;
        Cookies.set(this.cookie_name, this.value, {
            expires: new Date(this.expires),
            path: this.path,
            domain: this.domain,
        });
    },
    remove() {
        Cookies.remove(this.cookie_name, {
            path: this.path,
            domain: this.domain,
        });
    },
};

const appId = () => window.localStorage.getItem("config.app_id");


const loginUrl = ({ language }) => {
    const server_url = LocalStore.get('config.server_url');
    const signup_device_cookie = new CookieStorage('signup_device');
    const signup_device = signup_device_cookie.get('signup_device');
    const date_first_contact_cookie = new CookieStorage('date_first_contact');
    const date_first_contact = date_first_contact_cookie.get('date_first_contact');
    const marketing_queries = `${signup_device ? `&signup_device=${signup_device}` : ''}${date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
        }`;
    const getOAuthUrl = () => {
        return `https://oauth.deriv.com/oauth2/authorize?app_id=${appId()}&l=${language}${marketing_queries}&brand=deriv`;
    };

    if (server_url && /qa/.test(server_url)) {
        return `https://${server_url}/oauth2/authorize?app_id=${appId()}&l=${language}${marketing_queries}&brand=deriv`;
    }

    if (window.localStorage.getItem("config.app_id") === 11780) {
        return getOAuthUrl();
    }
    return new URL(getOAuthUrl()).href;
};

const getSocketURL = () => {
    let active_loginid_from_url;
    const search = window.location.search;
    if (search) {
        const params = new URLSearchParams(document.location.search.substring(1));
        active_loginid_from_url = params.get('acct1');
    }

    const loginid = window.localStorage.getItem('active_loginid') || active_loginid_from_url;
    const is_real = loginid && !/^VRT/.test(loginid);
    const server = is_real ? 'green' : 'blue';
    const server_url = `${server}.binaryws.com`;
    return server_url;
};

const { createMachine, actions, interpret, assign } = XState;
const getApps = () => {
    const url = `https://random-data-api.com/api/coffee/random_coffee`;
    return fetch(url).then(response => response.json());
};
const appRegistrationMachine = createMachine({
    id: "register_api",
    initial: "logged_in",
    // context: {
    //     apps: [],
    //     error: null,
    // },
    states: {
        logged_out: {
            id: "logged_out",
            on: {
                LOGIN: "#logged_in",
            },
        },
        logged_in: {
            id: "logged_in",
            initial: "register_tab",
            on: {
                LOGOUT: "#logged_out",
                MANAGE_TOGGLE_TAB: "#manage_tab",
            },
            states: {
                register_tab: {
                    id: "register_tab",
                    initial: "folded_form",
                    on: {
                        LOGOUT: "#logged_out",
                        TOGGLE_FORM: "#unfolded_form",
                        MANAGE_TOGGLE_TAB: "#manage_tab",
                    },
                    states: {
                        folded_form: {
                            id: "folded_form",
                            on: {
                                TOGGLE_FORM: "#unfolded_form",
                            },
                        },
                        unfolded_form: {
                            id: "unfolded_form",
                            on: {
                                TOGGLE_FORM: "#folded_form",
                            },
                        },
                    },
                },
                manage_tab: {
                    id: "manage_tab",
                    initial: "loading",
                    on: {
                        REGISTER_TOGGLE_TAB: "#register_tab",
                        // FETCH_DATA: "#loading",
                        FETCH_APP_LIST: "#loading",
                    },
                    states: {
                        loading: {
                            id: "loading",
                            invoke: {
                                src: async () => await getAppList(),
                                onDone: {
                                    target: "#success",
                                    // actions: assign({
                                    //     apps: (_, event) => event.data,
                                    // }),
                                },
                                onError: {
                                    target: "#error",
                                    // actions: assign({
                                    //     error: (_, event) => event.data,
                                    // }),
                                },
                            },
                        },
                        success: {
                            id: "success",
                            on: {
                                REFETCH: "#loading",
                            },
                        },
                        error: {
                            id: "error",
                            on: {
                                RETRY: "#loading",
                            },
                        },
                    },
                },
            },
        },
    },
});

let sessionState = sessionStorage.getItem('app_registration_state') || 'logged_out';
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token1');
if (token) {
    sessionStorage.setItem('token1', token);
    sessionStorage.setItem('app_registration_state', 'logged_in');
    sessionState = 'logged_in';
}
function activate(state) {
    const joinedState = state.toStrings().join(' ');
    const elApp = document.getElementById('app-registration-machine');
    const form_checkbox = document.getElementById('expand_form');
    const is_folded_state = joinedState === 'logged_in logged_in.register_tab logged_in.register_tab.folded_form';
    if (elApp) {
        elApp.dataset.state = joinedState;
        elApp.setAttribute("data-state", joinedState);
    }
    if (is_folded_state) {
        if (form_checkbox) form_checkbox.checked = false;
    } else {
        if (form_checkbox) form_checkbox.checked = true;
    }
}

const interpreter = XState
    .interpret(appRegistrationMachine)
    .onTransition(activate)
    .start(sessionState);

const { send } = interpreter;

const unfolded_form_checkbox = document.getElementById('expand_form');
if (unfolded_form_checkbox) {
    unfolded_form_checkbox.addEventListener('change', () => {
        send({
            "type": "TOGGLE_FORM"
        });
    });
}

// get register_button and send event "MANAGE_TOGGLE_TAB"
const register_button = document.getElementById('register_button');
if (register_button) {
    register_button.addEventListener('click', () => {
        send({
            "type": "REGISTER_TOGGLE_TAB"
        });
    });
}

// get manage_button and send event "REGISTER_TOGGLE_TAB"
const manage_button = document.getElementById('manage_button');
if (manage_button) {
    manage_button.addEventListener('click', () => {
        send({
            "type": "MANAGE_TOGGLE_TAB"
        });
    });
}

const logout_button = document.getElementById('logout_button');
if (logout_button) {
    logout_button.addEventListener('click', () => {
        send({
            "type": "LOGOUT"
        });
    });
}

const registerLoginButton = document.getElementById('registerLogin');
if (registerLoginButton) {
    registerLoginButton.addEventListener('click', () => {
        redirectToLogin(false, 'EN');
    });
};

const getAppList = async () => {
    const api = new DerivAPIBasic({ endpoint: 'qa10.deriv.dev', lang: 'EN', app_id: 1016 });
    const token1 = sessionStorage.getItem('token1');
    await api.authorize(token1);
    const get_data = await api.appList();
    const app_list = get_data.app_list;
    const app_list_body = document.getElementById('app_list');
    while (app_list_body.firstChild) {
        app_list_body.removeChild(app_list_body.firstChild);
    }
    app_list.forEach((app) => {

        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${app.name}</td>
                        <td>${app.app_id}</td>
                        <td>${app.scopes.join(', ')}</td>
                        <td>${app.redirect_uri}</td>
                        <td>
                            <button class="app-update-btn" onclick="open_update_dialog(${app.app_id}, '${app.name}', '${app.scopes.join(', ')}', '${app.redirect_uri}' )">Update</button>
                        </td>
                        <td>
                            <button class="app-remove-btn" onclick="open_delete_dialog(${app.app_id})">Remove</button>
                        </td>
                        `;
        app_list_body.appendChild(tr);
    });
}

const removeApp = async (app_id) => {
    console.log(app_id);
    const api = new DerivAPIBasic({ endpoint: 'qa10.deriv.dev', lang: 'EN', app_id: 1016 });
    const token1 = sessionStorage.getItem('token1');
    await api.authorize(token1);
    await api.appDelete(app_id);
    send({ type: 'FETCH_APP_LIST' });
}

// add appUpdate sync function
const appUpdate = async (app_id, name, redirect_uri, scopes) => {
    const api = new DerivAPIBasic({ endpoint: 'qa10.deriv.dev', lang: 'EN', app_id: 1016 });
    const token1 = sessionStorage.getItem('token1');
    const arrayScopes = scopes.split(',').map((scope) => scope.trim());
    await api.authorize(token1);
    await api.appUpdate({ app_update: app_id, name, redirect_uri, "scopes": arrayScopes });
    send({ type: 'FETCH_APP_LIST' });
};
// add open dialog function
const open_delete_dialog = (app_id) => {
    const dialog = document.getElementById('delete_app_dialog');
    dialog.showModal();
    const delete_app_button = document.getElementById('delete_app_button');
    delete_app_button.addEventListener('click', () => {
        removeApp(app_id);
        dialog.close();
    });
}

// add open update dialog function
const open_update_dialog = (id, name, scopes, redirect_uri) => {
    console.log({ id, name, scopes, redirect_uri });
    const dialog = document.getElementById('update_app_dialog');
    dialog.showModal();
        /*
                    <div class="scopes">
                    <p class="bold scopes-field">Scopes:</p>
                    <div class="scopes-field">
                        <input id="update_read-scope" type="checkbox" value="read" />
                        <label for="update_read-scope">Read: View account activity</label>
                    </div>
                    <div class="scopes-field">
                        <input id="update_trade-scope" type="checkbox" value="trade" />
                        <label for="update_trade-scope">Trade: Buy and sell contracts</label>
                    </div>
                    <div class="scopes-field">
                        <input id="update_trading_information-scope" type="checkbox" value="trading_information" />
                        <label for="update_trading_information-scope">Trading Information: View trading and balance
                            information</label>
                    </div>
                    <div class="scopes-field">
                        <input id="update_payments-scope" type="checkbox" value="payments" />
                        <label for="update_payments-scope">Payments: Cashier (Deposit, Withdraw)</label>
                    </div>
                    <div class="scopes-field mb-0">
                        <input id="update_admin-scope" type="checkbox" value="admin" />
                        <label for="update_admin-scope">Admin: API token management, application management</label>
                    </div>
                </div>
    */
    const update_name = document.getElementById('update_app_name');
    update_name.value = name;
    const update_redirect_uri = document.getElementById('update_app_redirect_uri');
    update_redirect_uri.value = redirect_uri;
    const update_scopes = document.getElementById('app_scopes');
    update_scopes.value = scopes;
    const update_app_button = document.getElementById('update_app_button');
    update_app_button.addEventListener('click', () => {
        const name = update_name.value;
        const redirect_uri = update_redirect_uri.value;
        const scopes = update_scopes.value;
        appUpdate(id, name, redirect_uri, scopes);
        dialog.close();
    });
}
