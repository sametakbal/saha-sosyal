import {z} from 'zod';


export const loginSchema = z.object({
    email:z.string().email({
        message:'emailRequired'
    }),
    password:z.string().min(6,{
        message: 'passwordMinChar'
    })
});

export type LoginSchema = z.infer<typeof loginSchema>
