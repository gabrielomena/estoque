import React from "react"
import { Button, Card, Divider, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { Api } from "../../config/Api";




export const Cadastro = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const Cad = () => {

        Api.post('create', {
            name: name,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('logado', true)
                navigate('/home')
            })
            .catch(function (error) {
                console.error(error);
            });
    }



    return (
        <Box width='100vw' height={'100vh'} display='flex' justifyContent={'center'} alignItems='center'>

            <Card>
                <Box width='400px' height='500px' display={'flex'} justifyContent='center' alignItems='center'>
                    <Box display='flex' flexDirection='column' width='70%' gap={4} >
                        <Typography variant="h6"> <Divider>Tela de Cadastro</Divider> </Typography>

                        <TextField label='Nome' type='text' onFocus={() => setError('')} />

                        <TextField label='Email' type='text' onFocus={() => setError('')} />

                        <TextField label='Senha' type='password' onFocus={() => setError('')}/>

                        <Button variant="contained" onClick={Cad} type="submit">Cadastrar</Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    )

}