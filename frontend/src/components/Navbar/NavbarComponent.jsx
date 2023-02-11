import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const NavbarComponent = () => {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)
  const itensMenu = [
    {
      texto: 'Lista de Pessoas',
      icone: (<HomeIcon/>),
      to: '/listar'
    },
    {
      texto: 'Cadastro Pessoa',
      icone: (<PersonAddIcon/>),
      to:'/cadastro'
    }
  ]
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('logado')
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <MenuIcon sx={{cursor: 'pointer', mr:3}} onClick={(e)=>setMenuAberto(true)} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button color="inherit" onClick={handleLogout}>Sair</Button>
        </Toolbar>
        <Drawer anchor='left' open={menuAberto} onClose={(e) => setMenuAberto(false)}>
            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end',px: [1]}}>
                <IconButton edge="start" onClick={(e) => setMenuAberto(false)}>
                    <ChevronLeftIcon/>
                </IconButton>
            </Toolbar>
            <Divider/>
            <List sx={{width: 250}}>
                { itensMenu.map(itemMenu => (
                    <Link key={itemMenu.texto} to={itemMenu.to} className="menuLink">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{itemMenu.icone}</ListItemIcon>
                                <ListItemText primary={itemMenu.texto}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                )) }
            </List>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default NavbarComponent;