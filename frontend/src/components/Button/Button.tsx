import { Btn, BtnContainer } from "./styles";
interface Props {
  text: string;
  onClick?: () => void;
}
export const Button = ({ text, onClick }: Props) => {
  return (
    <BtnContainer>
      <Btn onClick={onClick}>{text}</Btn>
    </BtnContainer>
  );
};
