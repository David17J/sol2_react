import React from 'react';

function NoteDetail({paramSelectedNote}) {
    return (
        <>
            <div>{paramSelectedNote?.title}</div>
            <div>{paramSelectedNote?.description}</div>
        </>
    );
}

export default NoteDetail;
