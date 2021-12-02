import React, { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Loader from '../../components/loder';
import { errorMessageAlert, successMessageAlert } from '../../components//alert';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FileSizeInMB from './target-a-file-size-components/file-size-in-mb';
import FileSizeInPercentage from './target-a-file-size-components/file-size-in-percentage';
import { compressorApi } from './api';
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

const styleFile = {
    btnColor: {
        backgroundColor: '#f33',
        color: 'white'
    }
}

const videoCodecValues = ["264", "265"];
// const compressionMethodValues = ["Target a video resolution", "Target a file size (MB)", "Target a file size (Percentage)", "Target a video quilty", "Target a max bitrate"];
const compressionMethodValues = ["Target a file size (MB)", "Target a file size (Percentage)"];

function VideoCompressorForm(props) {
    const [imageData, setImageData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFileUploadOrConvert, setIsFileUploadOrConvert] = useState(null);
    const [videoCodec, setVideoCodec] = useState(videoCodecValues[0]);
    const [compressionMethod, setCompressionMethod] = useState(compressionMethodValues[0]);
    const [compressionMethodIndex, setCompressionMethodIndex] = useState(0);
    const [sizeInMB, setSizeInMB] = useState(1);
    const [sizeInPercentage, setSizeInPercentage] = useState(60);
    const [uploadBtn, setUploadBtn] = useState(false);
    const [convertBtn, setConvertBtn] = useState(false);
    const [downloadBtn, setDownloadBtn] = useState(false);
    const [downloadLink, setDownloadLink] = useState(null);
    const [fileNameAny, setFileNameAny] = useState(null);
    const [fileNameWithId, setFileNameWithId] = useState({});

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
        if (convertBtn == true || downloadBtn == true) {
            const removeFileRes = await removeFile(fileNameAny);
            if (removeFileRes == true) {
                setFileNameAny(null);
                setImageData(null);
                setDownloadLink(null);
                setDownloadBtn(false);
                setConvertBtn(false);
                setUploadBtn(false);
            }
        } else if (uploadBtn == true) {
            setFileNameAny(null);
            setImageData(null);
            setDownloadLink(null);
            setDownloadBtn(false);
            setConvertBtn(false);
            setUploadBtn(false);
        }
        // const removeFileRes = await removeFile(fileNameAny);


    }

    const fileHandleChange = async (e) => {
        let removeFileRes = true;
        if (downloadBtn == true || convertBtn == true) {
            /* Remove file from cloud which is uploaded */
            // removeFileRes = false;
            removeFileRes = await removeFile(fileNameAny);
        }

        if (removeFileRes) {
            setDownloadBtn(false);
            setConvertBtn(false);
            setUploadBtn(true);
            const file = e.target.files[0];
            setFileNameAny(file?.name);
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
            console.log("fileUploadRes?.code::::::: " , fileUploadRes.code)
            if (fileUploadRes?.code == 200) {
                setUploadBtn(false);
                setConvertBtn(true);
                setDownloadBtn(false);
                setFileNameAny(fileUploadRes?.items?.name);
                setFileNameWithId(fileUploadRes?.items);
                // setFileName(`${file?.name} is ready for convert...`);
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
        setIsFileUploadOrConvert("File Compressing...");
        setIsLoaded(true);

        try {
            const body = {
                id: fileNameWithId?.id,
                name: fileNameWithId?.name,
                videoCodec: videoCodec,
                compressionMethod: compressionMethod,
                sizeInMB: sizeInMB,
                sizeInPercentage: sizeInPercentage
            };
            const convertFileResponse = await compressorApi(body);
            if (convertFileResponse?.code >= 200 || convertFileResponse?.code < 205) {
                setImageData(null);
                setDownloadBtn(true);
                setUploadBtn(false);
                setConvertBtn(false);
                setFileNameAny(convertFileResponse?.items?.name)
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

    const handleCompressionMethod = (e) => {
        console.log("Compression Method", compressionMethodValues[e.target.value]);
        const selectedIndex = e.target.value;
        setCompressionMethodIndex(selectedIndex);
        setCompressionMethod(compressionMethodValues[selectedIndex]);
    }

    const handleTargetSizeInMB = (e) => {
        const value = e.target.value;
        if (sizeInMB < 1) {
            setSizeInMB(1);
        } else {
            setSizeInMB(value);
        }
    }

    const handleTargetSizeInPercentage = (e) => {
        const value = e.target.value;
        if (sizeInPercentage < 1) {
            setSizeInPercentage(1);
        } else if (value > 100) {
            setSizeInPercentage(100);
        } else {
            setSizeInPercentage(value)
        }
    }


    return (
        <>
            <div className="container">
                <div className="">
                    {
                        uploadBtn || convertBtn || downloadBtn ? (
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>{fileNameAny}</th>
                                        <th>
                                            {
                                                uploadBtn ? (
                                                    <button type="button" style={styleFile.btnColor} disabled={isLoaded} className="btn" onClick={handleUpload}>
                                                        Upload
                                                    </button>
                                                ) : convertBtn ? (
                                                    <button type="button" style={styleFile.btnColor} disabled={isLoaded} className="btn" onClick={handleConvert}>
                                                        Compress
                                                    </button>
                                                ) : downloadBtn ? (
                                                    <button type="button" disabled={isLoaded} style={styleFile.btnColor} className="btn">
                                                        Download File
                                                    </button>
                                                ) : ''
                                            }
                                        </th>
                                        <th><FontAwesomeIcon className="text-danger" style={{ fontSize: '24px', cursor: 'pointer' }} title="Remove file" icon={faTimes} onClick={handleRemoveFile} /></th>
                                    </tr>

                                </tbody>
                            </table>
                        ) : ''
                    }
                </div>

                {
                    isLoaded ? (
                        <>
                            <div style={{ textAlign: "center" }}>
                                <h5>{isFileUploadOrConvert}</h5>
                            </div>
                            <Loader isLoaded={isLoaded} />
                        </>
                    ) : (
                        <div {...getRootProps({ style })} onChange={fileHandleChange}>
                            <input {...getInputProps()} onChange={fileHandleChange} />
                            <p>Drag 'n' drop some files here, or click to select files</p>

                            <button type="button" className="btn p-3 mt-3" style={styleFile.btnColor} onClick={open}>
                                Open File Dialog
                            </button>
                        </div>
                    )
                }

                <Card className="mt-3" style={{ display: isLoaded ? "none" : "block", }}>
                    <Card.Header className="display-6">
                        Advanced Setting
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center mb-2 pb-3" style={{ borderBottom: '1px solid gray', fontSize: '20px' }}>
                            Video Quilty & Size
                        </Card.Title>
                        <Form>
                            <Row className="mt-3">
                                <Col xs={4} className="text-end">
                                    <Form.Label>Video Codec</Form.Label>
                                </Col>
                                <Col xs={8}>
                                    <Form.Select size="sm" onChange={(e) => {
                                        setVideoCodec(videoCodecValues[e.target.value]);
                                    }}>
                                        {
                                            videoCodecValues.map((value, index) => {
                                                return <option key={index} value={index}>
                                                    H{value}
                                                </option>
                                            })
                                        }
                                    </Form.Select>
                                    <Form.Text className="text-muted">
                                        H265 codec can reduce video size 20-75% more compared to H264 (especially high-resolution video)
                                    </Form.Text>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col xs={4} className="text-end">
                                    <Form.Label>Compression Method</Form.Label>
                                </Col>
                                <Col xs={8}>
                                    <Form.Select size="sm" onChange={handleCompressionMethod}>
                                        {
                                            compressionMethodValues.map((value, index) => {
                                                return <option key={index} value={index}>
                                                    {value}
                                                </option>
                                            })
                                        }
                                    </Form.Select>
                                    <Form.Text className="text-muted">
                                        Choose "Target a file size" to get an exact output file size. Choose "Target a video quality" when quality is of importance.
                                    </Form.Text>
                                </Col>
                            </Row>

                            {/* <FileSizeInPercentage /> */}
                            {
                                compressionMethodIndex == 0 ? <FileSizeInMB sizeInMB={sizeInMB} handleTargetSizeInMB={handleTargetSizeInMB} /> : compressionMethodIndex == 1 ? <FileSizeInPercentage sizeInPercentage={sizeInPercentage} handleTargetSizeInPercentage={handleTargetSizeInPercentage} /> : ""
                            }

                            <Row className="mt-3">
                                <Col xs={4} className="text-end">
                                    <Form.Label>Make video compatible with old devices?</Form.Label>
                                </Col>
                                <Col xs={8}>
                                    <Form.Check type="checkbox" />
                                    <Form.Check.Label className="text-muted">Only use this option if you plan to play the video on a really old device or if you are having playback issues (it compress less)</Form.Check.Label>
                                </Col>
                            </Row>

                        </Form>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default VideoCompressorForm;
