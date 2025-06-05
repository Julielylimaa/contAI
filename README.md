# Projeto Scoder

- **Back-end**: Node.js, Express e Prisma ORM.
- **Front-end**: React.

# Descrição do projeto

Este projeto foi desenvolvido para uma **empresa de contabilidade** e tem como principal objetivo gerenciar lançamentos de transações financeiras de **crédito e débito**.

### Funcionalidades Principais

- **Lançamento de Transações**: Permite registrar transações financeiras classificadas como crédito ou débito.
- **Cálculo de Totais**: Exibe o total de créditos e o total de débitos para fácil acompanhamento.
- **Organização por Mês e Ano**: Fornece uma lista das transações ordenada pelo mês e ano, facilitando a visualização e análise dos dados financeiros ao longo do tempo.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js**
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
   docker-compose up -d
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
   
5. **Inicie o front-end em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
