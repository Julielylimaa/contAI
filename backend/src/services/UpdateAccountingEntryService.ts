import { AccountingEntryType } from "@prisma/client";
import { prisma } from "../../prisma/prismaClient";
import { format } from "date-fns";
import { formatDate } from "../utils/DateFormat";


interface IAccountingEntry {
    date: Date,
    description: string,
    value: number,
    type: AccountingEntryType
}

export class UpdateAccountingEntryService {
    async execute(id: string, { date, description, value, type }: IAccountingEntry) {
        if (!id) {
            throw new Error("ID is required.");
        }

        const existingEntry = await prisma.accountingEntry.findUnique({
            where: { id },
        });

        if (!existingEntry) {
            throw new Error("Accounting entry not found.");
        }

        const formattedDate = formatDate(date);

        const updatedEntry = await prisma.accountingEntry.update({
            where: { id },
            data: {
                date: formattedDate,
                description,
                value,
                type
            }
        });

        return { message: "Accounting entry updated successfully." };
    }
}   