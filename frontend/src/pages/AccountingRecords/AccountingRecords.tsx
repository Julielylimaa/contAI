import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { RecordsTable } from "./components/Table/RecordsTable";
import { Container } from "./styles";
import {
  getAccountingRecords,
  updateRecord,
} from "../../service/AccountingEntry/accountingService";
import { months } from "../../domain/constants/months";
import { Entries } from "../../domain/types/entries";

export const AccountingRecords = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const [month, setMonth] = useState(months[currentMonth]);
  const [year, setYear] = useState(currentYear);

  const [entries, setEntries] = useState<Entries[]>([]);
  const [totalCredit, setTotalCredit] = useState<number>(0);
  const [totalDebit, setTotalDebit] = useState<number>(0);
  const [totalEntries, setTotalEntries] = useState<number>(0);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const date = `${months.indexOf(month) + 1} - ${year}`;

  const fetchData = async () => {
    try {
      const accountingRecords = await getAccountingRecords(
        date,
        currentPage,
        pageSize
      );

      if (accountingRecords) {
        const { entries, totalCredit, totalDebit, totalBalance, totalEntries } =
          accountingRecords;
        setTotalEntries(totalEntries);
        setEntries(entries);
        setTotalCredit(totalCredit);
        setTotalDebit(totalDebit);
        setTotalBalance(totalBalance);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleUpdateEntries = async (entry: Entries) => {
    try {
      const updateEntry = await updateRecord(entry);
      if (updateEntry) {
        fetchData();
      }
    } catch (error) {
      console.error("Erro ao atualizar entrada:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [month, year, currentPage]);

  return (
    <Container>
      <Header />
      <RecordsTable
        entries={entries}
        totalCredit={totalCredit}
        totalDebit={totalDebit}
        totalBalance={totalBalance}
        totalEntries={totalEntries}
        month={month}
        year={year}
        currentPage={currentPage}
        pageSize={pageSize}
        setMonth={setMonth}
        setYear={setYear}
        setCurrentPage={setCurrentPage}
        fetchData={fetchData}
        handleUpdateEntries={handleUpdateEntries}
      />
    </Container>
  );
};
