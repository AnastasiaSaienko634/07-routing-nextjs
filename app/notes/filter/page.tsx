import React from "react";

import { redirect } from "next/navigation";
const Redirect = () => {
  redirect("/notes/filter/All");
  return <div></div>;
};

export default Redirect;
