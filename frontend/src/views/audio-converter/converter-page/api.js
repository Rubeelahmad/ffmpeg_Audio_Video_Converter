import API from '../../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../../utiles/constants';
import { Audios } from '../../components/converter-file';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function converterApi(body, type) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};
        // let formData = new FormData();
        // formData.append("file", body.file);
        // const is_video_converter = _.find(Videos, function (video) { return video?.name.toLowerCase() === type.toLowerCase(); });
        const is_audio_converter = _.find(Audios, function (audio) { return audio?.name.toLowerCase() === type.toLowerCase(); });

        if (is_audio_converter) {
            response = await API.post(`${BASE_API_URL}file-info/audio-converter?to=${type}`, body, config);
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