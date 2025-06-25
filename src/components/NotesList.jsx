import React from 'react';
import {Button} from "react-bootstrap";

function NotesList({notes, onNoteSelect, onNoteCreate}) {
    return (
        <div className="sidebar slide-in-left">
            <div className="p-3 border-bottom border-opacity-10">

                {/* Suche Meine Suche */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0 fw-bold">
                        <i className="bi bi-list-ul me-2"></i>
                        Meine Notizen
                    </h5>
                    <Button
                        size="sm"
                        className="btn-gradient-primary"
                        onClick={onNoteCreate}
                    >
                        <i className="bi bi-plus-lg"></i>
                    </Button>
                </div>
            </div>


            {/* Notizliste*/}
            <div className="flex-grow-1 overflow-auto p-3">
                {
                    notes.map((note) => (
                        <div className={`note-item active`} onClick={() => onNoteSelect(note)}>
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <h6 className="mb-0 fw-semibold text-truncate flex-grow-1 me-2">
                                    {note.title || "Unbenannte Notiz"}
                                </h6>
                                <div className="d-flex align-items-center">
                                </div>
                            </div>
                            <p className="small text-muted mb-2 lh-sm">
                                {note.description || "Keine Beschreibung"}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default NotesList;


