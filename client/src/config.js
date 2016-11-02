const baseUrl = 'http://localhost:58681/api';

export const urls = {
    base: baseUrl,
    defaultRedirect: '/',
    token: `${baseUrl}/token`,
    account: `${baseUrl}/account`,
    statistics: `${baseUrl}/statistics`,
    text: {
        top15words: `${baseUrl}/text/top15words`
    }
};

export const statusCodes = {
    ok: 200,
    error: 500
};

export const constants = {
    tokenKey: 'token',
    userKey: 'user'
};

export const errorMessages = {

};
