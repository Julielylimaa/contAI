export type Entries = {
    id: string;
    date: string;
    description: string;
    type: "Credit" | "Debit";
    value: number;
    createdAt: string;
    userId: string;
};

export interface CreateEntry {
    description: string;
    date: string;
    value: number;
    type: "Credit" | "Debit";
}

export interface UpdateEntry {
    id: string;
    description: string;
    date: string;
    value: number;
    type: "Credit" | "Debit";
}