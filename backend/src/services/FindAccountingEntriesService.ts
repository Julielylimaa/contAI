import { prisma } from "../../prisma/prismaClient";

export class FindAccountingEntries {
    async execute(id: string, date: string, page: number, pageSize: number) {
        const [month, year] = date.toString().split('-').map(Number)

        const skip = (page - 1) * pageSize

        const startDate = new Date(Date.UTC(year, month - 1, 1));
        const endDate = new Date(Date.UTC(year, month, 1));


        const groupEntriesByType = await prisma.accountingEntry.groupBy({
            by: ['type'],
            where: {
                userId: {
                    equals: id
                },
                date: {
                    gte: startDate,
                    lt: endDate
                }
            },
            _sum: {
                value: true,
            }
        })

        const totalEntriesCount = await prisma.accountingEntry.count({
            where: {
                userId: {
                    equals: id
                },
                date: {
                    gte: startDate,
                    lt: endDate
                }
            }
        });

        const totalCreditValue = groupEntriesByType.find(group => group.type === 'Credit')?._sum.value || 0
        const totalDebitValue = groupEntriesByType.find(group => group.type === 'Debit')?._sum.value || 0
        const totalBalance = totalCreditValue - totalDebitValue

        const entries = await prisma.accountingEntry.findMany({
            where: {
                userId: {
                    equals: id
                },
                date: {
                    gte: startDate,
                    lt: endDate
                }
            },
            skip: skip,
            take: pageSize,
            orderBy: {
                date: 'desc',
            }
        })



        return { entries, totalCreditValue, totalDebitValue, totalEntriesCount, totalBalance }
    }
}