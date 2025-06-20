import { api } from "../axios";


export const handleLogin = async (email: string, password: string) => {
    try {
        const resp = await api.post("login", {
            email,
            password,
        })
        localStorage.setItem("token", resp.data);
        return true
    } catch (err) {
        console.log(err)
        alert("E-mail ou senha incorretos!")
        return err;
    }
}

export const handleRegister = async (name: string, email: string, password: string) => {
    try {
        const resp = await api.post("user/", {
            name,
            email,
            password,
        });
        if (resp.status === 201) {

            return true;
        }

        alert("Usuário cadastrado com sucesso!");

    } catch (err) {
        alert("Ocorreu um erro! ");
        return err

    }
}