import { TotalContainer, Title, Total } from "./styles";

interface Props {
  title: string;
  total: number;
}

export const TotalBox = ({ title, total }: Props) => {
  return (
    <TotalContainer>
      <Title>{title}</Title>
      <Total>R$ {total.toFixed(2)}</Total>
    </TotalContainer>
  );
};
