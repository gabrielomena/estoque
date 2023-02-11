import {  useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const ValidaLogin = ({children})=>{
const [login]=useState(localStorage.getItem('logado'))
const navigate=useNavigate()
    
    useEffect(()=>{
        if(!login){
            alert('vc nao tem permissão para acessar essa rota')
            navigate('/')
        }
    })
    return(
        <>
        {children}
        </>
    )

}