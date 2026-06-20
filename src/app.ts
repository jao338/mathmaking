import Fastify, {type FastifyInstance} from 'fastify';
import { routes } from './routes/index.js';

export function buildApp(): FastifyInstance {
    const app = Fastify({
        logger: true
    });

    app.register(routes);

    return app;
}
