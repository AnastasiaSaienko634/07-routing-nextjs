import React from "react";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
interface NotesDetailsProps {
  params: Promise<{ noteId: string }>;
}

const Modal = async ({ params }: NotesDetailsProps) => {
  const { noteId } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreview />
      </HydrationBoundary>
    </div>
  );
};

export default Modal;
