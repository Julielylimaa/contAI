import { FindAccountingEntries } from "../services/FindAccountingEntriesService";
import { Request, Response } from "express";

export class FindAccountingEntriesController {
    async handle(request: Request, response: Response) {
        const { userId } = request

        const { date, page = 1, pageSize = 10 } = request.query

        const findAccountingEntries = new FindAccountingEntries()


        const result = await findAccountingEntries.execute(

            userId,
            date as string,
            Number(page),
            Number(pageSize)
        )


        return response.json(result)

    }
}