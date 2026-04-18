import Link from "next/link";
import css from "./Footer.module.css";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css.copy}>
          © {new Date().getFullYear()}{" "}
          <span className={css.accent}>NoteHub</span>. All rights reserved.
        </p>
        <p className={css.dev}>
          Built by <span className={css.accent}>Bashmachok</span>
        </p>
        <div className={css.icons}>
          <Link
            href="mailto:student@notehub.app"
            className={css.iconLink}
            aria-label="Email"
          >
            <IoMdMail />
          </Link>
          <Link
            href="https://www.linkedin.com/in/oleksandr-adintsov/"
            className={css.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Bashmachok1982"
            className={css.iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
