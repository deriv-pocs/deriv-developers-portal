import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';
import { stateService } from '../stateSignal';
import { token1, server_url, app_id } from '../storageSignals';

const registerApp = async (name, redirect_uri, scopes, verification_uri, app_markup_percentage) => {
    stateService.send('SUBMIT_REGISTRATION');
    const api = new DerivAPIBasic({ endpoint: server_url(), lang: 'EN', app_id: app_id() });
    await api.authorize(token1());
    await api.send({ app_register: 1, name, redirect_uri, scopes, verification_uri, app_markup_percentage })
}

export const useRegisterApp = (form_data) => {
    const name = form_data.app_name;
    const redirect_uri = form_data.app_redirect_uri;
    const scopes = form_data.scopes;
    const verification_uri = form_data.verification_uri;
    const app_markup_percentage = form_data.app_markup_percentage;
    registerApp(name, redirect_uri, scopes, verification_uri, app_markup_percentage)
}