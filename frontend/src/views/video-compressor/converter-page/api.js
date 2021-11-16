import API from '../../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../../utiles/constants';
import { Audios, Videos } from '../../components/converter-file';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function compressorApi(body, file) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};
        let formData = new FormData();
        formData.append("file", file);
        formData.append("videoCodec", body.videoCodec);
        formData.append("compressionMethod", body.compressionMethod);
        formData.append("sizeInMB", body.sizeInMB);
        formData.append("sizeInPercentage", body.sizeInPercentage);

        response = await API.post(`${BASE_API_URL}file-info/video-compress`, formData, config);
        console.log("Data::::::::::::::: resposne::::::::::: ", response.data)

        return response?.data;
    } catch (error) {
        throw error;
    }
}