import './routes'
import { server } from "./server"

try {
  server.listen({ port: 3333 })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}