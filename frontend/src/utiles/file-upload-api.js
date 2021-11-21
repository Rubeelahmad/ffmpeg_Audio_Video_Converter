import Swal from 'sweetalert2';
import { errorMessageAlert } from '../views/components/alert';
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

export async function fileRemoveApi(body) {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        let response = {};

        response = await API.post(`${BASE_API_URL}file-info/remove-file`, body, config);

        return response?.data;
    } catch (error) {
        throw error;
    }
}

export const removeFile = async (fileName) => {
    const body = {
        name: fileName,
    }
    try {
        
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: `You want to remove ${fileName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        });

        if (result.isConfirmed) {
            const removeFileRes = await fileRemoveApi(body)
            Swal.fire(
                'Removed!',
                'Your file has been Removed.',
                'success'
            )
            return true;
        } else {
            return false;
        }



    } catch (error) {
        console.error("Error::::::::: handle remove file function", error);
        errorMessageAlert();
    }
}