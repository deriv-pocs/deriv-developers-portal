import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';
import { token1, server_url, app_id } from '../storageSignals';

const registerApp = async (name, redirect_uri, scopes, verification_uri, app_markup_percentage) => {
    const api = new DerivAPIBasic({ endpoint: server_url(), lang: 'EN', app_id: app_id() });
    const authorize = await api.authorize(token1());
    api.appRegister({})
    console.log(authorize);
}

export const useRegisterApp = (form_data) => {
    const name = form_data.app_name;
    const redirect_uri = form_data.app_redirect_uri;
}