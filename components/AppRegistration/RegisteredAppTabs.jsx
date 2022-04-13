import { send } from '../../stateSignal';

export default function RegisteredAppTabs() {
    <div className="registered-apps-tabs">
        <button onClick={() => send('REGISTER_TOGGLE_TAB')} id="register_button" className="register-button">
            Register your application
        </button>
        <button onClick={() => send('MANAGE_TOGGLE_TAB')} id="manage_button" className="manage-button">
            Manage existing applications
        </button>
    </div>
}