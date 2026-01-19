# Projeto CRUD de Eventos

Este projeto é um sistema completo de cadastro, edição, listagem e remoção de eventos, desenvolvido no início dos meus estudos em desenvolvimento web. Ele utiliza uma arquitetura de aplicação dividida em backend (API .NET) e frontend (Angular).

## Estrutura do Projeto

- **Back/**: Backend desenvolvido em .NET Core, responsável pela API REST.
  - `src/ProjetoFull.API/`: Código-fonte da API, incluindo controllers, models, contexto de dados e configurações.
- **Front/Projeto-App/**: Frontend desenvolvido em Angular, responsável pela interface do usuário.
  - `src/app/`: Componentes Angular para eventos, palestrantes e navegação.

## Tecnologias Utilizadas

- **Backend:**
  - .NET Core
  - Entity Framework Core (Migrations)
  - API REST
- **Frontend:**
  - Angular
  - TypeScript
  - SCSS

## Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados
- .NET SDK instalado
- Angular CLI instalado globalmente (`npm install -g @angular/cli`)

### Passos para rodar o Backend (.NET API)

1. Navegue até a pasta do backend:
   ```sh
   cd Back/src/ProjetoFull.API
   ```
2. Restaure os pacotes:
   ```sh
   dotnet restore
   ```
3. Execute as migrações para criar o banco de dados:
   ```sh
   dotnet ef database update
   ```
4. Inicie a API:
   ```sh
   dotnet run
   ```
   A API estará disponível em `https://localhost:5001` ou `http://localhost:5000`.

### Passos para rodar o Frontend (Angular)

1. Navegue até a pasta do frontend:
   ```sh
   cd Front/Projeto-App
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   ng serve
   ```
   O aplicativo estará disponível em `http://localhost:4200`.

## Funcionalidades

- Cadastro, edição, listagem e exclusão de eventos
- Cadastro e listagem de palestrantes
- Interface simples e intuitiva para aprendizado

## Observações

Este projeto foi desenvolvido como parte dos meus primeiros estudos em desenvolvimento web, servindo como base para aprendizado de .NET, Angular e integração entre frontend e backend.

---

Se tiver dúvidas ou quiser contribuir, fique à vontade para enviar um e-mail!
