import { useState } from "preact/hooks";
import MyButton from "../../components/ScannerModal/SimpleButton";
import { QrScanner } from "../../components/QrCodeScanner/QrCodeScanner"; // 1. Importe o seu novo componente

export function Profile() {
  // 2. Crie os estados necessários
  // Estado para controlar se o scanner está aberto ou fechado
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  // Estado para armazenar o resultado do scan
  const [scannedData, setScannedData] = useState<string | null>(null);

  // 3. Crie as funções que manipulam os eventos

  // Esta função é chamada quando o botão "Scanear" é clicado
  const handleScanButtonClick = () => {
    setScannedData(null); // Limpa o dado anterior
    setIsScannerVisible(true); // Abre o scanner
  };

  // Esta função será passada para o componente QrScanner.
  // Ele a chamará quando um QR code for lido com sucesso.
  const handleScanSuccess = (decodedText: string) => {
    console.log("Código lido:", decodedText);
    setScannedData(decodedText); // Guarda o resultado no estado
    setIsScannerVisible(false); // Fecha o scanner
  };

  // Função para o outro botão, só como exemplo
  const handleRegisterClick = () => {
    alert("Botão de registro clicado!");
  };

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Aqui estão as informações do seu perfil.</p>

      {/* Botões de ação */}
      <MyButton label="Registrar" onClick={handleRegisterClick} />
      <MyButton label="Scanear QR Code" onClick={handleScanButtonClick} />

      {/* 4. Renderização Condicional */}

      {/* O componente QrScanner só será renderizado se isScannerVisible for true */}
      {isScannerVisible && (
        <div>
          <p>Aponte a câmera para o QR Code</p>
          <QrScanner onScanSuccess={handleScanSuccess} />
          <MyButton
            label="Cancelar"
            onClick={() => setIsScannerVisible(false)}
          />
        </div>
      )}

      {/* Mostra o resultado do scan se houver algum dado */}
      {scannedData && (
        <div>
          <h3>Resultado do Scan:</h3>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
}
