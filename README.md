# Desafio Osten Moove

Descrição curta do projeto.

## Pré-requisitos

- Docker instalado
- Node.js e npm instalados
- Contêiner do PostgreSQL configurado e em execução

## Configuração do Banco de Dados (Docker e PostgreSQL)

1. Certifique-se de que o Docker esteja instalado em sua máquina.

2. Execute o seguinte comando para iniciar um contêiner do PostgreSQL:

   ```bash
   docker run --name meu-postgres -e POSTGRES_PASSWORD=sua-senha -p 5432:5432 -d postgres
   ```

   Substitua "sua-senha" pela senha desejada.

3. Aguarde até que o contêiner PostgreSQL esteja em execução.

## Configuração do Projeto de Backend

1. Clone o repositório:

   ```bash
   git clone URL-DO-REPOSITORIO-GITHUB
   ```

2. Navegue até o diretório do projeto de backend:

   ```bash
   cd backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto de backend e configure as variáveis de ambiente necessárias, incluindo as credenciais do banco de dados PostgreSQL.

5. Execute o projeto de backend em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   O servidor estará em execução em http://localhost:PORTA_BACKEND, onde PORTA_BACKEND é a porta configurada nas variáveis de ambiente.

## Configuração do Projeto da Web

1. Clone o repositório:

   ```bash
   git clone URL-DO-REPOSITORIO-GITHUB
   ```

2. Navegue até o diretório do projeto da web:

   ```bash
   cd web
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto da web em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   O aplicativo web estará em execução em http://localhost:5173 por padrão.

## Build da Aplicação Web

Para criar uma versão de produção do aplicativo web, execute o seguinte comando no diretório do projeto da web:

```bash
npm run build
```

Os arquivos de build estarão no diretório `dist`.

## Licença

Este projeto está sob licença XYZ.

## Contato

Se você tiver alguma dúvida ou precisar de assistência, entre em contato conosco em bruno.jesus.carmo@gmail.com.
