import {
  Container,
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
} from "./styles";

import { TotalBox } from "../../../../components/TotalBox/TotalBox";
import { Modal } from "../../../../components/AddRecordModal/Modal";
import { DateSelect } from "../../../../components/DateSelect/DateSelect";
import { Pagination } from "../../../../components/Pagination/Pagination";
import { Entries } from "../../../../domain/types/entries";
import { months } from "../../../../domain/constants/months";
import { formatDate } from "../../../../utils/formatDate";

interface RecordTableProps {
  entries: Entries[];
  totalCredit: number;
  totalDebit: number;
  totalEntries: number;
  month: string;
  year: number;
  currentPage: number;
  pageSize: number;
  setMonth: (month: string) => void;
  setYear: (year: number) => void;
  setCurrentPage: (page: number) => void;
  fetchData: () => void;
}

export const RecordsTable = ({
  entries,
  totalCredit,
  totalDebit,
  totalEntries,
  month,
  year,
  currentPage,
  pageSize,
  setMonth,
  setYear,
  setCurrentPage,
  fetchData,
}: RecordTableProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <TotalBoxContainer>
        <TotalBox title="Crédito" total={totalCredit || 0}></TotalBox>
        <TotalBox title="Débito" total={totalDebit || 0}></TotalBox>
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
                  <Td>{entry.type}</Td>
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
    </Container>
  );
};
