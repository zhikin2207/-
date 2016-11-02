import {ajax} from 'jquery';
import {statusCodes,constants} from '../config';

class ApiService {
    ajaxCall(config) {
        const self = this;

        return new Promise(function(resolve, reject) {
            config.headers = {
                'Authorization': `Bearer ${self.token}`
            };

            return ajax(config).then(function(response) {
                if (response.status === statusCodes.ok) {
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
        return localStorage.getItem(constants.tokenKey);
    }
}

export default new ApiService;
