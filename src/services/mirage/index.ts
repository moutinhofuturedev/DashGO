import { Factory, Model, createServer } from "miragejs"
import { faker } from '@faker-js/faker'
import { User } from "../../types/type"

export function makeServer( ) {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAd() {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server) {
            server.createList("user", 20)
        },

        routes() {
            this.namespace = "api"
            this.timing = 750

            this.get("/users")
            this.post("/users")

            this.namespace = ""
            this.passthrough()
        },
    })

    return server
}