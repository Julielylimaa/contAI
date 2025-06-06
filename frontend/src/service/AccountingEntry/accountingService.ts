import { Entries, UpdateEntry } from "../../domain/types/entries";
import { api } from "../axios";



interface GetAccountingRecordsResult {
    entries: Entries[];
    totalCredit: number;
    totalDebit: number;
    totalBalance: number;
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
        const totalBalance: number = resp.data.totalBalance


        return { entries, totalCredit, totalDebit, totalBalance, totalEntries }

    } catch (err) {
        console.log(err)

        return null;
    }
}

export const handleNewEntry = async (date: string, description: string, value: number, type: "Credit" | "Debit") => {
    try {
        const resp = await api
            .post("accounting", {
                date,
                description,
                value,
                type,
            })
            .then((resp) => {
                if (resp.status === 401) {
                    return false
                }
                return resp.data;
            });
        return resp;
    } catch (err) {
        alert("Ocorreu um erro!")
        console.log(err);

    }
}


export const updateRecord = async ({ id, date, description, value, type }: UpdateEntry) => {
    try {
        const resp = await api
            .put(`accounting/${id}`, {
                date,
                description,
                value,
                type,
            })
            .then((resp) => {
                if (resp.status === 401) {
                    return false
                }

                console.log(resp.data);
                return resp.data;
            });

        return resp;
    } catch (err) {
        alert("Ocorreu um erro!")
        console.log(err);

    }
}

export const deleteRecord = async (id: string) => {
    try {
        const resp = await api
            .delete(`accounting/${id}`)
            .then((resp) => {
                if (resp.status === 401) {
                    return false
                }
                return resp.data;
            });
        alert("Registro deletado com sucesso!")
        return resp;
    } catch (err) {
        alert("Ocorreu um erro!")
        console.log(err);

    }
}
