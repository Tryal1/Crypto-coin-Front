import { useEffect, useState } from "react";
import { ContainerConvert } from "./styled";

const Convert = () => {
    const [cantidad, setCantidad] = useState();
    const [data, setData] = useState();
    let val1 = 'btc';
    let val2 = 'eth';
    let cambio = '';

    const change = () =>{
        cambio = val1;
        val1 = val2;
        val2 = cambio;
        console.log(val1, val2)
    }

    const onchange = (e) =>{
        setCantidad(e.target.value)
        document.input2 = data.ETH
    }

    useEffect(()=>{
        fetch(`https://api.coinconvert.net/convert/${val1}/${val2}?amount=${cantidad}`)
        .then(response => response.json())
        .then(data=>setData(data))
    },[val1,val2,cantidad])


  return (
    <ContainerConvert>
      <div className="flex">
        <p>{val1}</p>
        <input type='number' onChange={onchange}/>
      </div>
      <button onClick={change}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrows-left-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" border='0' />
          <line x1="21" y1="17" x2="3" y2="17" />
          <path d="M6 10l-3 -3l3 -3" />
          <line x1="3" y1="7" x2="21" y2="7" />
          <path d="M18 20l3 -3l-3 -3" />
        </svg>
      </button>
      <div className="flex">
        <p>{val2}</p>
        <input type='number' name="input2"/>
      </div>
    </ContainerConvert>
  );
};

export default Convert;
