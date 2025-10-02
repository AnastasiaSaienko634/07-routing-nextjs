import React from "react";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
interface NotesDetailsProps {
  params: Promise<{ id: string }>;
}

const Modal = async ({ params }: NotesDetailsProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
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
