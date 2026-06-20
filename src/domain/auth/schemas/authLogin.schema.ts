import {z, type ZodObject} from 'zod';

export const authLoginSchema: ZodObject = z.object({
    user: z
        .string()
        .trim()
        .min(5)
        .max(30),

    password: z
        .string()
        .min(8)
        .max(30),

    password_confirmation: z
        .string()
        .min(8)
        .max(30),
});

export type authLoginDTO = z.infer<typeof authLoginSchema>;
