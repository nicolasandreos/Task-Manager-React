# 📦 Como Rodar o Projeto Localmente

```bash
# Clonar o repositório
🔗 **Deploy:** https://task-manager-react-six-rho.vercel.app
📂 **Repositório:** git clone https://github.com/nicolasandreos/Task-Manager-React.git

# Entrar na pasta
cd Task-Manager-React

# Instalar dependências
npm install

# Rodar aplicação
npm run dev

# Rodar fake API
npx json-server --watch db.json --port 3000

---
# 📝 Task Manager

Aplicação web para gerenciamento de tarefas desenvolvida com React, consumindo uma API simulada (json-server).  

O projeto foi construído com foco em boas práticas de arquitetura frontend, organização de código, padronização de commits e separação de responsabilidades.
```

---

## 📸 Preview

### 🏠 Tela Principal
![Tela Principal](./docs/imagem1.png)

### ➕ Criar Tarefa
![Criar Tarefa](./docs/imagem2.png)

### ✏️ Edição de Tarefa
![Edição](./docs/imagem3.png)

### 📌 Listagem de Tarefas
![Lista Terefas](./docs/imagem4.png)

## 🔗 API Repository

A API simulada foi desenvolvida separadamente utilizando json-server para simular um ambiente backend independente.
📂 Repositório da API: https://github.com/nicolasandreos/ToDoTasksReactAPI

## 🚀 Funcionalidades

- ✅ Criar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
- 📋 Listar tarefas
- 📌 Atualização de status da tarefa
- 🔄 Atualização automática da interface
- 📡 Consumo de API REST simulada
- ⚙️ Estado de loading

---

## 🛠️ Tecnologias Utilizadas

### ⚛️ Frontend
- React
- Vite
- React Router DOM
- TailwindCSS
- Tailwind Variants
- Axios
- TanStack React Query
- React Hook Form

### 🗄️ Backend (Simulado)
- json-server

### 🧹 Padronização e Qualidade de Código
- ESLint
- Prettier
- Git Hooks (Husky + lint-staged)
- Conventional Commits

### 🚀 Deploy
- Vercel

---

## 🧠 Conceitos e Arquitetura Aplicados

- Componentização e reutilização de componentes
- Organização por responsabilidades
- Criação de hooks customizados para requisições HTTP
- Gerenciamento de estado assíncrono com React Query
- Separação entre camada de serviço (API) e UI
- Validação de formulários com React Hook Form
- Configuração de Design System (cores e tipografia customizadas no Tailwind)
- Padronização automática de código antes do commit
- Versionamento seguindo Conventional Commits

## 👨‍💻 Autor

Desenvolvido por Nicolas Andreos
