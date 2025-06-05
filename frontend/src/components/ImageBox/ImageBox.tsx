import { ReactNode } from "react";
import loginImage from "/login.jpeg";
import { Container, Forms, ImageContainer } from "./styles";

interface BoxProps {
  children?: ReactNode;
}
export const ImageBox = ({ children }: BoxProps) => {
  return (
    <Container>
      <ImageContainer src={loginImage} alt="ContAI" />
      <Forms>{children}</Forms>
    </Container>
  );
};
