import type { FastifyReply, FastifyRequest } from "fastify";
import {authLoginSchema} from "./schemas/authLogin.schema.js";
import type {AuthService} from "./auth.service.js";

export class AuthController {
    constructor(private readonly authService: AuthService) {}

    async login(request: FastifyRequest, reply: FastifyReply) {
        const payload = authLoginSchema.parse(request.body);

        const result = this.authService.login(payload);

        return reply.status(201).send(result);
    }

    async register(_: FastifyRequest, reply: FastifyReply) {
        return reply.status(201).send({ message: 'Register feito com sucesso' });
    }

    async me(_: FastifyRequest, reply: FastifyReply) {
        return reply.status(200).send({
            data: {
                name: 'John Doe 123',
                user: 'John Doe',
                age: 18
            }
        });
    }
}
