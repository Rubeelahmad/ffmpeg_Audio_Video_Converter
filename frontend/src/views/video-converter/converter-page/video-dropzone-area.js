import React, { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { converterApi } from './api';
import Loader from '../../components/loder';
import { errorMessageAlert, successMessageAlert } from '../../components/alert';
import { fileUploadApi, removeFile } from '../../../utiles/file-upload-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
    backgroundColor: '#3c3c3c',
    backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(-45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, .06) 0), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, .06) 0)',
    backgroundSize: '24px 24px',
    backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0',
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


function VideoDropzoneArea(props) {
    const [imageData, setImageData] = useState(null);
    const [uploadBtn, setUploadBtn] = useState(false);
    const [convertBtn, setConvertBtn] = useState(false);
    const [downloadBtn, setDownloadBtn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFileUploadOrConvert, setIsFileUploadOrConvert] = useState(null);
    const [localFileName, setLocalFileName] = useState(null);
    const [cloudFileName, setCloudFileName] = useState(null);
    const [downloadLink, setDownloadLink] = useState(null);


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


    const handleRemoveFile = async () => {
        const removeFileRes = await removeFile(cloudFileName?.name);
        if (removeFileRes == true) {
            setImageData(null);
            setCloudFileName(null);
            setLocalFileName(null);
            setDownloadLink(null);
            setDownloadBtn(false);
            setConvertBtn(false);
            setUploadBtn(false);
        }

    }

    const fileHandleChange = async (e) => {
        let removeFileRes = true;
        if (downloadBtn == true || convertBtn == true) {
            /* Remove file from cloud which is uploaded */
            removeFileRes = false;
            removeFileRes = await removeFile(cloudFileName?.name);
        }

        if (removeFileRes) {
            setDownloadBtn(false);
            setConvertBtn(false);
            setUploadBtn(true);
            const file = e.target.files[0];
            setLocalFileName(file?.name);
            setCloudFileName(null);
            setDownloadLink(null);
            setImageData(file);
        }

    }

    const handleUpload = async () => {
        setIsFileUploadOrConvert("File Uploading...");
        setIsLoaded(true);
        const body = {
            file: imageData
        };
        try {
            const fileUploadRes = await fileUploadApi(body);
            if (fileUploadRes?.code == 200) {
                setUploadBtn(false);
                setConvertBtn(true);
                setDownloadBtn(false);
                setCloudFileName(fileUploadRes?.items);
                setLocalFileName(null);
                // setFileName(`${file?.name} is ready for convert...`);
                setIsFileUploadOrConvert("File Converting...");
                successMessageAlert(`${fileUploadRes?.items?.name} uploaded successfully!`)

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

    const handleConvert = async () => {
        setIsFileUploadOrConvert("File Converting...");
        setIsLoaded(true);

        try {
            const convertFileResponse = await converterApi(cloudFileName, props.converterType);
            if (convertFileResponse?.code >= 200 || convertFileResponse?.code < 205) {
                setImageData(null);
                setDownloadBtn(true);
                setUploadBtn(false);
                setConvertBtn(false);
                setLocalFileName(null);
                setCloudFileName(null);
                setDownloadLink(`Link from backend`);

                successMessageAlert(convertFileResponse.message) //Show alert after convert
            } else {
                errorMessageAlert();
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
                <div className="">
                    {
                        cloudFileName ? (
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>{cloudFileName?.name}</th>
                                        <th><FontAwesomeIcon className="text-danger" style={{ fontSize: '24px', cursor: 'pointer' }} title="Remove file" icon={faTimes} onClick={handleRemoveFile} /></th>
                                    </tr>
                                </tbody>
                            </table>
                        ) : ''
                    }
                </div>
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} onChange={fileHandleChange} />
                    <p>Drag 'n' drop some files here, or click to select files</p>

                    <button type="button" className="btn p-3 mt-3" style={{backgroundColor: '#f33', color: 'white'}} onClick={open}>
                        Open File Dialog
                    </button>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    {
                        uploadBtn ? (
                            <button type="button" className="btn btn-info p-3" onClick={handleUpload}>
                                Upload
                            </button>
                        ) : ''
                    }

                    {
                        convertBtn ? (
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

export default VideoDropzoneArea;
