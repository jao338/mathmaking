import type { FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

import { AuthController } from "../domain/auth/auth.controller.js";
import { AuthService } from "../domain/auth/auth.service.js";
import { UserModel } from "../domain/auth/user.model.js";

export async function authRoutes(app: FastifyInstance): Promise<void> {
    const userModel = new UserModel();
    const authService = new AuthService(userModel);
    const authController = new AuthController(authService);

    app.post('/login', (req:  FastifyRequest, reply: FastifyReply) =>
        authController.login(req, reply)
    );

    app.post('/register', (req:  FastifyRequest, reply: FastifyReply) =>
        authController.register(req, reply)
    );

    app.get('/me', (req:  FastifyRequest, reply: FastifyReply) =>
        authController.me(req, reply)
    );
}
