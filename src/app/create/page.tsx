"use client";

import { processNote } from "../../../lib/actions";
import Input from "../components/input";
import SubmitButton from "../components/submitButton";
import Textarea from "../components/textarea";
import { useFormState } from "react-dom";
import TagInput from "../components/tagInput";
import { z } from "zod";

export default function Create() {
  const [state, formAction] = useFormState(processNote, {
    Validierungsfehler: [],
    message: null,
  } as { Validierungsfehler: z.ZodIssue[], message: string | null });
  let tags: string = "";

  function handleTagsChange(currentTags: string) {
    tags = tags + currentTags;
  }

  

  return (
    <>
      <main>
        <form className="flex flex-col gap-5" action={formAction}>
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <Input
              placeholder="Type the title here"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content">Description</label>
            <Textarea
              placeholder="Type the description here"
              name="content"
              id="content"
              cols={30}
              rows={10}
            />
          </div>
          <TagInput onTagsChange={handleTagsChange} />

          {state.Validierungsfehler && (
            <div className="text-sm text-red-500">
              {state.Validierungsfehler.map((issue, index) => (
                <div key={index}>{issue.message}</div>
              ))}
            </div>
          )}
          <SubmitButton>Create</SubmitButton>
        </form>
      </main>
    </>
  );
}
