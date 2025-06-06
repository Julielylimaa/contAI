import { prisma } from "../../prisma/prismaClient";

export class DeleteAccountingEntryService {
    async execute(id: string) {
        if (!id) {
            throw new Error("ID is required.");
        }

        const existingEntry = await prisma.accountingEntry.findUnique({
            where: { id },
        });

        if (!existingEntry) {
            throw new Error("Accounting entry not found.");
        }



        const deleteEntry = await prisma.accountingEntry.delete({
            where: { id }
        });

        return { message: "Accounting entry deleted successfully." };
    }
}