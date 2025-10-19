// src/app.tsx
import { Router } from "preact-router";

// Importe suas páginas
import { Home } from "./routes/home/home";
import { Profile } from "./routes/profile/profile";

// Importe sua barra de navegação
import { FootNavigateBar } from "./components/navigateBar/FootNavigateBar";

// Defina os links que sua barra de navegação usará
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/profile", label: "Perfil" },
];

export function App() {
  return (
    <div id="app">
      <main>
        <Router>
          <Home path="/" />
          <Profile path="/profile" />
        </Router>
      </main>

      <FootNavigateBar links={navLinks} />
    </div>
  );
}
