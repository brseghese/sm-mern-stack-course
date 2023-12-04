<h1 align="center" id="topo">Trampo - Vagas Centralizadas 💼</h1>

### 🏷️ Descrição do Projeto:

O aplicativo Trampo é um gerenciador de candidaturas a vagas de emprego desenvolvido usando a stack MERN (MongoDB, Express, React, Node.js). O principal propósito do Trampo é permitir que os usuários controlem suas candidaturas a vagas de emprego de forma eficiente.

⚡ [clique aqui](https://trampo.onrender.com)🔗 e veja o Trampo hospedado em [Render](https://render.com/) versão gratuíta, demora um pouquinho por servidor acordar 😴

---

### 👩‍💻 Tecnologias Utilizadas:

- React.js

  - react-router-dom
  - react-query
  - axios
  - react-icons
  - react-toastify
  - recharts
  - styled-components

- Node.js

  - express
  - express-async-errors
  - express-validator
  - cookie-parser
  - mongoose
  - bcryptjs
  - jsonwebtoken
  - dayjs
  - multer
  - datauri
  - cloudinary
  - helmet
  - express-rate-limit
  - express-mongo-sanitize

- MongoDB

### 🚀 Principais Funcionalidades:

- Cadastro de usuários e login.
- Edição de usuário com foto de perfil.
- Adição, edição e exclusão de aplicações a vagas de emprego.
- Pesquisa de aplicações a vagas por: empresa, cargo, status e modalidade.
- Estatísticas com relatório gráfico com as aplicações a vagas nos ultimos 12 meses.
- Total de vagas por status.

---

### 🔩 Instruções de Instalação:

Clone o repositório:

```
git clone https://github.com/brseghese/sm-mern-stack-course.git
```

Navegue até o diretório do projeto e instale as dependências:

```
npm run setup-production-app
```

Crie um arquivo `.env` na raiz do projeto e defina as variáveis:

```
NODE_ENV=development
PORT=5000
MONGO_URL=***  // Substitua *** pelo URL do seu banco de dados MongoDB
JWT_SECRET=***  // Substitua *** pela chave secreta para assinar tokens JWT
JWT_EXPIRES_IN=1d
CLOUD_NAME=***  // Substitua *** pelo nome da sua conta na plataforma de armazenamento Cloudinary
CLOUD_API_KEY=***  // Substitua *** pela chave de API da sua conta na plataforma de armazenamento Cloudinary
CLOUD_API_SECRET=***  // Substitua *** pela chave secreta da API da sua conta na plataforma de armazenamento Cloudinary

```

Inicie o servidor:

```
node server
```

Abra o navegador e acesse http://localhost:5000 para iniciar 🎉

---

> Copyright &copy; 2023 by **Bruno Seghese**

---
