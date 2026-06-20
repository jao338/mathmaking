import { authRoutes } from './auth.routes.js';
import type {FastifyInstance} from "fastify";

export async function routes(app: FastifyInstance): Promise<void>
{
    app.register(authRoutes, {
        prefix: '/auth'
    });
}
