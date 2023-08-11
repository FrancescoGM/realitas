import { server } from "./server";

server.get('/', async function handler () {
  return { hello: 'world' }
})