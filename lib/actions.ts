"use server";

import { redirect } from "next/navigation";
import { deleteNote, getNotes, saveNote } from "./notes";
import { z } from "zod";
import slugify from "slugify";

const stringSchema = z
  .string()
  .min(3, "Der String muss mindestens 3 Zeichen lang sein.")
  .max(120, "Der String darf maximal 120 Zeichen lang sein.")
  .regex(
    /^[a-zA-Z0-9]+$/,
    "Der String darf nur alphanumerische Zeichen enthalten.",
  );
const validateString = (input: string) => {
  try {
    stringSchema.parse(input); // Überprüft den String
    console.log("String ist gültig!");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { Validierungsfehler: error.errors };
    }
  }
};

export async function processNote(
  preState: Record<string, unknown>,
  formData: FormData,
) {
  const note = {
    title: (formData.get("title") as string) || "",
    content: (formData.get("content") as string) || "",
    tags: (formData.get("tags") as string) || "",
    date: new Date().toISOString(),
    slug: slugify((formData.get("title") as string) || "", { lower: true }),
  };
  const errors = validateString(note.title) || validateString(note.content);
  if (errors) {
    return errors;
  }

  saveNote(note);
  redirect("/");
}

export async function eraseNote(slug: string) {
  deleteNote(slug);
}

export async function gettingNotes() {
  return await getNotes();
}
