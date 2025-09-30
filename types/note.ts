export interface Note {
  id: string;
  title: string;
  content: string;
  tag: Tag;
  createdAt: string;
  updatedAt: string;
}

type Tag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export const tagList: Tag[] = [
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];
