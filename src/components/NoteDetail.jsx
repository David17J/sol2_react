import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";

function NoteDetail({note, isEditing, onEdit}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "offen",
        tags: []
    });

    useEffect(() => {
        if (note) {
            setFormData({
                title: note.title || "",
                description: note.description || "",
                status: note.status || "offen",
                tags: note.tags || [],
            });
        }
    }, [note]);


    return (
        <div className="h-100 p-4 slide-in-right">
            <Card className="h-100 border-0">
                <Card.Header className="bg-transparent border-0 d-flex justify-content-between align-items-center py-3">
                    <div>
                        <h4 className="mb-1 fw-bold">
                            {isEditing
                                ? "Notiz bearbeiten"
                                : formData?.title || "Unbenannte Notiz"}
                        </h4>
                        <small className="text-muted">
                            <i className="bi bi-calendar3 me-1"></i>
                        </small>
                    </div>
                    <div>
                        <>
                            <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={onEdit}
                                className="me-2"
                            >
                                <i className="bi bi-pencil me-1"></i>
                                Bearbeiten
                            </Button>
                            <Button>
                                <i className="bi bi-trash me-1"></i>
                                Löschen
                            </Button>
                        </>

                    </div>
                </Card.Header>

                <Card.Body className="flex-grow-1 overflow-auto">
                    <div className="h-100">
                        <Row className="h-100">
                            <Col md={8} className="d-flex flex-column">
                                {/* Description */}
                                <div className="flex-grow-1 mb-4">
                                    <h6 className="fw-semibold mb-3">
                                        <i className="bi bi-file-text me-2"></i>
                                        Beschreibung
                                    </h6>
                                    <div
                                        className="p-3 border rounded"
                                        style={{
                                            minHeight: "200px",
                                            whiteSpace: "pre-wrap",
                                            backgroundColor: "var(--card-bg)",
                                        }}
                                    >
                                        {formData.description || (
                                            <span className="text-muted fst-italic">
                          Keine Beschreibung vorhanden
                        </span>
                                        )}
                                    </div>
                                </div>
                            </Col>

                            <Col md={4}>
                                {/* Status */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold mb-2">
                                        <i className="bi bi-flag me-2"></i>
                                        Status
                                    </h6>
                                </div>

                                {/* Tags */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold mb-2">
                                        <i className="bi bi-tags me-2"></i>
                                        Tags ({formData.tags.length})
                                    </h6>
                                    {formData.tags.length > 0 ? (
                                        <div>
                                            {formData.tags.map((tag) => (
                                                <span key={tag} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-muted fst-italic">
                                            Keine Tags vorhanden
                                        </span>
                                    )}
                                </div>

                                {/* Metadata */}
                                <div className="border-top pt-3">
                                    <h6 className="fw-semibold mb-2">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Details
                                    </h6>
                                    <div className="small text-muted">
                                        <div className="mb-1">
                                            <strong>Erstellt:</strong> 12.12.2025
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NoteDetail;
