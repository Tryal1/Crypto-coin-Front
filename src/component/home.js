import { useEffect, useRef, useState} from "react";
import { Centrar } from "./styled";
import TableData from "./table";
import { useDispatch, useSelector } from "react-redux";
import { coinsList, Divisas, loginUser, OHLC, SetDivisa } from "../reducer/action";
import SearchBar from "./searchBar";
import { actualizarUsuario, crearUsuario,borrarUsuario } from "./api-call";

const Home = () =>{
    const dispatch = useDispatch();
    const [render, setRender] = useState(1)
    const [Login, setLogin] = useState({email:'thomascarreno02@gmail.com',password:'thomas'})
    const [Usuario, setUsuario] = useState({name:'toto',email:'toto@gmail.com',password:'123456',rol:'USER_ROLE'})
    const [actUser,setActUser] = useState({name:'thomas',password:'thomas'})
    const divisas = useSelector(e=>e.divisas)
    const id = useSelector(e=>e.user.uid)
    const renderizar = () =>{
      setRender(render*-1)
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        dispatch(loginUser(Login))
        // const data = await actualizarUsuario(actUser,id)
        // console.log(data)
    }

    useEffect(()=>{
        dispatch(coinsList(divisas));
        dispatch(Divisas())
        dispatch(SetDivisa(divisas))
    },[dispatch,divisas])
    
    return(
        <Centrar>
            <button onClick={handleClick}>Login</button>
            <SearchBar/>
           <TableData setRender={renderizar}/>
        </Centrar>
    );
}

export default Home
//https://api.coinconvert.net/convert/eth/usd?amount=2 convert

//https://api.coingecko.com/api/v3/simple/supported_vs_currencies   divisas

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=69ad0be6f599f2934977 conver