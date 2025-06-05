import {
  HeaderContainer,
  Title,
  Text,
  TextContainer,
  SuricatoImage,
  LogOutButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <SuricatoImage src="suricatin.png" alt="Suricato Logo" />
      <TextContainer>
        <Title>ContAI</Title>
        <Text> Visualize aqui os lançamentos</Text>
      </TextContainer>
      <LogOutButton />
    </HeaderContainer>
  );
}
