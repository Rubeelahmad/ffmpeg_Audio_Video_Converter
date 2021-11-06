import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FFMPEG from "react-ffmpeg";
import { converterApi } from './api';

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


function DropzoneArea(props) {
    const [imageData, setImageData] = useState(null);
    
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

    const handleConvert = () => {
        const body = {
            file: imageData
        };
        converterApi(body, props.converterType)
    }

    return (
        <>
            <div className="container">
                <div {...getRootProps({ style })} onChange={fileHandleChange}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    {/* <div className="btn-group">
                        <button className="btn btn-success btn-lg" type="button">
                            Large split button
                        </button>
                        <button type="button" className="btn btn-lg btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only"></span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}

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

                </div>
            </div>
        </>
    )
}

export default DropzoneArea;
