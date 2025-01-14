import {z} from "zod"

export const userSchema = z.object({
    username: z.string().min(4).max(16),
    password: z.string().min(6).max(16),
    name: z.string().min(3).max(16)
})

export const signInSchema = z.object({
    username: z.string().min(4).max(16),
    password: z.string().min(6).max(16)
})

export const createRoomSchema = z.object({
    name: z.string().min(4).max(16),
    
})

