export type Entries = {
    id: string;
    date: string;
    description: string;
    type: "Credit" | "Debit";
    value: number;
    createdAt: string;
    userId: string;
};
