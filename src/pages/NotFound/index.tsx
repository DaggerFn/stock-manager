// src/pages/NotFoundPage.tsx

export function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <a
        href="/"
        style={{
          marginTop: "1rem",
          color: "#1976d2",
          textDecoration: "underline",
        }}
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
