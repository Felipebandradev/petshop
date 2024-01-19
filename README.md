# PetShop: Projeto Next.js

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
