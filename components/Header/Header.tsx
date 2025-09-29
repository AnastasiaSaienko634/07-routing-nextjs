import Link from "next/link";
import React from "react";
import { FiHome, FiBookOpen } from "react-icons/fi";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/" className={css.navLink}>
              <FiHome className={css.icon} /> Home
            </Link>
          </li>
          <li>
            <Link href="/notes" className={css.navLink}>
              <FiBookOpen className={css.icon} /> Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
