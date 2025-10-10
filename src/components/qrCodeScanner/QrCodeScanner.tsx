import { useQrCodeScanner } from "../hooks/useQrCodeScanner";
import "./style.css";

interface QrCodeScannerProps {
  onScanSuccess: (result: string) => void;
}

const QrCodeScanner = ({ onScanSuccess }: QrCodeScannerProps) => {
  const scannerRegionId = "qr-code-scanner-region";

  const { isScanning, startScanning, stopScanning } = useQrCodeScanner(
    scannerRegionId,
    (decodedText) => {
      onScanSuccess(decodedText);
      // Para o scanner automaticamente após um sucesso
      stopScanning();
    },
    (errorMessage) => {
      // console.warn(errorMessage); // Opcional: logar erros
    }
  );

  return (
    <div class="scanner-container">
      {/* O elemento onde o vídeo da câmera será renderizado */}
      <div id={scannerRegionId} class="scanner-viewport"></div>

      <div class="scanner-controls">
        {!isScanning ? (
          <button onClick={startScanning}>Iniciar Leitor</button>
        ) : (
          <button onClick={stopScanning} class="stop-button">
            Parar Leitor
          </button>
        )}
      </div>
    </div>
  );
};

export default QrCodeScanner;
