import React from 'react';

function NotesList({notes, onNoteSelect}) {
    return (
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
    );
}


export default NotesList;


