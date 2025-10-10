// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { BottomNavigationBar } from "./components/layout/BottomNavigationBar"; // Sua barra de navegação inferior
import { HomePage } from "./pages/home";
import ScannerPage from "./pages/ScannerPage"; // Página "Scanner"
import { NotFoundPage } from "./pages/NotFound"; // Página 404

import "./app.css"; // Estilos globais para o layout

export function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Opcional: Seu cabeçalho superior */}
        <Header title="TABELA" />

        {/* Área de conteúdo onde as páginas serão renderizadas */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scanner" element={<ScannerPage />} />
            {/* Adicione outras rotas aqui conforme necessário */}
            <Route path="*" element={<NotFoundPage />} /> {/* Rota para 404 */}
          </Routes>
        </main>

        {/* Sua barra de navegação inferior persistente */}
        <BottomNavigationBar />
      </div>
    </BrowserRouter>
  );
}
