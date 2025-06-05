import { format } from "date-fns";

export const formatDate = (date: string): string => {
    const datePlusOne = new Date(date);
    datePlusOne.setDate(datePlusOne.getDate() + 1);

    const formattedDate = format(datePlusOne, 'dd/MM/yyyy');

    return formattedDate;
}