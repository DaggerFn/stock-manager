# PWA de Leitura e Gerenciamento de Dados com Preact, TypeScript e Backend Serverless

## Visão Geral do Projeto

Esta aplicação é uma Progressive Web Application (PWA) robusta, desenvolvida para facilitar a leitura de QR codes e códigos de barras, bem como a criação e visualização de dados associados. Ela é construída com **Preact** e **TypeScript** para um frontend ágil e tipado, e utiliza **Firebase** para hospedagem, autenticação e funções serverless, enquanto o **AWS DynamoDB** serve como o banco de dados NoSQL principal para armazenamento de dados.

O objetivo é fornecer uma solução eficiente e escalável para cenários que exigem coleta de dados via scanner e um gerenciamento de informações flexível.

## Funcionalidades Principais

*   **Leitura de QR Code/Código de Barras**: Integração de bibliotecas modernas para capturar e processar dados de QR codes e códigos de barras diretamente via câmera do dispositivo.
*   **Criação de Dados**: Formulários intuitivos para inserir e persistir novas informações no banco de dados DynamoDB, geralmente associadas aos dados escaneados.
*   **Visualização e Gerenciamento de Dados**: Componentes de interface que permitem exibir, filtrar, buscar e paginar as informações armazenadas no DynamoDB de forma eficiente.
*   **Experiência PWA Completa**: Suporte a Service Workers para funcionalidade offline e caching, Web App Manifest para capacidade de instalação e HTTPS para segurança, garantindo uma experiência de usuário rica e confiável.
*   **Autenticação Segura**: Gerenciamento de usuários e proteção de acesso aos dados utilizando o Firebase Authentication.
*   **Backend Serverless**: Operações de leitura e escrita no DynamoDB orquestradas por Firebase Cloud Functions, proporcionando um backend escalável e de baixo custo operacional.

## Tecnologias Utilizadas

*   **Frontend**:
    *   **Preact**: Uma alternativa leve e rápida ao React para a construção da interface do usuário.
    *   **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade e a detecção de erros.
    *   **module.css**: Para escopo de estilos de componente e evitar conflitos.
*   **PWA Essentials**:
    *   **Service Workers**: Para caching de recursos, funcionalidade offline e notificações push.
    *   **Web App Manifest**: Para tornar a aplicação instalável na tela inicial do usuário.
    *   **HTTPS**: Requisito fundamental para PWAs e segurança da aplicação.
*   **Backend & Cloud**:
    *   **Firebase Hosting**: Para hospedar e servir a PWA de forma rápida e segura.
    *   **Firebase Authentication**: Para gerenciar a autenticação e autorização de usuários.
    *   **Firebase Cloud Functions**: Como a camada intermediária serverless para interagir com o DynamoDB e executar lógica de backend.
    *   **AWS DynamoDB**: Banco de dados NoSQL totalmente gerenciado, escalável e de alta performance.
*   **Bibliotecas de Leitura de Códigos (Exemplos)**:
    *   `html5-qrcode`
    *   `@yudiel/react-qr-scanner`
    *   `scanbot-web-sdk` (ou outras opções compatíveis com Preact/React)

## Arquitetura da Aplicação

A arquitetura da aplicação é projetada para ser totalmente serverless, aproveitando os benefícios de gerenciamento e escalabilidade do Firebase e da AWS.

1.  **Frontend (Preact PWA)**: A interface do usuário é construída com Preact e TypeScript, utilizando `module.css` para estilização. Esta PWA é implantada e servida através do **Firebase Hosting**.
2.  **Autenticação**: O **Firebase Authentication** é integrado para gerenciar o login e a autorização dos usuários, protegendo o acesso à PWA e aos dados.
3.  **Backend (Firebase Cloud Functions)**: Devido à não-integração nativa direta entre Firebase e DynamoDB, as **Firebase Cloud Functions** atuam como a ponte. A PWA se comunica com essas funções, que por sua vez, interagem com o DynamoDB. Isso garante segurança (as credenciais do DynamoDB não são expostas no cliente) e flexibilidade para lógica de negócios.
4.  **Banco de Dados (AWS DynamoDB)**: O **DynamoDB** é o banco de dados principal, armazenando os dados coletados e gerados pela aplicação. A modelagem de dados é feita considerando as melhores práticas para esquemas NoSQL e acesso eficiente.

![Diagrama de Arquitetura (Conceitual)](./docs/architecture.png "Diagrama Conceitual da Arquitetura")
*Representação conceitual: Frontend PWA no Firebase Hosting interage com Firebase Authentication. As operações de dados passam por Firebase Cloud Functions, que se conectam ao AWS DynamoDB.*

## Configuração e Desenvolvimento (Guia Rápido)

Para configurar e rodar o projeto localmente ou para implantação:

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd [NOME_DO_PROJETO]
    ```
2.  **Configurar o Projeto Firebase:**
    *   Crie um projeto no console do Firebase.
    *   Habilite o Firebase Hosting, Authentication e Cloud Functions.
    *   Faça login no Firebase CLI: `firebase login`.
    *   Inicialize o Firebase no projeto: `firebase init` (selecione Hosting, Functions, Firestore/Realtime Database, etc., conforme necessário para as Cloud Functions).
3.  **Configurar o AWS DynamoDB:**
    *   Crie uma conta AWS e configure o DynamoDB.
    *   Crie as tabelas DynamoDB com esquemas apropriados para sua aplicação.
    *   Configure credenciais da AWS para as Firebase Cloud Functions (via variáveis de ambiente ou IAM roles nas funções, seguindo as melhores práticas de segurança).
4.  **Instalar Dependências do Frontend:**
    ```bash
    npm install # ou yarn install
    ```
5.  **Instalar Dependências das Cloud Functions:**
    ```bash
    cd functions
    npm install # ou yarn install
    cd ..
    ```
6.  **Desenvolvimento Local:**
    *   Para o frontend: `npm run dev` (ou comando equivalente do Preact CLI/Vite).
    *   Para testar as funções localmente: `firebase emulators:start`.
7.  **Deploy da Aplicação:**
    *   Implante as Cloud Functions: `firebase deploy --only functions`.
    *   Implante a PWA no Firebase Hosting: `firebase deploy --only hosting`.

## Considerações Importantes

*   **PWA Lifecycle**: Certifique-se de implementar corretamente os Service Workers para caching, notificações e funcionalidade offline. O `web-app-manifest.json` é crucial para a experiência de instalação.
*   **Permissões de Câmera**: Ao implementar a leitura de QR/código de barras, o manejo das permissões da câmera no navegador é essencial e deve ser tratado com feedback claro ao usuário.
*   **Modelagem de Dados DynamoDB**: Planeje cuidadosamente o seu modelo de dados para DynamoDB, focando em padrões de acesso e chaves de partição/ordenação para otimizar desempenho e custo.
*   **Segurança**: Sempre proteja suas Firebase Cloud Functions e as interações com o DynamoDB. Utilize as políticas de IAM da AWS para controlar o acesso do Firebase Functions ao DynamoDB e as regras de segurança do Firebase Authentication para sua PWA.
*   **Otimização de Desempenho**: Use técnicas como lazy loading, otimização de imagens, e caching agressivo com Service Workers para garantir que a PWA seja rápida e responsiva.