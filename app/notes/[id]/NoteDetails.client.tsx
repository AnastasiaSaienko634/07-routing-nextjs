"use client";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import css from "./NoteDetails.module.css";
import { useRouter } from "next/navigation";
const NoteDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const formattedDate = data
    ? data.updatedAt
      ? `Updated at: ${data.updatedAt}`
      : `Created at: ${data.createdAt}`
    : "";

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  if (!data) return null;
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <button onClick={handleClick}>Go Back</button>
          <h2>{data.title}</h2>
        </div>
        <p className={css.content}>{data.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NoteDetails;
