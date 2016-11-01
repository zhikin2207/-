const baseUrl = 'http://localhost:58681/api';

export const url = {
    base: baseUrl,
    token: `${baseUrl}/token`,
    account: `${baseUrl}/account`,
    text: `${baseUrl}/text`
};

export const statusCode = {
    ok: 200,
    error: 500
};

export const constant = {
    tokenName: 'token'
};
