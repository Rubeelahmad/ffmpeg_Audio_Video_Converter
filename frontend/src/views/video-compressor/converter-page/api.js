import API from '../../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../../utiles/constants';
import { Audios, Videos } from '../../components/converter-file';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function compressorApi(body) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};

        response = await API.post(`${BASE_API_URL}file-info/video-compress`, body, config);
        console.log("Data::::::::::::::: resposne::::::::::: ", response.data)

        return response?.data;
    } catch (error) {
        throw error;
    }
}