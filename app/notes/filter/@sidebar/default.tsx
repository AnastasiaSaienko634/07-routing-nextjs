import React from "react";
import Link from "next/link";
import { tagList } from "@/types/note";
import css from "./SideBar.module.css";
const SideBar = () => {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link className={css.menuLink} href="/notes/filter/All">
          All Notes
        </Link>
      </li>
      {tagList.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
