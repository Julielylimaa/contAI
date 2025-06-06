import { Btn, BtnContainer } from "./styles";
interface Props {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
}
export const Button = ({ text, onClick, isDisabled }: Props) => {
  return (
    <BtnContainer>
      <Btn disabled={isDisabled} onClick={onClick}>
        {text}
      </Btn>
    </BtnContainer>
  );
};
