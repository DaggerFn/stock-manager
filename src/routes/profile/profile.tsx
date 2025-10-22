import MyButton from "../../components/ScannerModal/SimpleButton";

export function Profile() {
  // Define uma função para ser executada quando o botão for clicado
  const handleButtonClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Aqui estão as informações do seu perfil.</p>

      {/* Utilize o seu componente MyButton aqui */}
      <MyButton label="Registrar" onClick={handleButtonClick} />
      <MyButton label="Scanear" onClick={handleButtonClick} />
    </div>
  );
}
