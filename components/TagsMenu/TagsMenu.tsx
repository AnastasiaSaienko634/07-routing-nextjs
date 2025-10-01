"use client";
import React, { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";
import { tagList } from "@/types/note";

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleClickClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggle}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              onClick={handleClickClose}
              className={css.menuLink}
              href="/notes/filter/All"
            >
              All Notes
            </Link>
          </li>
          {tagList.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                onClick={handleClickClose}
                href={`/notes/filter/${tag}`}
                className={css.menuLink}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
