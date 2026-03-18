# CRM Saúde App

Interface web para gerenciamento de pacientes e atendimentos.

---

## Tecnologias

- **[React](https://react.dev/)** — biblioteca principal para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Vite](https://vitejs.dev/)** — bundler e servidor de desenvolvimento
- **[Material UI](https://mui.com/)** — biblioteca de componentes visuais
- **[React Router DOM](https://reactrouter.com/)** — gerenciamento de rotas
- **[TanStack React Query](https://tanstack.com/query)** — gerenciamento de requisições e cache
- **[Zod](https://zod.dev/)** — validação de schemas
- **[React Hook Form](https://react-hook-form.com/)** — gerenciamento de formulários

---

## Por que Zod + React Hook Form?

O **React Hook Form** foi escolhido para gerenciamento de formulários por ter uma abordagem baseada em refs em vez de estado controlado, resultando em menos re-renders e melhor performance. Ele oferece uma API simples com `Controller` para integração com componentes externos como os do Material UI.

O **Zod** foi escolhido como biblioteca de validação por permitir definir schemas tipados que servem tanto para validar os dados no formulário quanto para inferir os tipos TypeScript automaticamente, eliminando a duplicação de tipos. A integração entre os dois é feita pelo `@hookform/resolvers/zod`, que conecta o schema Zod diretamente ao React Hook Form — centralizando todas as regras de validação em um único lugar e reaproveitando os mesmos schemas tanto no frontend quanto no backend.

---

## Por que React Query?

- **Cache automático** — evita requisições desnecessárias para dados já carregados
- **Revalidação em background** — mantém os dados sempre atualizados sem bloquear a interface
- **Atualização otimista** — reflete mudanças na tela imediatamente, antes da API responder, garantindo uma experiência mais fluida
- **Estados prontos** — `isLoading`, `isError`, `isFetching` sem necessidade de controle manual com `useState`
- **Invalidação de queries** — ao criar, editar ou remover um registro, as queries relacionadas são revalidadas automaticamente
- **Menos código** — elimina a necessidade de gerenciar estado assíncrono manualmente com `useEffect` e `useState`

---

## Estrutura de pastas

```
src/
├── assets/         # Imagens, ícones e arquivos estáticos
├── components/     # Componentes reutilizáveis (inputs, botões, dialogs)
├── contexts/       # Contextos globais da aplicação (React Context)
├── hooks/          # Hooks customizados (queries, mutations, formulários)
├── layout/         # Componentes estruturais (Navbar, Sidebar, Layout)
├── pages/          # Páginas da aplicação organizadas por rota
├── routes/         # Definição e configuração das rotas
├── App.tsx         # Componente raiz
├── main.tsx        # Ponto de entrada da aplicação
├── Schemas.ts      # Schemas de validação Zod compartilhados
└── index.css       # Estilos globais
```

---

## Rotas

As rotas são gerenciadas pelo **React Router DOM**, definidas na pasta `routes/` e aplicadas no `App.tsx`. A estrutura separa rotas públicas (login) de rotas privadas (autenticadas), com um layout compartilhado aplicado às páginas internas.

---

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/guigabraga/crm_saude_app.git
cd crm_saude_app
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env`:

```env
### SERVER ###
VITE_CONFIG_HOST=0.0.0.0
VITE_CONFIG_PORT=3002

### API ###
VITE_CONFIG_API=http://SEU_IP:3001
```

---

## Scripts

| Script | Comando | Descrição |
|--------|---------|-----------|
| Desenvolvimento | `npm run dev` | Inicia o servidor com hot reload |
| Build | `npm run build` | Gera os arquivos para produção |
| Start | `npm run preview` | Visualiza o build de produção localmente |

---

## Desenvolvimento

```bash
npm run dev
```

Acesse em `http://localhost:3002`.

---

## Produção

```bash
# Gerar o build
npm run build

# Visualizar o build
npm run preview
```

---

## Variáveis de ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `VITE_CONFIG_HOST` | Host do servidor Vite | `0.0.0.0` |
| `VITE_CONFIG_PORT` | Porta do servidor Vite | `3002` |
| `VITE_CONFIG_API` | URL base da API | `http://SEU_IP:3001` |