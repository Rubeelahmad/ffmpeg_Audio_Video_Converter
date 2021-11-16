import React from "react";

const qualityCRFValues = ["18 Best quailty - large size", 19, 20, "21 Good quailty - medium size (default)", 22, 23, 24, 25, 26, 27, "28 Okay quailty - small size", ]

const VideoQuilty = () => {
    return(
        <>
            <Row className="mt-3">
                <Col xs={4} className="text-end">
                    <Form.Label>Target Size (MB)</Form.Label>
                </Col>
                <Col xs={8}>
                    <Form.Control type="text" size="sm" value="1" onChange={() => {
                        console.log("target size")
                    }} />
                    <Form.Text className="text-muted">
                        Enter desired video file size in MB (Megabytes)
                    </Form.Text>
                </Col>
            </Row>
        </>
    )
}

export default VideoQuilty;