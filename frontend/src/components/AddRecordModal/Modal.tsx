import * as Dialog from "@radix-ui/react-dialog";
import {
  AddButton,
  CloseButton,
  Content,
  Form,
  Label,
  SelectType,
  SelectTypeContainer,
} from "./styles";
import { Input } from "../Input/Input";
import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { handleNewEntry } from "../../service/AccountingEntry/accountingService";
import { IoIosClose } from "react-icons/io";

export const Modal = ({ submit }: { submit: () => void }) => {
  const [value, setValue] = useState<number>(0);
  const [valueString, setValueString] = useState<string>("R$0.00");
  const [typeSelect, setTypeSelect] = useState<"Crédito" | "Débito">("Crédito");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [type, setType] = useState<"Credit" | "Debit">("Credit");
  const [open, setOpen] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value as "Crédito" | "Débito";
    const result = selectedType === "Crédito" ? "Credit" : "Debit";
    setTypeSelect(selectedType);
    setType(result);
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
    setTypeSelect("Crédito");
    setDescription("");
    setDate("");
    setType("Credit");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await handleNewEntry(date, description, value, type);
    resetForm();
    setOpen(false);
    submit();
  };
  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <AddButton onClick={() => setOpen(true)}>+ Novo Registro</AddButton>
        </Dialog.Trigger>

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

            <CloseButton>
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
                  value={typeSelect}
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

              <Button text="Adicionar" />
            </Form>
            <Dialog.Description></Dialog.Description>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
