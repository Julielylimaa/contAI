import { BtnRegister, Container, LoginForms, Text, Title } from "./styles";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { ImageBox } from "../../components/ImageBox/ImageBox";
import { useNavigate } from "react-router";
import { FormEvent, useState } from "react";
import { handleLogin } from "../../service/User/userService";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const auth = await handleLogin(email, password);
    if (auth === true) {
      navigate("/accountingrecords");
    }
  };

  return (
    <Container>
      <ImageBox>
        <LoginForms onSubmit={handleSubmit}>
          <Title>Acesse sua conta</Title>
          <Input
            label="E-mail"
            placeholder="Entre com seu e-mail"
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            id="senha"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button text="Entrar" />
          <Text>
            Ainda nao tem uma conta?{" "}
            <BtnRegister onClick={() => navigate("/register")}>
              Registre-se
            </BtnRegister>
          </Text>
        </LoginForms>
      </ImageBox>
    </Container>
  );
};
