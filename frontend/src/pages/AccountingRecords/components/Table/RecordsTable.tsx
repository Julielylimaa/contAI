import {
  TableContainer,
  CreditIcon,
  DateBtnContainer,
  Message,
  MessageContainer,
  SelectDateContainer,
  Table,
  TBody,
  Td,
  Th,
  THead,
  TotalBoxContainer,
  Tr,
  ValueHighLight,
  DebitIcon,
  EditIcon,
  DeleteIcon,
} from "./styles";

import { TotalBox } from "../../../../components/TotalBox/TotalBox";
import { Modal } from "../../../../components/AddRecordModal/Modal";
import { DateSelect } from "../../../../components/DateSelect/DateSelect";
import { Pagination } from "../../../../components/Pagination/Pagination";
import { Entries } from "../../../../domain/types/entries";
import { months } from "../../../../domain/constants/months";
import { formatDate } from "../../../../utils/formatDate";
import { typeOfEntry } from "../../../../utils/typeOfEntry";

interface RecordTableProps {
  entries: Entries[];
  totalCredit: number;
  totalDebit: number;
  totalBalance: number;
  totalEntries: number;
  month: string;
  year: number;
  currentPage: number;
  pageSize: number;
  setMonth: (month: string) => void;
  setYear: (year: number) => void;
  setCurrentPage: (page: number) => void;
  fetchData: () => void;
  handleUpdateEntries: (entry: Entries) => Promise<void>;
}

export const RecordsTable = ({
  entries,
  totalCredit,
  totalDebit,
  totalBalance,
  totalEntries,
  month,
  year,
  currentPage,
  pageSize,
  setMonth,
  setYear,
  setCurrentPage,
  fetchData,
  handleUpdateEntries,
}: RecordTableProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <TableContainer>
      <TotalBoxContainer>
        <TotalBox title="Crédito" total={totalCredit || 0}>
          <CreditIcon />
        </TotalBox>
        <TotalBox title="Débito" total={totalDebit || 0}>
          <DebitIcon />
        </TotalBox>
        <TotalBox title="Saldo" total={totalBalance || 0}></TotalBox>
      </TotalBoxContainer>

      <DateBtnContainer>
        <SelectDateContainer>
          <DateSelect
            id="month"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          >
            {months.map((m, index) => (
              <option key={index} value={m}>
                {m}
              </option>
            ))}
          </DateSelect>
          <DateSelect
            id="year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {[...Array(10)].map((_, index) => (
              <option key={currentYear - index} value={currentYear - index}>
                {currentYear - index}
              </option>
            ))}
          </DateSelect>
        </SelectDateContainer>
        <Modal submit={fetchData} />
      </DateBtnContainer>

      {entries.length === 0 ? (
        <MessageContainer>
          <Message>Não há dados disponiveis para essa data!</Message>
        </MessageContainer>
      ) : (
        <>
          <Table>
            <THead>
              <Tr>
                <Th>Data</Th>
                <Th>Descrição</Th>
                <Th>Valor</Th>
                <Th>Tipo</Th>
                <Th></Th>
              </Tr>
            </THead>
            <TBody>
              {entries.map((entry) => (
                <Tr key={entry.id}>
                  <Td>{formatDate(entry.date)}</Td>
                  <Td>{entry.description}</Td>
                  <Td>
                    <ValueHighLight variant={entry.type}>
                      R$ {entry.value.toFixed(2)}
                    </ValueHighLight>
                  </Td>

                  <Td>{typeOfEntry(entry.type)}</Td>
                  <Td>
                    <EditIcon onClick={() => handleUpdateEntries(entry)} />
                    <DeleteIcon />
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
          <Pagination
            totalItems={totalEntries || 0}
            itemsPerPage={pageSize}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </TableContainer>
  );
};
