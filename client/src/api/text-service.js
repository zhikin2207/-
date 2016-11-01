import {url} from '../config';
import apiService from './api-service';
import defaultConfig from './config';

class TextService {
    topWords() {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: url.base + '/text/top15words',
            method: 'GET'
        });
    }
}

export default new TextService;
