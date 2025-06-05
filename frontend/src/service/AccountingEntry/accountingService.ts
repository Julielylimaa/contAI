import { Entries } from "../../domain/types/entries";
import { api } from "../axios";



interface GetAccountingRecordsResult {
    entries: Entries[];
    totalCredit: number;
    totalDebit: number;
    totalEntries: number;
}
export const getAccountingRecords = async (date: string,
    page: number,
    pageSize: number): Promise<GetAccountingRecordsResult | null> => {
    try {
        const resp = await api.get("accounting", {
            params: {
                date,
                page,
                pageSize
            }
        })

        const entries: Entries[] = resp.data.entries
        const totalCredit: number = resp.data.totalCreditValue
        const totalDebit: number = resp.data.totalDebitValue
        const totalEntries: number = resp.data.totalEntriesCount

        return { entries, totalCredit, totalDebit, totalEntries }
    } catch (err) {
        console.log(err)
        return null;
    }
}

export const handleNewEntry = async (date: string, description: string, value: number, type: "Credit" | "Debit") => {
    try {
        await api
            .post("accounting/", {
                date,
                description,
                value,
                type,
            })
            .then((resp) => {
                if (resp.status === 401) {
                    return false
                }

            });
    } catch (err) {
        alert("Ocorreu um erro!")
        console.log(err);
    }
}
