import React from "react";
import { FiMail, FiCode } from "react-icons/fi";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css.copy}>
          © {new Date().getFullYear()} NoteHub. All rights reserved.
        </p>
        <div className={css.wrap}>
          <p className={css.dev}>
            <FiCode className={css.icon} /> Developer: Anastasia Saienko
          </p>
          <p className={css.contact}>
            <FiMail className={css.icon} /> Contact us:{" "}
            <a
              className={css.email}
              href="mailto:anastasiasaienko634@gmail.com"
            >
              anastasiasaienko634@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
