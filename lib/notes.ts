import { Note } from "@/app/types/types";
import sql from "better-sqlite3";
import xss from "xss";

const db = sql("notes.db");

export function getNotes(): Promise<Note[]> {
  return new Promise((resolve, reject) => {
    try {
      const notes = db.prepare("SELECT * FROM notes").all() as Note[];
      resolve(notes);
    } catch (error) {
      reject(error);
    }
    
  });
}

export function saveNote(note: Note) {
  
  note.content = xss(note.content);
  note.tags = note.tags.split(",").join(",");

  db.prepare(
    "INSERT INTO notes (title, content, date, tags, slug) VALUES (@title, @content, @date, @tags, @slug)",
  ).run(note);
}

export function deleteNote(slug: string) {
    try {
        db.prepare("DELETE FROM notes WHERE slug = ?").run(slug);
    }
    catch (error) {
      console.error(error);
    }
}
