import React, { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { converterApi } from './api';
import Loader from '../../components/loder';
import { errorMessageAlert, successMessageAlert } from '../../components/alert';
import { fileUploadApi } from '../../../utiles/file-upload-api';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function MP4ToMP3DropzoneArea(props) {
    const [imageData, setImageData] = useState(null);
    const [downloadBtn, setDownloadBtn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFileUploadOrConvert, setIsFileUploadOrConvert] = useState(null);

    const {
        getRootProps,
        getInputProps,
        open,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        // accept: 'image/*',
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const fileHandleChange = async (e) => {
        setDownloadBtn(false)
        const file = e.target.files[0];
        setImageData(file);
    }

    const handleConvert = async () => {
        setIsFileUploadOrConvert("File Uploading...");
        setIsLoaded(true);
        const body = {
            file: imageData
        };

        try {
            const fileUploadRes = await fileUploadApi(body);
            if (fileUploadRes?.code == 200) {
                setIsFileUploadOrConvert("File Converting...");
                const convertFileResponse = await converterApi(fileUploadRes?.items, props.converterType);
                if (convertFileResponse?.code >= 200 || convertFileResponse?.code < 205) {
                    setImageData(null);
                    setDownloadBtn(true);
                    successMessageAlert(convertFileResponse.message) //Show alert after convert
                } else {
                    errorMessageAlert();
                }
            } else {
                errorMessageAlert("File dose not uploaded due to internal error!");
            }

        } catch (error) {
            console.error("Error::::::::: handle convert function", error);
            errorMessageAlert();
        } finally {
            setIsLoaded(false);
            setIsFileUploadOrConvert(null);
        }
    }

    if (isLoaded) {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h5>{isFileUploadOrConvert}</h5>
                </div>
                <Loader isLoaded={isLoaded} />
            </>
        )
    }

    return (
        <>
            <div className="container">
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} onChange={fileHandleChange} />
                    <p>Drag 'n' drop some files here, or click to select files</p>

                    <button type="button" className="btn btn-success p-4" onClick={open}>
                        Open File Dialog
                    </button>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    {
                        imageData ? (
                            <button type="button" className="btn btn-info p-3" onClick={handleConvert}>
                                Convert
                            </button>
                        ) : ''
                    }

                    {
                        downloadBtn ? (
                            <button type="button" className="btn btn-info p-3">
                                Download File
                            </button>
                        ) : ''
                    }

                </div>
            </div>
        </>
    )
}

export default MP4ToMP3DropzoneArea;
