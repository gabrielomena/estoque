import { Button, Card, Divider, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { Api, api } from "../../config/Api";





export const Login =()=>{

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()


    const Logar =()=>{
        Api.post('login', {
            name: name,
            password: password
          })
          .then(function (response) {
            console.log(response);
          
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('logado',true)
            navigate('/home')
          })
          .catch(function (error) {
            console.error(error);
          });
    }

    const CadastrarUsuario =()=>{
        pi.post('/login', {
            name: name,
            password: password
          })
          .then(function (response) {
            console.log(response);
          
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('logado',true)
            navigate('/home')
          })
          .catch(function (error) {
            console.error(error);
          });
    }
    

    return(
        <Box  width='100vw' height={'100vh'} display='flex' justifyContent={'center'}  alignItems='center'>
     
        <Card>
            <Box width='400px' height='500px' display={'flex'} justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='column' width='70%' gap={4} >
            <Typography variant="h6"> <Divider>Tela de Login</Divider> </Typography>
            <TextField
            label='user'
            type='text'
         
            onFocus={()=>setError('')}
            />
             
             <TextField
            label='password'
            type='password'
           
            onFocus={()=>setError('')}
            />
            <Button variant="contained" onClick={Logar} type="submit">Logar</Button>
            </Box>
              </Box>
        </Card>
        </Box>
    )

}