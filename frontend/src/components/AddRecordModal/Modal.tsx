import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Form,
  Label,
  SelectType,
  SelectTypeContainer,
} from "./styles";
import { Input } from "../Input/Input";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
// import { handleNewEntry } from "../../service/AccountingEntry/accountingService";
import { IoIosClose } from "react-icons/io";
import { typeOfEntry } from "../../utils/typeOfEntry";
import { CreateEntry, UpdateEntry } from "../../domain/types/entries";

interface ModalProps {
  submit: () => void;
  onCreate: (data: CreateEntry) => Promise<void>;
  onUpdate: (data: UpdateEntry) => Promise<void>;
  triggerLabel: string;
  entryToEdit?: UpdateEntry | null;
  children?: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Modal = ({
  submit,
  entryToEdit,
  onCreate,
  onUpdate,
  children,
  open,
  setOpen,
}: ModalProps) => {
  useEffect(() => {
    if (entryToEdit) {
      setDescription(entryToEdit.description);
      setDate(entryToEdit.date);
      setValue(entryToEdit.value);
      setValueString(`R$ ${entryToEdit.value.toFixed(2)}`);
      setType(entryToEdit.type);
      setOpen(true);
    }
  }, [entryToEdit]);

  const [value, setValue] = useState<number>(0);
  const [valueString, setValueString] = useState<string>("R$0.00");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [type, setType] = useState<"Credit" | "Debit">("Credit");
  // const [open, setOpen] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value === "Crédito" ? "Credit" : "Debit");
  };

  const maskCurrency = (valueInput: string) => {
    valueInput = valueInput.replace(/[^\d,-]/g, "");
    const numericValue = (parseFloat(valueInput) / 100)
      .toFixed(2)
      .replace(",", ".");
    setValue(parseFloat(numericValue));
    valueInput = `R$ ${numericValue}`;
    return valueInput;
  };

  const resetForm = () => {
    setValue(0);
    setValueString("R$0.00");
    setType("Credit");
    setDescription("");
    setDate("");
    setType("Credit");
  };

  const handleCreate = async () => {
    await onCreate({ date, description, value, type });
    resetForm();
    setOpen(false);
    submit();
  };

  const handleUpdate = async () => {
    if (!entryToEdit) return;

    await onUpdate({
      id: entryToEdit.id,
      date,
      description,
      value,
      type,
    });

    resetForm();
    setOpen(false);
    submit();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (entryToEdit) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              position: "fixed",
              inset: 0,
            }}
          />
          <Content>
            <Dialog.Title style={{ textAlign: "center" }}>
              Nova transação
            </Dialog.Title>

            <CloseButton onClick={() => setOpen(false)}>
              <IoIosClose size={30} />
            </CloseButton>

            <Form onSubmit={handleSubmit}>
              <Input
                label="Descrição"
                required
                type="text"
                value={description}
                placeholder="Descrição da transação"
                id="date"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />

              <Input
                label="Data"
                required
                type="date"
                value={date}
                placeholder="Data da transação"
                id="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <SelectTypeContainer>
                <Label htmlFor="type">Tipo</Label>
                <SelectType
                  id="type"
                  value={typeOfEntry(type)}
                  onChange={handleSelectChange}
                >
                  <option>Crédito</option>
                  <option>Débito</option>
                </SelectType>
              </SelectTypeContainer>

              <Input
                label="Valor"
                required
                type="text"
                placeholder="Data da transação"
                id="date"
                value={valueString}
                onChange={(e) => {
                  setValueString(maskCurrency(e.target.value));
                }}
              />

              <Button text={entryToEdit ? "Editar" : "Adicionar"} />
            </Form>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
