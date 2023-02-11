import { useContext, useEffect, useState } from "react"
import BarraSuperior from "../../components/Navbar/NavbarComponent"
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
import { Api } from "../../config/Api";
import { ValidaLogin } from "../../config/ValidaLogin";
import NavbarComponent from "../../components/Navbar/NavbarComponent";


const Home = () => {
    const [pessoas, setProdutos] = useState([])


    useEffect(() => {
        Api.get('listar').then(({ data }) => {
            setProdutos(data.data)
            console.log(data.data)
        })
    }, [setProdutos])


    return (
    
            <NavbarComponent>

            
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
            
            </NavbarComponent>
    )
}

export default Home