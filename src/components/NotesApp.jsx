import React from 'react';
import NotesList from "./NotesList.jsx";
import NoteDetail from "./NoteDetail.jsx";
import {Col, Container, Row} from "react-bootstrap";

function NotesApp(props) {
    return (
        <div className="bg-gradient-primary min-vh-100">
            <Container fluid className="h-100 p-0">
                <Row className="g-0 h-100">
                    <Col lg={4} xl={3} className="d-lg-block">
                        <div><NotesList></NotesList></div>
                    </Col>
                    <Col lg={8} xl={9}>
                        <div><NoteDetail></NoteDetail></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NotesApp;