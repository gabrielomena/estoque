import { useContext, useEffect, useState } from "react"
import BarraSuperior from "../../components/Navbar/NavbarComponent"
import api from "../../services/Api"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';
import { Box, Container } from "@mui/system"
import { Button } from "@mui/material"

const Home = () => {
    const [pessoas, setPessoas] = useState([])

    useEffect(() => {
        setTitle('Listagem de Pessoas')
    }, [setTitle])

    useEffect(() => {
        api.get('api/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(({ data }) => {
            setPessoas(data.data)
            console.log(data.data)
        })
    }, [setPessoas])


    return (
        <VerificaLogin>
            <BarraSuperior />
            <Container maxWidth="xl">
                <Box sx={{ p: 3 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Opções</TableCell>
                                    <TableCell align="center">Nome</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Data de Nascimento</TableCell>
                                    <TableCell align="center">Telefone</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pessoas.map((pessoa) => (
                                    <TableRow
                                        key={pessoa.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left"><Button onClick={() => handleDelete(pessoa.id)}><DeleteForeverIcon sx={{ color: 'red' }} /></Button></TableCell>
                                        <TableCell align="left" component="th" scope="row">
                                            {pessoa.nome}
                                        </TableCell>
                                        <TableCell align="left">{pessoa.email}</TableCell>
                                        <TableCell align="left">{pessoa.data_nascimento}</TableCell>
                                        <TableCell align="left">{pessoa.telefones.map((telefone) => (
                                            <>
                                                {telefone.numero}
                                            </>))}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </VerificaLogin>
    )
}

export default Home