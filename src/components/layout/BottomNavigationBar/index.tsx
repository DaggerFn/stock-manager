// src/components/layout/BottomNavigationBar/index.tsx
import { Link, useLocation } from "react-router-dom";
import styles from "./BottomNavigationBar.module.css"; // CSS Modules para este componente

export const BottomNavigationBar = () => {
  const location = useLocation(); // Hook para saber a rota atual

  return (
    <nav className={styles.navBar}>
      <Link
        to="/"
        className={`${styles.navItem} ${
          location.pathname === "/" ? styles.active : ""
        }`}
      >
        <span className="material-icons">list</span> {/* Exemplo de ícone */}
        Tabela
      </Link>
      <Link
        to="/scanner"
        className={`${styles.navItem} ${
          location.pathname === "/scanner" ? styles.active : ""
        }`}
      >
        <span className="material-icons">camera_alt</span>{" "}
        {/* Exemplo de ícone */}
        Scanner
      </Link>
      {/* Adicione outros itens de navegação aqui */}
    </nav>
  );
};
