import React from "react";

import { redirect } from "next/navigation";
const Notes = () => {
  redirect("/notes/filter/All");
  return <div></div>;
};

export default Notes;
