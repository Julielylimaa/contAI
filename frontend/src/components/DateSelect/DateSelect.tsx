import { ReactNode } from "react";
import { Container, Icon, MonthYearInput } from "./styles";

interface Props {
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

export const DateSelect = ({ id, value, onChange, children }: Props) => {
  return (
    <Container>
      <Icon />
      <MonthYearInput id={id} value={value} onChange={onChange}>
        {children}
      </MonthYearInput>
    </Container>
  );
};
