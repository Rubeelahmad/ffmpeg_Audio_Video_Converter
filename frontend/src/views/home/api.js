import API from '../../utiles/API';
import { ENVIRONMENT_VARIABLES } from '../../utiles/constants';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function converterApi(body, type) {
    console.log("Data:::::::::::::::")
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let formData = new FormData();
        formData.append("file", body.file);
        const response = await API.post(`${BASE_API_URL}file-info/video-converter?to=${type}`, formData, config);
        console.log("Response:::::::::::::::::::::::: ", response)
    } catch (error) {
        throw error;
    }
}