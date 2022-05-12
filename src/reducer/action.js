//Coins
export const coinsList = (divisa) => dispatch =>{
    if(divisa === ''){
        divisa = 'usd'
    }
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${divisa}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
    .then( response => response.json())
    .then(data =>
        dispatch({
            type: "GET_CRYPTO",
            payload: data
        }))
    .catch(err => console.log(err))
}
export const searchCoin = (id) => dispatch =>{
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: "GET_INFO",
            payload: data
        }))
        .catch(err => console.log(err))
}


export const filtroCrypto = (payload) => {  
    return {
        type:"GET_FILTER",
        payload:payload
    }
}


//Divisas
export const Divisas = () => dispatch =>{
    fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: "GET_DIVISA",
            payload: data
        }))
        .catch(err => console.log(err))
}

export const SetDivisa = (payload) => {  
    return {
        type:"SET_DIVISA",
        payload:payload
    }
}

//Grafico
export const OHLC = (coin,currency,day) => dispatch =>{
    fetch(`https://api.coingecko.com/api/v3/coins/${coin}/ohlc?vs_currency=${currency}&days=${day}`)
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: "GET_OHLC",
            payload: data
        }))
        .catch(err => console.log(err))
}
//Back

export const loginUser = (user) => dispatch =>{
    fetch('http://localhost:4000/auth/login',{
        method:"POST",
        body:JSON.stringify({email:user.email,password:user.password}),
        headers:{'Content-Type':'application/json'}
    })
    .then(response =>response.json())
    .then(data =>
        dispatch({
            type:'SET_USER',
            payload: data
        }))
        .then(data => window.localStorage.setItem('x-token',data.payload.token))
        .catch(err =>console.log(err))
}