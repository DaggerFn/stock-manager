import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";
import styles from "./QrCodeScanner.module.css";

interface QrScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onScanFailure?: (error: string) => void;
}

export function QrScanner({ onScanSuccess, onScanFailure }: QrScannerProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const readerId = "qr-reader";

  useEffect(() => {
    // O CSS agora vem do module; nada a injetar no head.

    // Inicializa o scanner quando o componente monta
    const html5QrCode = new Html5Qrcode(readerId);
    scannerRef.current = html5QrCode;

    const config = {
      fps: 10,
      // Esta é a configuração chave para a "região de foco"!
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
    };

    // Inicia a câmera
    html5QrCode
      .start(
        { facingMode: "environment" }, // Pede a câmera traseira
        config,
        (decodedText) => {
          // Sucesso!
          onScanSuccess(decodedText);
        },
        (errorMessage) => {
          // Erro, podemos ignorar ou logar
          if (onScanFailure) {
            onScanFailure(errorMessage);
          }
        }
      )
      .catch((err) => {
        console.error("Não foi possível iniciar o scanner", err);
      });

    // Função de limpeza para parar a câmera quando o componente for desmontado
    return () => {
      if (scannerRef.current?.getState() === Html5QrcodeScannerState.SCANNING) {
        scannerRef.current
          .stop()
          .then(() => console.log("Scanner parado com sucesso."))
          .catch((err) => console.error("Falha ao parar o scanner.", err));
      }
    };
  }, []);

  return (
    <div class={styles.scannerContainer}>
      {/* O elemento onde o vídeo da câmera será renderizado */}
      <div id={readerId} class={styles.reader}></div>
    </div>
  );
}
