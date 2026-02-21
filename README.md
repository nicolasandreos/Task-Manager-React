# 📦 Como Rodar o Projeto Localmente

```bash
# Clonar o repositório
git clone https://github.com/seu-user/seu-repo.git

# Entrar na pasta
cd seu-repo

# Instalar dependências
npm install

# Rodar aplicação
npm run dev

# Rodar fake API
npx json-server --watch db.json --port 3001

---
# 📝 Task Manager

Aplicação web para gerenciamento de tarefas desenvolvida com React, consumindo uma API simulada (json-server).  

O projeto foi construído com foco em boas práticas de arquitetura frontend, organização de código, padronização de commits e separação de responsabilidades.

🔗 **Deploy:** https://seu-link.vercel.app  
📂 **Repositório:** https://github.com/seu-user/seu-repo
```

---

## 🚀 Funcionalidades

- ✅ Criar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
- 📋 Listar tarefas
- 🔄 Atualização automática da interface
- 📡 Consumo de API REST simulada

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

