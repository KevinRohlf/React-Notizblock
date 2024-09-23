'use client';

import { useRef, useState } from "react";
import Input from "../components/input";
import Button from "../components/button";

interface TagInputProps {
  onTagsChange: (tags: string) => void;
}

export default function TagInput({ onTagsChange }: TagInputProps) {
  const [tags, setTags] = useState<string[]>([]);
  const tagsRef = useRef<HTMLInputElement>(null);

  function addTag() {
    if (tagsRef.current && tagsRef.current.value.trim() !== "") {
      const newTags = [...tags, tagsRef.current.value.trim()];
      setTags(newTags);
      onTagsChange(newTags.join(","));
      tagsRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="tags">Tags</label>
      <div className="flex gap-2">
        <Input
          placeholder="Type the tags here"
          type="text"
          id="tags"
          ref={tagsRef}
        />
        <Button type="button" onClick={addTag}>
          Add Tag
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-background px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}