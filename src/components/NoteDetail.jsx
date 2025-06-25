import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {statusOptions} from "../utils/Utils.js";

function NoteDetail({note, isEditing, onEditNote, onNoteDelete, onSave, onCancel}) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "offen",
        tags: []
    });

    useEffect(() => {
        if (note) {
            setFormData({
                title: note?.title || "",
                description: note?.description || "",
                status: note?.status || "offen",
                tags: note?.tags || [],
            });
        }
    }, [note]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        onSave(formData);
        // setShowSuccess(true);
        // setTimeout(() => setShowSuccess(false), 3000);
    };

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

                        {isEditing ? (

                                <>
                                    <Button type="submit" className="me-2"
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={() => onSave(formData)}
                                    >
                                        <i className="bi bi-pencil me-1"></i>
                                        Speichern
                                    </Button>
                                    <Button onClick={() => onCancel()}>
                                        <i className="bi bi-trash me-1"></i>
                                        Abbrechen
                                    </Button>
                                </>
                            )
                            :
                            (
                                <>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        onClick={onEditNote}
                                        className="me-2"
                                    >
                                        <i className="bi bi-pencil me-1"></i>
                                        Bearbeiten
                                    </Button>
                                    <Button onClick={() => onNoteDelete(note)}>
                                        <i className="bi bi-trash me-1"></i>
                                        Löschen
                                    </Button>
                                </>
                            )
                        }
                    </div>
                </Card.Header>

                <Card.Body className="flex-grow-1 overflow-auto">
                    {isEditing ? (
                        // Editmodus
                        <Form className="h-100" onSubmit={() => onSave(formData)}>
                            <Row className="h-100">
                                <Col md={8} className="d-flex flex-column">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">
                                            <i className="bi bi-card-text me-2"></i>
                                            Titel
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            value={formData?.title}
                                            onChange={handleInputChange}
                                            placeholder="Geben Sie einen Titel ein..."
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 flex-grow-1">
                                        <Form.Label className="fw-semibold">
                                            <i className="bi bi-file-text me-2"></i>
                                            Beschreibung
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="description"
                                            value={formData?.description}
                                            onChange={handleInputChange}
                                            placeholder="Geben Sie eine Beschreibung ein..."
                                            style={{minHeight: "300px", resize: "vertical"}}
                                        />
                                    </Form.Group>

                                    <div className="mt-auto">

                                    </div>
                                </Col>

                                <Col md={4}>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-semibold">
                                            <i className="bi bi-flag me-2"></i>
                                            Status
                                        </Form.Label>
                                        <Form.Select
                                            name="status"
                                            value={formData?.status}
                                            onChange={handleInputChange}
                                        >
                                            {statusOptions.map((status) => (
                                                <option key={status.value} value={status.value}>
                                                    {status.label}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">
                                            <i className="bi bi-tags me-2"></i>
                                            Tags
                                        </Form.Label>
                                        <InputGroup className="mb-2">
                                            <Form.Control
                                                type="text"
                                                // value={newTag}
                                                // onChange={(e) => setNewTag(e.target.value)}
                                                // onKeyPress={handleKeyPress}
                                                placeholder="Neuen Tag hinzufügen..."
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                // onClick={() => handleAddTag()}
                                                // disabled={!newTag.trim()}
                                            >
                                                <i className="bi bi-plus"></i>
                                            </Button>
                                        </InputGroup>

                                        {/* Predefined Tags */}
                                        {/*{availableTags.length > 0 && (*/}
                                        {/*    <div className="mb-3">*/}
                                        {/*        <small className="text-muted mb-2 d-block">*/}
                                        {/*            Häufig verwendete Tags:*/}
                                        {/*        </small>*/}
                                        {/*        <div>*/}
                                        {/*            {availableTags.slice(0, 6).map((tag) => (*/}
                                        {/*                <Button*/}
                                        {/*                    key={tag}*/}
                                        {/*                    variant="outline-secondary"*/}
                                        {/*                    size="sm"*/}
                                        {/*                    className="me-1 mb-1"*/}
                                        {/*                    onClick={() => handleAddTag(tag)}*/}
                                        {/*                >*/}
                                        {/*                    {tag}*/}
                                        {/*                </Button>*/}
                                        {/*            ))}*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}

                                        {/* Current Tags */}
                                        <div>
                                            {formData.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    className="tag d-inline-flex align-items-center me-1 mb-1"
                                                >
                                                    {tag}
                                                    <Button
                                                        variant="link"
                                                        size="sm"
                                                        className="p-0 ms-1 text-white"
                                                        // onClick={() => handleRemoveTag(tag)}
                                                        style={{fontSize: "0.7rem"}}
                                                    >
                                                        <i className="bi bi-x"></i>
                                                    </Button>
                                                </Badge>
                                            ))}
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    ) : (
                        // Lesemodus
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
                                        <Badge className={`status-badge status-${note?.status} me-2`}>
                                            {
                                                statusOptions.find((opt) => opt.value === note?.status)
                                                    ?.label
                                            }
                                        </Badge>
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
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default NoteDetail;
