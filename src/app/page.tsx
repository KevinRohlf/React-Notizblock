import { getNotes } from "../../lib/notes";
import NoteList from "./components/noteList";



export default async function Home() {
  const notes = await getNotes();
 
  return (
    <>
      <h1 className="text-3xl font-bold">Notes</h1>
      <NoteList gettingNotes={notes} />
      
    </>
  );
}
