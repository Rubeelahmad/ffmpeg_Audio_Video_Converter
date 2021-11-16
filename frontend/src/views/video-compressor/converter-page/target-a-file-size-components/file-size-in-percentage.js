import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

const FileSizeInPercentage = ({ handleTargetSizeInPercentage, sizeInPercentage }) => {
    return (
        <>
            <Row className="mt-3">
                <Col xs={4} className="text-end">
                    <Form.Label>Select Target Size (%)</Form.Label>
                </Col>
                <Col xs={8}>
                    <Row>
                        <Col xs={6}>
                            <Form.Range type="text" size="sm" min="1" max="100" value={sizeInPercentage} onChange={handleTargetSizeInPercentage} />
                        </Col>
                        <Col xs={6}>
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>

                            </Form.Label>
                            <InputGroup className="mb-2">
                                <Form.Control type="number" min="1" max="100" id="inlineFormInputGroup" placeholder="File size percentage value" value={sizeInPercentage} onChange={handleTargetSizeInPercentage} />
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Form.Text className="text-muted">
                            Select a target file size as a percentage of the original. Smaller values compress more. For example, a 100Mb file would become 25Mb if you select 25%.
                        </Form.Text>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default FileSizeInPercentage;