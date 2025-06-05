import { AccountingEntryType } from "@prisma/client";
import { prisma } from "../../prisma/prismaClient";
import { format } from "date-fns";
import { response } from "express";
import { formatDate } from "../utils/DateFormat";

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

        const formattedDate = formatDate(date)

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