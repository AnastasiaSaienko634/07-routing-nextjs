import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./NoteList.module.css";
import { deleteNote } from "../../lib/api";
import type { Note } from "../../types/note";
import toast from "react-hot-toast";
import Link from "next/link";
interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (noteId: string) => deleteNote(noteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const handleClick = (noteId: string) => {
    mutation.mutate(noteId);
    toast.success("Note was successfully deleted!");
  };
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li className={css.listItem} key={note.id}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <Link className={css.link} href={`/notes/${note.id}`}>
              View details
            </Link>
            <button
              className={css.button}
              onClick={() => handleClick(note.id!)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
