const sanitizedURL = () => {
    const current_url = window.location.href;
    const split_url = current_url.split('?');
    return split_url[0];
}

export const useSanitizeURL = () => window.history.replaceState(null, 'sanitized', sanitizedURL());
