# PetShop: Projeto Next.js

## 12-desafio-consumindo-dados-usando-modo-React

### Orientações gerais

- Você precisará programar a página inicial (arquivo index) para que, através da API Fake, os dados dos posts sejam consumidos e carregados/repassados ao ListaPosts.
- Para isso, você precisa verificar qual é a URL do Endpoint da API e programar recursos utilizando useState e useEffect.
- No caso do useState, crie as constantes listaDePosts e setListaDePosts.
- No caso do useEffect, programe o necessário para usar a função fetch.

## 11-usando-json-server-como-fake-api

- para instalar o json-server:

```cmd
<!-- para instalar globalmente para projetos futuros a versão deste projeto 1.0.0 alpha.21 -->
npm install -g json-server
```

- para executar recomendado o node:

```cmd
json-server --watch nomeDoArquivoDesejado <!-- neste caso db.json -->
```

- para desconfigurar da porta padrão:

```cmd
<!-- use o ipconfig -->
json-server --host ipDaMaquina nomeDoArquivoDesejado  --port numeroDaPorta
```

para facilitar a vida no package.json e crie um script novo e coloque o a linha de comando acima

```json
"scripts": {
    "api": "json-server --host ipDaMaquina nomeDoArquivoDesejado  --port numeroDaPorta"
  }
```

## Branch 10-desafio-transformar-lista-de-posts-em-componente

- Crie na pasta `components` um componente chamado `ListaPosts`
- Modifique a página inicial para que ela utilize este componente.

**Atenção:** toda a lógica/programação feita em relação ao <StyledListaPosts> deve ser migrada para o novo componente, exceto o `import` do `arrayPosts` que deve continuar na página inicial.

Portanto, você deverá repassar o `arrayPosts` via `props` para o novo compontente.

## Branch 09-desafio-carregamento-do-array-posts

- Importe o array de posts para a página inicial
- Modifique o <StyledListaPosts> para que os <article> sejam gerados com auxílio do `map` processando os dados do arquivo `array-posts.js`. Portanto, o `map` irá gerar 4 <article> já que o `array-posts.js` possui 4 objetos/posts.

**Atenção**: para este desafio NÃO É necessário usar `useState` e/ou `useEffect`.

## Branch 05

### IMPORTANTE !

Após instalar o `styled components`, Ative o suporte à compilação dele pelo Next.js o arquivo `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione estas linhas
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
```

## Recursos Utilizados

- Next.js

- Api Fake/local

- Api via Firebase Realtime Database

- Compnentes

- Rotas

- Map, Filter

- Manipulação de formulário

- Publicação na Vercel e na Netlify
