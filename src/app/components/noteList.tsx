"use client";

import { useState } from "react";
import { Note } from "../types/types";
import NotesListItem from "./notesListItem";
import { eraseNote } from "../../../lib/actions";

export default function NoteList({ gettingNotes }: { gettingNotes: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(gettingNotes);
  const deleteNote = (slug: string) => {
    setNotes(notes.filter((note) => note.slug !== slug));
    eraseNote(slug);
  };

  return (
    <ul className="divide-y divide-gray-200">
      {notes.map((note: Note) => (
        <NotesListItem
          onClick={() => deleteNote(note.slug)}
          key={note.slug}
          note={note}
        />
      ))}
    </ul>
  );
}
