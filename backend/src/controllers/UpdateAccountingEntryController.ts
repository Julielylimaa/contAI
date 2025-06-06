import { Request, Response } from "express"
import { UpdateAccountingEntryService } from "../services/UpdateAccountingEntryService";

export class UpdateAccountingEntryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { date, description, value, type } = request.body;
        const { userId } = request;

        if (!id) {
            throw new Error("ID is required.");
        }

        if (value <= 0) {
            throw new Error("Invalid number!");
        }

        const updateAccountingEntryService = new UpdateAccountingEntryService();



        const updatedEntry = await updateAccountingEntryService.execute(id, {
            date,
            description,
            value,
            type
        });


        return response.json(updatedEntry);
    }
}