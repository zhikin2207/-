import {urls} from '../config';
import apiService from './api-service';
import defaultConfig from './config';

class UserService {
    signin(user) {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: urls.token,
            data: user
        });
    }

    signup(user) {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: urls.account,
            data: user
        });
    }

    getProfile() {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: urls.account,
            method: 'GET'
        });
    }
}

export default new UserService;
