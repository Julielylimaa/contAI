import { format } from "date-fns";

export const formatDate = (date: string | Date): Date => {
    const datePlusOne = new Date(date);
    datePlusOne.setDate(datePlusOne.getDate() + 1);

    const formattedDate = new Date(format(datePlusOne, 'yyyy-MM-dd'));



    return formattedDate
}