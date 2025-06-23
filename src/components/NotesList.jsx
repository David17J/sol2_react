import React from 'react';

function NotesList({notes}) {
    return (
        notes.map((note) => (
            <div>
                <h6 className="mb-0 fw-semibold text-truncate flex-grow-1 me-2">
                    {note.title || "Unbenannte Notiz"}
                </h6>
            </div>
        ))
    );
}

export default NotesList;


