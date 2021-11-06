import API from '../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../utiles/constants';
import { Audios, Videos } from '../components/converter-file';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function converterApi(body, type) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};
        let formData = new FormData();
        formData.append("file", body.file);
        if (_.findIndex(Videos, function (video) { return video?.name?.toLowerCase() === type; }) > -1) {
            response = await API.post(`${BASE_API_URL}file-info/video-converter?to=${type}`, formData, config);
        } else if ((_.findIndex(Audios, function (audio) { return audio?.name?.toLowerCase() === type; })) > -1) {
            response = await API.post(`${BASE_API_URL}file-info/audio-converter?to=${type}`, formData, config);
        } else {
            response.code = 400;
            response.message = `${type} is not supported`;
            response.items = [];
        }
        

        console.log("Response:::::::::::::::::::::::: ", response?.data);
        return response?.data;
    } catch (error) {
        throw error;
    }
}