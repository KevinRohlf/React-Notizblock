'use client';  

import { Note } from "../types/types";
import Button from "./button";


export default function notesListItem({ note, onClick }: { note: Note, onClick: () => void }) {
  const date = new Date(note.date);
  const formattedDate = `${formatNumberWithLeadingZero(date.getDate())}.${formatNumberWithLeadingZero(date.getMonth() + 1)}.${date.getFullYear()}`;

  function formatNumberWithLeadingZero(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  const tags = note.tags.split(",");

  return (
    
        <li className="py-4">
          <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{note.title}</h3>
                <p className="text-sm text-gray-500">{formattedDate}</p>
              </div>
              <p className="text-sm text-gray-500">{note.content}</p>
              {tags.map((tag: string) => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
              ))}
            </div>
          </div>
              <Button onClick={onClick}>X</Button>
          
        </li>
  );
}