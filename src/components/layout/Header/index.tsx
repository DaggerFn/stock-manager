// Não precisa de 'import { h } from "preact";' aqui! (Veja a explicação abaixo)

import styles from "./Header.module.css";

// Usamos uma interface para definir as propriedades que o componente pode receber
interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.infoButton}>
        {/* Aqui você pode usar um ícone SVG ou uma biblioteca de ícones */}
        <span className="material-icons">info_outline</span>
      </button>
    </header>
  );
};
