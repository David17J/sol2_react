import React, {useEffect, useState} from 'react';
import NotesList from "./NotesList.jsx";
import NoteDetail from "./NoteDetail.jsx";
import {Col, Container, Row} from "react-bootstrap";

function NotesApp(props) {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        fetch('/assets/notes.json')  // Pfad ab `public/`
            .then(res => res.json())
            .then(json => {
                setNotes(json)
            });
    }, []);
    return (
        <div className="bg-gradient-primary min-vh-100">
            <Container fluid className="h-100 p-0">
                <Row className="g-0 h-100">
                    <Col lg={4} xl={3} className="d-lg-block">
                        <NotesList notes={notes}></NotesList>
                    </Col>
                    <Col lg={8} xl={9}>
                        <NoteDetail></NoteDetail>
                        . </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NotesApp;