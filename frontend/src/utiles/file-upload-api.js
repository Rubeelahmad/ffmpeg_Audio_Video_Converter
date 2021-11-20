import API from './API';
import { ENVIRONMENT_VARIABLES } from './constants';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function fileUploadApi(body) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};
        let formData = new FormData();
        formData.append("file", body.file);

        response = await API.post(`${BASE_API_URL}file-info/file-upload`, formData, config);

        return response?.data;
    } catch (error) {
        throw error;
    }
}