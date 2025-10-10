import { useState } from "preact/hooks";
import QrCodeScanner from "../../components/qrCodeScanner/QrCodeScanner";

const ScannerPage = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScanSuccess = (result: string) => {
    console.log("QR Code lido na página:", result);
    setScanResult(result);
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h1>Leitor de QR Code PWA</h1>
      <p>Aponte a câmera para um QR code.</p>

      <QrCodeScanner onScanSuccess={handleScanSuccess} />

      {scanResult && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #4CAF50",
            backgroundColor: "#e8f5e9",
            borderRadius: "8px",
          }}
        >
          <h3>Último Resultado:</h3>
          <p style={{ wordBreak: "break-all" }}>
            <a href={scanResult} target="_blank" rel="noopener noreferrer">
              {scanResult}
            </a>
          </p>
          <button
            onClick={() => setScanResult(null)}
            style={{ marginTop: "10px" }}
          >
            Limpar
          </button>
        </div>
      )}
    </div>
  );
};

export default ScannerPage;
