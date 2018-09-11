# Challenge

## Introdução
Criar uma aplicação para ler e apresentar os dados de despesas da cidade do Recife. A aplicação foi desenvolvida com Angular 6.

## Features
- Total de despesas por mês;
- Total de despesas agrupadas por categorias;
- Origem do dinheiro agrupado por fonte de recurso;

**Aviso**
Verifique a versão do node que você tem instalado, caso precise atualize e utilize a versão mais recente.

## Obter arquivo
Você pode obter o projeto através do clone do projeto no github: 

```bash
git clone https://github.com/PalomaGabriela/challenge.git
```
ou baixando o arquivo zip: url…

## Instalar as dependências do projeto
```bash
npm install
```
## Rode a aplicação
 ```bash
 npm run start
 ```

- Abrir no navegador a url http://localhost:4200/

## Servidor
- A aplicação aponta para um endpoint, sendo necessário a internet está conectada.

## Arquivos importantes
src => app => expenses
- Dentro desta pasta estão os arquivos que serão carregados com a funcionalidade do sistema.
- Essas pasta são carregadas no componente pai, ou seja, no expenses.
```bash
.
├── category            # Essa pasta contém os arquivos de listagem e editar
├── graphics-dialog     # Essa pasta contém os arquivos para exibir os gráficos
├── money-source        # Essa pasta contém os arquivos para listagem e editar
├── month               # Essa pasta contém os arquivos para listagem e editar
└── shared              # Essa pasta contém arquivos compartilhado no sistema
```

