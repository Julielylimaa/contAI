import {
  TableContainer,
  DateBtnContainer,
  Message,
  MessageContainer,
  SelectDateContainer,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  ValueHighLight,
  EditIcon,
  DeleteIcon,
  AddButton,
} from "./styles";

import { Modal } from "../../../../components/Modal/Modal";
import { DateSelect } from "../../../../components/DateSelect/DateSelect";
import { Pagination } from "../../../../components/Pagination/Pagination";
import {
  Entries,
  CreateEntry,
  UpdateEntry,
} from "../../../../domain/types/entries";
import { months } from "../../../../domain/constants/months";
import { formatDate } from "../../../../utils/formatDate";
import { typeOfEntry } from "../../../../utils/typeOfEntry";
import { useState } from "react";
import { AccountTotals } from "../AccountTotals/Totals";

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
  handleUpdateEntries: (entry: UpdateEntry) => Promise<void>;
  handleCreateEntries: (data: CreateEntry) => Promise<void>;
  handleDeleteEntries: (id: string) => Promise<void>;
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
  handleCreateEntries,
  handleDeleteEntries,
}: RecordTableProps) => {
  const currentYear = new Date().getFullYear();

  const [open, setOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<Entries | null>(null);
  const [modalTitle, setModalTitle] = useState("Novo Registro");

  return (
    <TableContainer>
      <AccountTotals
        totalCredit={totalCredit}
        totalDebit={totalDebit}
        totalBalance={totalBalance}
      />
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

        <Modal
          setOpen={(value) => {
            setOpen(value);
            if (!value) setSelectedEntry(null);
          }}
          open={open}
          onUpdate={handleUpdateEntries}
          onCreate={handleCreateEntries}
          submit={fetchData}
          entryToEdit={selectedEntry}
          modalTitle={modalTitle}
        />
        <AddButton
          onClick={() => {
            setOpen(true);
            setSelectedEntry(null);
            setModalTitle("Novo Registro");
          }}
        >
          + Novo Registro
        </AddButton>
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
                    <EditIcon
                      onClick={() => {
                        setSelectedEntry(entry);
                        setOpen(true);
                        setModalTitle("Editar Registro");
                      }}
                    />

                    <DeleteIcon onClick={() => handleDeleteEntries(entry.id)} />
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
