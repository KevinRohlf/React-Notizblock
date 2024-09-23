import sql from 'better-sqlite3';
const db = new sql('notes.db');

const dummyNotes = [
    { title: 'Note 1', content: 'Content 1', date: '2020-01-01', tags: 'tag1, tag2', slug: 'note-1' },
    { title: 'Note 2', content: 'Content 2', date: '2020-02-02', tags: 'tag2, tag3', slug: 'note-2' },
    { title: 'Note 3', content: 'Content 3', date: '2020-02-03', tags: 'tag3, tag4', slug: 'note-3' },
    { title: 'Note 4', content: 'Content 4', date: '2020-01-04', tags: 'tag4, tag5', slug: 'note-4' },
];


function saveDummyNotesToDB() {
    // Tabelle erstellen, falls sie noch nicht existiert
    db.prepare(`
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT,
            date TEXT,
            tags TEXT,
            slug TEXT
        )
    `).run();

    // Einfüge-Statement vorbereiten
    const insert = db.prepare(`
        INSERT INTO notes (title, content, date, tags, slug)
        VALUES (@title, @content, @date, @tags, @slug)
    `);
    
    // Einfüge-Statement in Transaktion verpacken
    const insertMany = db.transaction((notes) => {
        for (const note of notes) {
            insert.run(note);
        }
    });

    // Dummy-Notizen einfügen
    insertMany(dummyNotes);
}

// Funktion aufrufen, um die Dummy-Notizen zu speichern
saveDummyNotesToDB();