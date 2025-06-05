import { prisma } from "../../prisma/prismaClient";
import { hash } from "bcrypt"
interface IRegisterUser {
    name: string;
    email: string;
    password: string;
}

export class RegisterUser {
    async execute({ name, email, password }: IRegisterUser) {

        const userExist = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        })

        if (userExist) {
            throw new Error("User already exists.")
        }

        const hashPassword = await hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
            }
        })
        return { message: "User registered successfully." };
    }


}