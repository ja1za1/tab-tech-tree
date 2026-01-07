# TAB Tech Tree - Montador de Árvore de Tecnologias

Um montador interativo de árvore de tecnologias do jogo **They Are Billions**, desenvolvido com React. Este projeto recria fielmente o design e a experiência visual da árvore de tecnologias do jogo original, proporcionando uma interface imersiva e intuitiva para criar e visualizar diferentes combinações de tecnologias.

## 🎮 Sobre o Projeto

Este projeto permite que jogadores e fãs de **They Are Billions** planejem e compartilhem suas estratégias de tecnologia de forma visual e interativa. A interface é baseada totalmente no design da árvore de tecnologias do próprio jogo, garantindo uma experiência familiar e imersiva.

### ✨ Funcionalidades

- **Interface Visual Autêntica**: Design fiel à árvore de tecnologias do jogo original
- **Seleção Interativa**: Clique para selecionar/desselecionar tecnologias
- **Validação de Dependências**: Sistema que garante que apenas tecnologias com pré-requisitos atendidos possam ser selecionadas
- **Arrastar e Navegar**: Arraste a tela para explorar toda a árvore de tecnologias
- **Compartilhamento via URL**: O estado da árvore é salvo na URL, permitindo compartilhar suas configurações
- **Efeitos Sonoros**: Sons de seleção/desseleção para maior imersão
- **Tooltips Informativos**: Passe o mouse sobre as tecnologias para ver detalhes completos
- **Responsivo**: Funciona em diferentes tamanhos de tela

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para maior segurança de código
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Shadcn** - Componentes acessíveis (Tooltip)
- **React Router DOM** - Gerenciamento de rotas e parâmetros de URL

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd tab-tech-tree
```

2. Instale as dependências:

```bash
pnpm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
pnpm dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 🛠️ Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria uma build de produção
- `pnpm preview` - Visualiza a build de produção
- `pnpm lint` - Executa o linter para verificar o código

## 🎯 Como Usar

1. **Selecionar Tecnologias**: Clique em qualquer tecnologia para selecioná-la (verde) ou desselecioná-la
2. **Navegar pela Árvore**: Arraste a tela para explorar todas as tecnologias disponíveis
3. **Ver Detalhes**: Passe o mouse sobre uma tecnologia para ver sua descrição completa
4. **Compartilhar**: A URL é atualizada automaticamente com sua seleção atual - copie e compartilhe!

### Regras de Dependência

- Apenas tecnologias com pré-requisitos atendidos podem ser selecionadas
- Ao desselecionar uma tecnologia, todas as tecnologias dependentes são automaticamente desselecionadas
- A tecnologia base "Steam Technology" está sempre selecionada e não pode ser removida

## 📁 Estrutura do Projeto

```
tab-tech-tree/
├── src/
│   ├── components/        # Componentes React
│   │   ├── tech-tree.tsx  # Componente principal da árvore
│   │   ├── tech-node.tsx  # Componente de nó individual
│   │   └── ui/            # Componentes de UI reutilizáveis
│   ├── hooks/             # Custom hooks
│   │   ├── useTechTree.ts # Lógica de gerenciamento da árvore
│   │   └── useDragging.ts # Lógica de arrastar e scroll
│   ├── lib/               # Utilitários e dados
│   │   ├── nodes.ts       # Definição dos nós da árvore
│   │   └── utils.ts       # Funções utilitárias
│   └── assets/            # Recursos estáticos (imagens, áudios)
└── public/                # Arquivos públicos
```

## 🎨 Personalização

As tecnologias são definidas no arquivo `src/lib/nodes.ts`. Você pode adicionar, remover ou modificar tecnologias editando o array `ALL_NODES`.

Cada nó possui as seguintes propriedades:

- `id`: Identificador único
- `name`: Nome da tecnologia
- `description`: Array de strings com a descrição
- `imageSrc`: Caminho para a imagem da tecnologia
- `position`: Posição na tela (left, top, bottom, right)
- `cost`: Custo da tecnologia
- `dependsOn`: ID da tecnologia pré-requisito (opcional)
- `children`: Array de IDs das tecnologias filhas
- `isRemovable`: Se a tecnologia pode ser removida (padrão: true)

## 📝 Licença

Este projeto é um projeto de fã e não está afiliado oficialmente com Numantian Games ou They Are Billions.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
