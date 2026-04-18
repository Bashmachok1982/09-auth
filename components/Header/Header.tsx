"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { TbNotes } from "react-icons/tb";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { useThemeStore } from "@/lib/themeStore";
import { FaGithub } from "react-icons/fa";
import AuthNavigation from "@/components/AuthNavigation/AuthNavigation";

export default function Header() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className={css.header}>
      <Link className={css.logo} href="/" aria-label="Home">
        <TbNotes className={css.logoIcon} />
        <span>
          Note<span className={css.accent}>Hub</span>
        </span>
      </Link>

      <div className={css.divider} />

      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link className={css.navLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navLink} href="/notes/filter/all">
              Notes
            </Link>
          </li>
          <li className={css.separator} />
          <li>
            <Link
              href="https://github.com/Bashmachok1982"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub className={css.iconBtn} />
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className={css.themeBtn}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <LuMoon className={css.iconBtn} />
              ) : (
                <MdOutlineWbSunny className={css.iconBtn} />
              )}
            </button>
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
}
