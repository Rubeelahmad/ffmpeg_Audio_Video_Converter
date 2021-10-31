import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import FFMPEG from "react-ffmpeg";

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
        console.log("E:::::: ", e.target.files[0]);
        const file = e.target.files[0];
        await FFMPEG.process(
            file,
            '-metadata location="" -metadata location-eng="" -metadata author="" -c:v copy -c:webm copy',
            function (e) {
                const video = e.result;
                console.log("video:::::::: ", e);
            }
        );
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
            </div>
        </>
    )
}

export default DropzoneArea;
