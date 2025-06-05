import { AccountingEntryType } from "@prisma/client";
import { prisma } from "../../prisma/prismaClient";
import { response } from "express";

interface IAccountingEntry {
    date: Date,
    userId: string,
    description: string,
    value: number,
    type: AccountingEntryType
}

export class CreateAccountingEntry {
    async execute({ date, userId, description, value, type }: IAccountingEntry) {

        if (!userId) {
            return response.status(400).json({ error: "User ID is required." });
        }

        const [day, month, year] = date.toString().split('/');
        const formattedDate = new Date(`${year}-${month}-${day}`);
        const accountingEntry = await prisma.accountingEntry.create({
            data: {
                date: formattedDate,
                userId,
                description,
                value,
                type
            }
        })
        return accountingEntry
    }
}