import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categoryCoin } from "../reducer/action"
import { ImageBar,DivBar } from "./styled"

const HamburgerBar = ({activo}) =>{
    const [Usuario, setUsuario] = useState({name:'toto',email:'toto@gmail.com',password:'123456',rol:'USER_ROLE'})
    const [actUser,setActUser] = useState({name:'thomas',password:'thomas'})
    const id = useSelector(e=>e.user.uid)
    const category = useSelector(e=>e.category)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(categoryCoin())
    },[dispatch])


    return(
            <DivBar ref={activo}>
                <h3>Categories</h3>
                <ul>
                    {category.map(category=><li>{category.name}</li>)}
                </ul>
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