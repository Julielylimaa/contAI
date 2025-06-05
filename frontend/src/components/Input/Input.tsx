import { InputContainer, Label, InputStyle } from "./styles";

interface Props {
  label?: string;
  id: string;
  type: string;
  required: boolean;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  id,
  placeholder,
  type,
  required,
  value,
  onChange,
}: Props) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputStyle
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};
