import React from "react";
import Notes from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
const NotesPage = async () => {
  const queryClient = new QueryClient();
  const query = "";
  const currentPage = 1;

  await queryClient.prefetchQuery({
    queryKey: ["notes", query, currentPage],
    queryFn: () => fetchNotes(query, currentPage),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes />
    </HydrationBoundary>
  );
};

export default NotesPage;
