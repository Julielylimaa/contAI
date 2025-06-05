import { Request, Response } from "express";
import { RegisterUser } from "../services/RegisterUserService";

export class RegisterUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            throw new Error("A required field is missing.")
        }

        const registerUser = new RegisterUser();
        const result = await registerUser.execute({
            name,
            email,
            password
        })
        return response.json(result)

    }
}