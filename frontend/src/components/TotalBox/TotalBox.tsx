import { TotalContainer, Title, Total, TextBox } from "./styles";

import { ReactNode } from "react";

interface Props {
  title: string;
  total: number;
  children?: ReactNode;
}

export const TotalBox = ({ title, total, children }: Props) => {
  return (
    <TotalContainer>
      <TextBox>
        <Title>{title}</Title>
        <Total>R$ {total.toFixed(2)}</Total>
      </TextBox>
      {children}
    </TotalContainer>
  );
};
