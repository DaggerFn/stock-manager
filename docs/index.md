### Estrutura de Pastas Padrão

A estrutura mais comum e recomendada se assemelha bastante à de um projeto React, com algumas pastas-chave:

```
/nome-do-projeto
├── /node_modules
├── /public
│   ├── index.html
│   └── /assets
│       ├── /images
│       └── /fonts
└── /src
    ├── /components
    │   ├── Button
    │   │   ├── index.js
    │   │   └── style.css
    │   ├── Header
    │   │   ├── index.js
    │   │   └── style.css
    │   └── ...
    ├── /pages
    │   ├── Home
    │   │   ├── index.js
    │   │   └── style.css
    │   └── About
    │       ├── index.js
    │       └── style.css
    ├── /utils
    │   ├── api.js
    │   └── helpers.js
    ├── index.js
    └── style.css
```

-----

### Descrição das Pastas e Arquivos

  * **`/public`**: Esta pasta contém os arquivos estáticos do seu projeto, que não são processados pelo bundler (como o Vite, que é muito popular com o Preact). O arquivo principal aqui é o `index.html`, que é a página base onde o seu aplicativo será renderizado. A pasta `assets` dentro de `public` é para arquivos como imagens, fontes e ícones.

  * **`/src`**: Este é o coração do seu projeto, onde a maior parte do seu código-fonte reside.

      * **`/components`**: É aqui que você armazena os componentes reutilizáveis da sua aplicação. O ideal é que cada componente tenha sua própria pasta (ex: `Button`) que contenha o arquivo do componente (`index.js`) e seu estilo (`style.css` ou `style.module.css`). Isso facilita a organização e a portabilidade dos componentes.
      * **`/pages`**: Esta pasta é para os componentes de "página" ou "rota". Se você usa um roteador, como o `preact-router`, cada arquivo nesta pasta representaria uma rota da sua aplicação. Por exemplo, `Home/index.js` seria a página inicial (`/`) e `About/index.js` seria a página `/about`.
      * **`/utils`**: Contém arquivos de utilidade que não são componentes. Isso pode incluir funções de API, helpers, ou qualquer lógica compartilhada que não se encaixe em uma pasta de componente.
      * **`index.js`**: Este é o ponto de entrada da sua aplicação. É o primeiro arquivo que é executado, responsável por montar o seu componente principal no DOM.
      * **`style.css`**: Um arquivo de estilo global para o seu projeto, onde você pode definir variáveis CSS, fontes globais ou estilos que se aplicam a todo o aplicativo.

Esta estrutura é apenas um ponto de partida. À medida que seu projeto cresce, você pode adicionar outras pastas, como `/store` para gerenciamento de estado (se você usar bibliotecas como o **Zustand** ou **Redux**), ou `/hooks` para custom hooks. O importante é manter a consistência e a clareza para que você e outros desenvolvedores possam entender o projeto facilmente.
