import React, { useCallback, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import DropzoneArea from './Dropzone-area';

function Converter(props) {
    const { type } = useParams();
    const [converterType, setConvertType] = useState(type.split("-")[0]);

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1><span className="text-uppercase">{converterType}</span> Converter</h1>
                    <h6 className="lead">Convert your files to and from <span className="text-uppercase">{converterType}</span>, for free</h6>
                </div>
                <div className="mt-4 mb-4">
                    <DropzoneArea />
                </div>
            </div>
        </>
    )
}

export default Converter;
