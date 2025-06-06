import { Request, Response } from "express"
import { DeleteAccountingEntryService } from "../services/DeleteAccountingEntryService";

export class DeleteAccountingEntryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;


        if (!id) {
            throw new Error("ID is required.");
        }

        const deleteAccountingEntryService = new DeleteAccountingEntryService();



        const deletedEntry = await deleteAccountingEntryService.execute(id);

        return response.json(deletedEntry);
    }
}