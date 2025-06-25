import React, {useEffect, useState} from 'react';
import NotesList from "./NotesList.jsx";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
//import notesJson from '../assets/notes.json';
import NoteDetail from "./NoteDetail.jsx";
import noteService from '../services/NoteCrudService';

function NotesApp() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        noteService.loadNotes().then(
            (notes) => {
                setNotes(notes);
            }
        )
    }, [notes]);


    const handleNoteSelect = (note) => {
        setSelectedNote(note);
        // setIsEditing(false);
        console.log(note.title);
    };

    const handleNoteCreate = () => {
        const newNote = {
            title: "Neue Notiz",
            description: "",
            status: "offen",
            tags: [],
        };
        noteService.createNote(newNote);
    };

    return (
        <div className="bg-gradient-primary min-vh-100">
            {/* Navigation */}
            <Navbar
                expand="lg"
                className="navbar-dark"
                style={{background: "rgba(0,0,0,0.1)", backdropFilter: "blur(10px)"}}
            >
                <Container fluid>
                    <Navbar.Brand className="fw-bold">
                        <i className="bi bi-journal-text me-2"></i>
                        Notes App
                    </Navbar.Brand>
                    <Nav className="ms-auto d-flex align-items-center">
            <span className="text-light me-3">
              <i className="bi bi-person-circle me-2"></i>
              Willkommen!
            </span>

                        <Button
                            variant="outline-light"
                            size="sm"
                            className="ms-2"
                        >
                            <i className="bi bi-box-arrow-right me-1"></i>
                            Abmelden
                        </Button>
                    </Nav>
                </Container>
            </Navbar>


            <Container fluid className="h-100 p-0">
                <Row className="g-0 h-100">
                    <Col lg={4} xl={3} className="d-lg-block">
                        <NotesList notes={notes}
                                   onNoteSelect={handleNoteSelect}
                                   onNoteCreate={handleNoteCreate}
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