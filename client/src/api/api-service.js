import {ajax} from 'jquery';
import {statusCode,constant} from '../config';

class ApiService {
    ajaxCall(config) {
        const self = this;

        return new Promise(function(resolve, reject) {
            config.headers = {
                'Authorization': `Bearer ${self.token}`
            };

            return ajax(config).then(function(response) {
                if (response.status === statusCode.ok) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }).fail(function(error) {
                reject(error);
            });
        });
    }

    get token() {
        return localStorage.getItem(constant.tokenName);
    }
}

export default new ApiService;
