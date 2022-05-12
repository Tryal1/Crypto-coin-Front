import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetDivisa } from "../reducer/action";
import { Barra } from "./styled";

const SearchBar = () =>{
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const coins = useSelector(e=>e.allCoins)
    const alldivisas = useSelector(e=>e.alldivisas)


    const update = coin => {
        setSearch(coin)
         setDisplay(false);
     }
    const handleType = (e) =>{
        dispatch(SetDivisa(e))
    }
    const ActiveDark = () =>{
        document.body.classList.toggle('dark-mode')
    }
  
    return(
        <Barra>
                <label className="switch">
                    <input type="checkbox" onClick={ActiveDark}/>
                    <span className="slider"></span>
                </label>
            <div>
                <select onClick={(e)=>handleType(e.target.value)}>
                <option value='usd'>USD</option>
                {alldivisas ? alldivisas.map(alldivisas =>
                <option key={alldivisas} value={alldivisas}>{alldivisas.toUpperCase()}</option>):null}
                </select>
            </div>
            <div className="DivEnd">
                <input
                id="auto"
                onClick={() => setDisplay(!display)}
                placeholder="Type to search"
                value={search}
                onChange={event => setSearch(event.target.value)}
                />
                    {display && (
                    <div className="container">
                        {coins
                            .filter((coins) =>coins.name.toLowerCase().includes(search.toLowerCase()))
                            .map((value, i) => {
                                
                            return (
                                <div
                                onClick={() => update(value.name)}
                                key={i}
                                tabIndex="0"
                                className="option"
                                >
                                <Link to={`/${value.id}`}>
                                    <img src={value.image} alt="Crypto" />
                                    <span>{value.name}</span>
                                </Link>
                                </div>
                            );
                        })}
                    </div>
                    )}
             </div>
        </Barra>
    )
}

export default SearchBar