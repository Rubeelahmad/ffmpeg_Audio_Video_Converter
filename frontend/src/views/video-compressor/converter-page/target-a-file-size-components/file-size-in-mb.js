import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const FileSizeInMB = () => {
    return (
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

export default FileSizeInMB;