import { BtnLogin, Container, RegisterForms, Text, Title } from "./styles";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { ImageBox } from "../../components/ImageBox/ImageBox";
import { useNavigate } from "react-router";
import { FormEvent, useState } from "react";
import { handleRegister } from "../../service/User/userService";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await handleRegister(name, email, password);
    navigate("/");
  };
  return (
    <Container>
      <ImageBox>
        <RegisterForms onSubmit={handleSubmit}>
          <Title>Crie sua conta</Title>
          <Input
            label="Nome completo"
            placeholder="Digite seu nome"
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            label="Senha"
            placeholder="Crie sua senha"
            id="senha"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <Button text="Cadastrar" />

          <Text>
            Já possui uma conta?{" "}
            <BtnLogin onClick={() => navigate(-1)}> Faça Login</BtnLogin>
          </Text>
        </RegisterForms>
      </ImageBox>
    </Container>
  );
};
