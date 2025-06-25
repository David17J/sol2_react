import React, {useEffect, useState} from 'react';
import NotesList from "./NotesList.jsx";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
//import notesJson from '../assets/notes.json';
import NoteDetail from "./NoteDetail.jsx";
import noteService from '../services/NoteCrudService';

function NotesApp() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
        noteService.createNote(newNote).then(r =>
            console.log("new note", r),
        );
    };

    const handleDeleteNote = (note) => {
        noteService.deleteNote(note.id);
    }

    const handleNoteSave = (formData) => {
        try {
            if (selectedNote.id) {
                // Update existing note
                const note = {
                    id: selectedNote.id,
                    title: formData.title,
                    description: formData.description,
                    status: formData.status,
                }
                const updatedNote = noteService.updateNote(note);
                // setNotes((prev) =>
                //     prev.map((note) =>
                //         note.id === selectedNote.id ? updatedNote : note,
                //     ),
                // );
                setSelectedNote(updatedNote);
            }
            setIsEditing(false);
            loadNotes(); // Refresh to ensure proper sorting
        } catch (error) {
            console.error("Fehler beim Speichern der Notiz:", error);
        }
    };

    const handleEditNote = () => {
        setIsEditing(true);
    }

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
                                   onNoteDelete={handleDeleteNote}
                        ></NotesList>
                    </Col>
                    <Col lg={8} xl={9}>
                        <NoteDetail note={selectedNote}
                                    isEditing={isEditing}
                                    onNoteDelete={handleDeleteNote}
                                    onEditNote={handleEditNote}
                                    onSave={handleNoteSave}
                        ></NoteDetail>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default NotesApp;