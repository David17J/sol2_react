import React, {useState} from 'react';
import NotesList from "./NotesList.jsx";
import {Col, Container, Row} from "react-bootstrap";
import notesJson from '../assets/notes.json';
import NoteDetail from "./NoteDetail.jsx";

function NotesApp() {
    const [notes, setNotes] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);

    // useEffect(() => {
    //     if (notesJson) {
    //         setNotes(notesJson);
    //     }
    // }, []);


    const handleNoteSelect = (note) => {
        setSelectedNote(note);
        // setIsEditing(false);
        console.log(note.title);
    };

    return (
        <div className="bg-gradient-primary min-vh-100">
            <Container fluid className="h-100 p-0">
                <Row className="g-0 h-100">
                    <Col lg={4} xl={3} className="d-lg-block">
                        <NotesList notes={notesJson}
                                   onNoteSelect={handleNoteSelect}
                        ></NotesList>
                    </Col>
                    <Col lg={8} xl={9}>
                        <NoteDetail note={selectedNote}></NoteDetail>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default NotesApp;