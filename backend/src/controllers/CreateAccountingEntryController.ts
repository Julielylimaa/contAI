import { CreateAccountingEntry } from "../services/CreateAccountingEntryService"
import { Request, Response } from "express"


export class CreateAccountingEntryController {
    async handle(request: Request, response: Response) {
        const { date, description, value, type } = request.body
        const { userId } = request

        const createAccountingEntry = new CreateAccountingEntry()


        if (value < 0) {
            throw new Error("Negative numbers are not allowed.")
        }
        const entry = await createAccountingEntry.execute({
            date,
            userId,
            description,
            value,
            type
        })

        return response.json(entry)
    }
}