// src/pages/HomePage.tsx

export function HomePage() {
  return (
    <div>
      <h1>Página Tabela</h1>
      {/* Aqui vai o conteúdo da sua tela de Tabela */}
      {/* ... (Seu Search Bar, botões de filtro, etc.) */}
      {/* Exemplo de quando não encontra material */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <span
          style={{ fontSize: "3rem", color: "#ccc" }}
          className="material-icons"
        >
          error_outline
        </span>
        <p>Nenhum material encontrado</p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Exibir todos os materiais
        </button>
      </div>
    </div>
  );
}
