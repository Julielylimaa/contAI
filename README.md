# Projeto Scoder

- **Back-end**: Node.js, Express e Prisma ORM.
- **Front-end**: React, Styled Components.

# Descrição do projeto

Este projeto foi desenvolvido para a empresa **ContAI** e tem como principal objetivo otimizar o processo de registro e visualização de **lançamentos contábeis**. A plataforma é capaz de cadastrar os lançamentos financeiros e exibir esses registros em uma tabela organizada por mês, permitindo uma gestão mais eficiente e organizada das finanças da empresa.

### Acesso à aplicação

🔗 https://contai-1.onrender.com/

### Funcionalidades Principais

- **Cadastro de Usuário**: Permite cadastrar novos usuários para acessar a plataforma.
- **Login com JWT**: Permite que o usuário acesse a plataforma de maneira segura, para garantir a confidencialidade das informações.
- **Lançamento de Transações**: Permite registrar transações financeiras classificadas como crédito ou débito.
- **Edição de Transações**: Permite editar transações financeiras já cadastradas anteriormente.
- **Exclusão de Transações**: Permite excluir registros cadastrados anteriormente, caso necessário.
- **Cálculo de Totais**: Exibe o total de créditos e o total de débitos para fácil acompanhamento.
- **Organização por Mês e Ano**: Fornece uma lista das transações ordenada pelo mês e ano, facilitando a visualização e análise dos dados financeiros ao longo do tempo.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js v22**
- **Docker**

## Instruções de Instalação

### Configurando o Back-end

1. **Acesse a pasta do back-end**:

   ```bash
   cd backend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Configuração do Banco de Dados:**

   Crie um arquivo .env na pasta do back-end com as variáveis de ambiente necessárias. Veja o arquivo .env-example para referência.

4. **Execute o Docker Compose**

   ```bash
   docker compose up -d
   ```

5. **Execute as migrações do Prisma:**
   ```bash
   npm run migrate
   ```
6. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

### Configurando o Front-end

1. **Acesse a pasta do front-end**:

   ```bash
   cd frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Crie um arquivo .env**

   Crie um arquivo .env na pasta do front-end com a url da api. Veja o arquivo .env-example para referência.

4. **Inicie o front-end em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
