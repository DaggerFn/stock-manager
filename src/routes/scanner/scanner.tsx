// src/routes/profile/index.tsx

import { SimpleButton } from "../../components/ScannerModal/SimpleButton";

export function Profile() {
  const handleScanClick = () => {
    alert("Botão de scan foi clicado!");
    // No futuro, aqui você abriria o modal da câmera...
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Meu App PWA</h1>

      <p>Clique no botão abaixo para iniciar o scanner.</p>

      <SimpleButton onClick={handleScanClick}>Escanear QR Code</SimpleButton>

      <br />
      <br />

      <SimpleButton onClick={() => {}} disabled={true}>
        Botão Desabilitado
      </SimpleButton>
    </main>
  );
}
