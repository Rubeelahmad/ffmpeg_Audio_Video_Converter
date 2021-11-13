import API from '../../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../../utiles/constants';
import { Audios, Videos } from '../../components/converter-file';
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

        if (type == 'mp3') {
            response = await API.post(`${BASE_API_URL}file-info/mp4-to-mp3`, formData, config);
        } else {
            console.log("Data::::::::: else:::::");
            const obj = {
                code: 400,
                message: `${type} is not supported`,
                items: [],
            }
            response.data = obj;
        }

        return response?.data;
    } catch (error) {
        throw error;
    }
}