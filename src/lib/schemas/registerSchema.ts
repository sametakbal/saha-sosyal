import {z} from 'zod';


export const registerSchema = z.object({
    name: z.string().min(3, {
        message: 'nameRequired'
    }),
    surname: z.string().min(3, {
        message: 'surnameRequired'
    }),
    positions: z.array(z.string()).length(1, {
        message: 'positionRequired'
    }),
    email: z.string().email({
        message: 'emailRequired'
    }),
    password: z.string().min(6, {
        message: 'passwordMinChar'
    })
});

export type RegisterSchema = z.infer<typeof registerSchema>
