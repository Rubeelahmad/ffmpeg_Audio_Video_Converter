import API from '../../../utiles/API';
import _ from 'lodash';
import { ENVIRONMENT_VARIABLES } from '../../../utiles/constants';
import { Audios, Videos } from '../../components/converter-file';
const BASE_API_URL = ENVIRONMENT_VARIABLES.BASE_API_URL;


export async function converterApi(body, type, converter) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};

        if (converter.toLowerCase() == "video") {
            const is_video_converter = _.find(Videos, function (video) { return video?.name.toLowerCase() === type.toLowerCase(); });
            if (is_video_converter) {
                response = await API.post(`${BASE_API_URL}file-info/video-converter?to=${type}`, body, config);
            } else {
                const obj = {
                    code: 400,
                    message: `${type} is not supported`,
                    items: [],
                }
                response.data = obj;
            }
        } else if (converter.toLowerCase() == "audio") {
            const is_audio_converter = _.find(Audios, function (audio) { return audio?.name.toLowerCase() === type.toLowerCase(); });

            if (is_audio_converter) {
                response = await API.post(`${BASE_API_URL}file-info/audio-converter?to=${type}`, body, config);
            } else {
                const obj = {
                    code: 400,
                    message: `${type} is not supported`,
                    items: [],
                }
                response.data = obj;
            }
        } else if (converter.toLowerCase() == "mp4-to-mp3") {
            response = await API.post(`${BASE_API_URL}file-info/audio-converter`, body, config);
        }

        return response?.data;
    } catch (error) {
        throw error;
    }
}