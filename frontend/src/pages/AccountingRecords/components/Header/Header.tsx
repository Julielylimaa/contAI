import { useNavigate } from "react-router";
import {
  HeaderContainer,
  Title,
  Text,
  TextContainer,
  SuricatoImage,
  LogOutButton,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("Logout clicked");
  };

  return (
    <HeaderContainer>
      <SuricatoImage src="suricatin.png" alt="Suricato Logo" />
      <TextContainer>
        <Title>Cont.Ai</Title>
        <Text> Visualize aqui os lançamentos</Text>
      </TextContainer>
      <LogOutButton onClick={handleLogout} />
    </HeaderContainer>
  );
}
