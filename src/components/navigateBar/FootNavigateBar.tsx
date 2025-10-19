// src/components/FootNavigateBar.tsx
import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./FootNavigateBar.module.css";

// Define os tipos para as propriedades que o componente receberá
interface NavLink {
  href: string;
  label: string;
  icon?: h.JSX.Element;
}

interface FootNavigateBarProps {
  links: NavLink[];
}

export function FootNavigateBar({ links }: FootNavigateBarProps) {
  return (
    <nav class={style.footBar}>
      {links.map((link) => (
        <Link activeClassName={style.active} href={link.href} key={link.href}>
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}
