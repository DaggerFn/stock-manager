import { useState, useEffect, useRef } from "preact/hooks";
import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";

// Tipos para os callbacks para maior segurança
type QrCodeSuccessCallback = (decodedText: string) => void;
type QrCodeErrorCallback = (errorMessage: string) => void;

/**
 * Hook customizado para gerenciar a lógica do leitor de QR code.
 * @param elementId - O ID do elemento HTML onde o scanner será renderizado.
 * @param onScanSuccess - Callback para quando um código é lido com sucesso.
 * @param onScanFailure - Callback para erros (opcional).
 */
export const useQrCodeScanner = (
  elementId: string,
  onScanSuccess: QrCodeSuccessCallback,
  onScanFailure?: QrCodeErrorCallback
) => {
  const [isScanning, setIsScanning] = useState(false);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    // Inicializa a instância do scanner quando o componente monta
    if (!html5QrCodeRef.current) {
      html5QrCodeRef.current = new Html5Qrcode(elementId);
    }

    // Função de limpeza para garantir que a câmera seja liberada
    return () => {
      if (
        html5QrCodeRef.current?.getState() === Html5QrcodeScannerState.SCANNING
      ) {
        html5QrCodeRef.current.stop().catch((err) => {
          console.error("Erro ao parar o scanner na desmontagem.", err);
        });
      }
      html5QrCodeRef.current?.clear().catch((err) => {
        console.error("Falha ao limpar html5-qrcode.", err);
      });
    };
  }, [elementId]);

  const startScanning = () => {
    if (!html5QrCodeRef.current) return;

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
    };

    html5QrCodeRef.current
      .start(
        { facingMode: "environment" },
        config,
        onScanSuccess,
        onScanFailure || (() => {}) // Usa um callback vazio se nenhum for fornecido
      )
      .then(() => {
        setIsScanning(true);
      })
      .catch((err) => {
        console.error("Não foi possível iniciar o scanner:", err);
      });
  };

  const stopScanning = () => {
    if (html5QrCodeRef.current && isScanning) {
      html5QrCodeRef.current
        .stop()
        .then(() => {
          setIsScanning(false);
        })
        .catch((err) => {
          console.error("Erro ao parar o scanner:", err);
        });
    }
  };

  return { isScanning, startScanning, stopScanning };
};
