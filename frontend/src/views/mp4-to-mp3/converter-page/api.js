import API from '../../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../../utiles/constants';
import { Audios, Videos } from '../../components/converter-file';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function converterApi(body) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};
        // let formData = new FormData();
        // formData.append("file", body.file);

        response = await API.post(`${BASE_API_URL}file-info/audio-converter`, body, config);

        return response?.data;
    } catch (error) {
        throw error;
    }
}