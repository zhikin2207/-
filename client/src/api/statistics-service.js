import {url} from '../config';
import apiService from './api-service';
import defaultConfig from './config';

class StatisticsService {
    set(letters) {
        return apiService.ajaxCall({
            ...defaultConfig,
            url: url.base + '/statistics',
            method: 'POST',
            data: { letters }
        });
    }
}

export default new StatisticsService;
