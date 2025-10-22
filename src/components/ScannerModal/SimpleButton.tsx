// Use "import type" para importar coisas que são apenas tipos.
import type { JSX } from "preact";

// A interface é um tipo, então está tudo bem aqui.
interface MyButtonProps {
  label: string;
  onClick: (event: JSX.TargetedEvent<HTMLButtonElement>) => void;
}

// O componente em si é um valor (uma função), então a importação dele em
// outros arquivos não usa "type".
const MyButton = ({ label, onClick }: MyButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default MyButton;
