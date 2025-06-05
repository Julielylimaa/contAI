import { prisma } from "../../prisma/prismaClient"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

interface IAuthenticateUser {
    email: string,
    password: string
}


export class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUser) {

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!user) {
            throw new Error("Email or Password invalid!")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email or Password invalid!")
        }


        if (!process.env.JWT_SECRET) {
            throw new Error("Secret not set.")
        }
        const token = sign({ email }, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: '1d'
        })


        return token;
    }
}