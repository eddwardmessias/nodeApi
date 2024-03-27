# Fastify(MicroFramwork) x Express
1 É muito mais bem mantido que express

2 Continua opções mais populares... mesmo aprendendo fastify, consegue trabalhar com expresse

3 Mais performatico, integração direto em TypeScript e trabalhar com promisses e async await.

Obs: Com expresse tem que trabalhar com outras bibliotecas...

# TypeScript

É uma das tecnologias que tem que aprender... vem sendo mais utilizado que o javaScript.

É um superSet(Adicional ao JS, trabalhar com tipagem estática), trazer mais inteligência para o código(evitar que alguns erros vão para produção).

Documentação fala que é uma linguagem de programação, fortemente Tipada...

Compiladores que entedem TypeScript

Extensão do arquivo .ts

Node não entende type por padrão(precisa converter ts para js) 
> npm i -D typescript
> npx tsc --init (criar arquivo de config)
cria o tsconfig.json
target qual versão do js que precisamos converter nosso código. 
> npx tsx src/arquivo (converte para js)

------------------------

> npm i fastify

> npm install -D @types/node

> npm i tsx - D (processo de converter o código pra js e executar o node no js que foi convertido de forma automatizada e sem sujar as pastas) 

> npx tsx arquivo

Obs.: tsx só recomendado utilizar em desenvolvimento, não utiliza essa ferramenta em produção. Produção, converte o código em JS e excuta o código em JS... executar em JS é muito mais rápido que TS.

--------------------------------------------

Pode ir em scripts colocar o dev e executar 

> npm run dev

Obs.: Se eu coloco o "tsx watch" -> ele fica observando todas alterações do projeto.

# Es-lint
> npm i eslint @rocketseat/eslint-config -D 
Criar arquivo na raiz

.eslintrc.json

ir em settings 
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    // "source.fixAll.eslint": "explicit"
},

ir em packge json 
scripts... para executar 
"lint": "eslint src --ext .ts --fix" 


# Knex

> npm i knex sqlite3

criar na pasta src -> Arquivo database.ts

colocar  useNullAsDefault: true

foi desenvolvido por padrãoo para executar com js e não ts

# Migrations

- Migrations (Controle de versão dentro do Banco de dados)

Histórico de todas as mudançãs que foram feitas no Banco de dados (data e horário - Linha do tempo do banco de dados que mudou)

criar um arquivo knexfile.ts

importar arquivo database.ts

criar em scripts:
"knex": "node --loader tsx ./node_modules/.bin/knex",

> npm run knex -- -h 
(usar versão 18node)

> npm run knex -- migrate:make create-documents

é criado um arquivo...

Do qual é colocado data, dia, mês,hora e o nome

20240326202748_create-documents.ts

Dentro dele vão ter sempre dois metodos:

UP -> O que vai fazer? Criar,

DOWN -> Deu Pau, se precisar voltar atrás(rolback), remove

await knex.schema.createTable('transactions', ()=>{
        table.

> npm run knex -- migrate:latest
Ler todas as migrations

depois
> npm run dev

--> Uma vez que a migration foi criada/ enviada para produção, nunca vai poder editar a migaration... se errar... se foi para o restante do time... vai ser necessário criar uma nova migration....

--> Se não enviou, pode editar... parar o servidor ctrol+c
> npm run knex -- migrate:rollback
e vai desfazer a migration que executou

Ai posso editar os campos e executar novamente.
> npm run knex -- migrate:latest

------------------------------------------------------
> npm run knex -- migrate:make add-session-id-to-transactions

# Variaveis de ambiente

Extensão dot Envi

> npm i dotenv

joga todas variaveis dentro de process.env

# Zod

> npm i zod

Ele irá fazer as validações do .env colocando tudo certinho inclusive importando

# REQUISITOS FUNCIONAIS
Quais são as funcionalidades da nossa aplicação, o que o usuário pode e não pode fazer no nosso App


- [ ] O usuário deve poder criar uma nova transação;
- [ ] O usuário deve obter extrato da conta;
- [ ] O usuário deve poder listar todas transações que já ocorreram
- [ ] O usuário deve poder visualizar uma transação única;

# REGRAS DE NEGÓCIO
Condicionais

- [  ] A transação pode ser do tipo credito que somará ao valor total ou débito que subtrairá;
- [  ] Deve ser possivel identificarmos o usuário entre as requisições;
- [  ] O usuário só pode vizualiar as transações do qual ele criou;

# REQUISITOS NÃO FUNCIONAIS
Tech o que vamos utilizar para atingir cada funcionalidade 


# PLUGIN 

Separar a rota em outro arquivo, pode separar outras coisas dentro de uma aplicação

Obs: Dentro do server.ts posso criar um prefix, para deixar o nome da rota padrão.

Hackzinho legal
Obs: @types... facilita identificar as tabelas do knex e aparece os atributos do knex

# Cookie

> npm i @fastify/cookie

server.ts
import cookie from '@fastify/cookie'
app.register(cookie)


# preHandler

É um parametro do qual ele vai fazer uma pre checagem, do qual posso colocar diversas funções... antes de executar a função que é o handler

formas de compartilhar regras de negocio em várias rotas

- Handler Global (middleware global)

quando a gente cria uma plugin global(parte separada da aplicação, contexto especifico)

app.addHook('preHandler') na rota

ou se eu quiser que funcione para todas as rotas, basta colocar globalmente antes dos plugins, no contexto global do fastify