import React from "react";
import Notes from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

const NotesPage = async ({ params }: NotesPageProps) => {
  const { slug } = await params;
  const tag = slug[0] == "All" ? undefined : slug[0];
  const queryClient = new QueryClient();
  const query = "";
  const currentPage = 1;

  await queryClient.prefetchQuery({
    queryKey: ["notes", query, currentPage, tag],
    queryFn: () => fetchNotes(query, currentPage, tag),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes tag={tag} />
    </HydrationBoundary>
  );
};

export default NotesPage;
