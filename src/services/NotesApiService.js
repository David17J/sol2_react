const API_URL = 'http://localhost:3000/api/notes';

class NotesApiService {
    constructor() {
    }

    async loadNotes() {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Fehler beim Laden der Notizen');
        return res.json();
    }

    async getNote(id) {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error('Fehler beim Laden der Notiz');
        return res.json();
    }

    async saveNote(note) {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note),
        });
        if (!res.ok) throw new Error('Fehler beim Erstellen der Notiz');
        return res.json();
    }

    async updateNote(id, updatedNote) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedNote),
        });
        if (!res.ok) throw new Error('Fehler beim Aktualisieren der Notiz');
        return res.json();
    }


    async deleteNote(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error('Fehler beim Löschen der Notiz');
        return true;
    }
}

export default new NotesApiService();