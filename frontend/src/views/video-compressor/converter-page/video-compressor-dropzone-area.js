import React, { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Loader from '../../components/loder';
import { errorMessageAlert, successMessageAlert } from '../../components//alert';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FileSizeInMB from './target-a-file-size-components/file-size-in-mb';
import FileSizeInPercentage from './target-a-file-size-components/file-size-in-percentage';
import { compressorApi } from './api';

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

const videoCodecValues = ["264", "265"];
// const compressionMethodValues = ["Target a video resolution", "Target a file size (MB)", "Target a file size (Percentage)", "Target a video quilty", "Target a max bitrate"];
const compressionMethodValues = ["Target a file size (MB)", "Target a file size (Percentage)"];

function VideoCompressorForm(props) {
    const [imageData, setImageData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoCodec, setVideoCodec] = useState(videoCodecValues[0]);
    const [compressionMethod, setCompressionMethod] = useState(compressionMethodValues[0]);
    const [compressionMethodIndex, setCompressionMethodIndex] = useState(0);
    const [sizeInMB, setSizeInMB] = useState(1);
    const [sizeInPercentage, setSizeInPercentage] = useState(60);

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
        const file = e.target.files[0];
        setImageData(file);
    }

    const handleConvert = async () => {
        setIsLoaded(true);
        const body = {
            videoCodec: videoCodec,
            compressionMethod: compressionMethod,
            sizeInMB: sizeInMB,
            sizeInPercentage: sizeInPercentage
        };

        try {
            const response = await compressorApi(body, imageData);
            if (response?.code >= 200 || response?.code < 205) {
                successMessageAlert(response.message) //Show alert after convert
            } else {
                errorMessageAlert();
            }

        } catch (error) {
            console.error("Error::::::::: handle convert function sddfw", error);
            errorMessageAlert();
        } finally {
            setIsLoaded(false);
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


    if (isLoaded) {
        return <Loader isLoaded={isLoaded} />
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

                <Card className="mt-3">
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


                <div className="mt-3 d-flex justify-content-center">
                    {
                        imageData ? (
                            <button type="button" className="btn btn-info p-3" onClick={handleConvert}>
                                Convert
                            </button>
                        ) : ''
                    }

                </div>
            </div>
        </>
    )
}

export default VideoCompressorForm;
