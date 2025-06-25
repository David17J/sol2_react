import notesApiService from './NotesApiService.js';

class NoteCrudService {
    constructor() {
    }

    async loadNotes() {
        return await notesApiService.loadNotes();
    }

    // Get a specific note
    getNote(noteId) {
        const notes = JSON.parse(localStorage.getItem("notes-app-notes") || "[]");
        return notes.find((note) => note.id === noteId);
    }

    async createNote(note) {
        await notesApiService.saveNote(note);
        return await notesApiService.loadNotes();
    }

    async deleteNote(nodeId) {
        await notesApiService.deleteNote(nodeId);
    }

    // Update an existing note
    async updateNote(note) {
        return await notesApiService.saveNote(note);
    }

}

export default new NoteCrudService();