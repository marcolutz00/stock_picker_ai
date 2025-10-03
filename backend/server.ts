import Fastify from 'fastify'
import cors from '@fastify/cors'
import { z } from 'zod'

const PORT = 3001;
const fastify = Fastify({
  logger: true
})
await fastify.register(cors, { origin: true })

// Routen definieren


await fastify.listen({ port: PORT })
