# PetShop: Projeto Next.js

## Url

- https://petshop-felipebarbosa2024-default-rtdb.firebaseio.com/

## Branch 19-migração-api-fakepara-firebase-json

### Para testar a API

- usar a extensão ThunderClient
- o icone é um raio roxo

### Lembrete sobre uso de Apis

Como set trata de uma API JSON, podemos utilizamos qualquer um do verbos HTTP para o consumo de APIs no padrâo REST:

- GET: ler, obter dados
- POST: Criar, inserir
- PUT: atualizar tudo
- PATCH: atualizar parcialmente
- DELETE: excluir

### Firebase https://firebase.google.com/?hl=pt

Firebase é uma plataforma de serviços web (Web Services), com uma serie de funcionalidades de back-end uteis para aplicações (web, apps, jogos).

no caso de PetShop Criamos um projeto Firebase e nele adicionamos um banco de dados chamado "Firebase Realtime Database" para utilização como API JSON

O Realtime Database é um banco de dados `NoSQL`, ou seja, um banco de dados **Não Relacional**. Ele é baseado em documentos no formato JSON contendo objetos de dados

## Branch 14-usando-rotas-dinamicas-para-abrir-post

### Recursos necessários

- Pages/Rotas **dinâmicas** utilizando subpasta (post) e arquivo nomeado com **colchetes** indicando nome(s) do(s) parâmetros. No caso, foi criado o `[id].jsx`

- `getStaticProps`: necessário para carregar os dados da Api de acordo com o parâmetro (usando a prop `{params}`) e gerar o HTML via SSR.

- `getStaticPaths`: necessário para gerar os caminhos dinâmicos no momento do acesso à página.

### Documentação oficial sobre SSR:

https://nextjs.org/docs/pages/building-your-application/data-fetching

### Resumo sobre as funções

`getStaticProps`: executada no lado do servidor (SSR - Server Side Rendering), portanto logs, erros, lógica, ação/comandos NÃO aparecem para o usuário (mas aparecem no terminal para o programador(a)).

Na maioria dos casos usaremos `getStaticProps` para este tipo de processamento em que os dados são consumidos (Data Fetching) através da uma API, que já que esta função tem uma perfomance melhor para fazer o processamento apenas no momento da requisição.

Também há a função `getServerSideProps` que pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuário (como no caso de uso de dados de geolocalização).

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
