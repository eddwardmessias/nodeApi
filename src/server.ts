import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// app.get('/hello', async () => {
//   const transaction = await knex('transactions')
//     .insert({
//       id: crypto.randomUUID(),
//       title: 'Transação de teste',
//       amount: 1000,
//     })
//     .returning('*')

//   return transaction
// })

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .select('*')
    .where('amount', 1000)
  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
