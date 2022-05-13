import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../reducer/action"
import { ImageBar,DivBar } from "./styled"

const HamburgerBar = ({activo}) =>{
    const [Login, setLogin] = useState({email:'thomascarreno02@gmail.com',password:'thomas'})
    const [Usuario, setUsuario] = useState({name:'toto',email:'toto@gmail.com',password:'123456',rol:'USER_ROLE'})
    const [actUser,setActUser] = useState({name:'thomas',password:'thomas'})
    const id = useSelector(e=>e.user.uid)
    const dispatch = useDispatch();
 



    return(
            <DivBar ref={activo}>
                <ul>
                    <li>hola</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
          </DivBar>
    )
}

export default HamburgerBar