import axios from "axios";
import type { Note } from "../types/note";

interface CreateNoteResponse {
  note: Note;
}

interface CreateNote {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface DeleteNoteResponse {
  note: Note;
}

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
const VITE_NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const fetchNotes = async (
  query: string,
  currentPage: number,
  tag?: string
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    params: {
      search: query,
      page: currentPage,
      perPage: 10,
      tag: tag,
    },
    headers: {
      Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

export const fetchNoteById = async (noteId: string) => {
  const response = await axios.get(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

export const createNote = async (
  note: CreateNote
): Promise<CreateNoteResponse> => {
  const response = await axios.post<CreateNoteResponse>("/notes", note, {
    headers: {
      Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

export const deleteNote = async (noteId: string) => {
  const response = await axios.delete<DeleteNoteResponse>(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};
