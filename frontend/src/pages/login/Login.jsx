import {
  Alert,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalBasico } from "../../components/ModalBasico";
import { Api } from "../../config/Api";

export const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const [error, setError] = useState([]);

  const Logar = () => {
    Api.post("login", {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("logado", true);
      })
      .catch(function (error) {
        console.error(error);
        setError("Login ou senha invalidos");
      });
  };

  const CadastrarUsuario = () => {
    Api.post("create", {
      name: name,
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        setModalOpen(false);
      }).catch((error)=>{
        console.log(error.response.data.error[0])
        setError(error.response.data.error[0])
      })
    }

  return (
    <Box
      width="100vw"
      height={"100vh"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <Card>
        <Box
          width="400px"
          height="500px"
          display={"flex"}
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column" width="70%" gap={4}>
            <Typography variant="h6">
              {" "}
              <Divider>Tela de Login</Divider>{" "}
            </Typography>
            {error.length>0 && <Alert severity="error">{error}</Alert>}
            <TextField
              label="usuario"
              type="text"
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setError("")}
            />

            <TextField
              label="senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setError("")}
            />
            <Button variant="contained" onClick={Logar} type="submit">
              Logar
            </Button>
            <Box sx={{ mt: 3 }}>
              <Link onClick={() => setModalOpen(true)} href="#" variant="body2">
                {"Não tem uma conta? Inscrever-se"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Card>

      <ModalBasico isOpen={modalOpen} IsClosed={() => setModalOpen(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Tela de cadastro rapidinho </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "70%",
            }}
          >
            <TextField
              label="user"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button onClick={CadastrarUsuario} variant="contained">
              Cadastrar
            </Button>
          </Box>
        </Box>
      </ModalBasico>
    </Box>
  );
};
