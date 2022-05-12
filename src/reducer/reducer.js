var estado

const intialState = {
    allCoins: [],
    coins: [],
    divisas:'',
    alldivisas:[],
    info: [],
    ohlc:[],
    user:[],
}

const Reducer = (state = intialState, {type, payload}) =>{
    switch(type){
        case "SET_USER":
            const {estado,google,rol,...rest} = payload.usuario
            console.log(rest)
            return{
                ...state,
                user:rest
            }
        case "GET_CRYPTO":
            return{
                ...state,
                allCoins: payload,
                coins: payload,
            }
        case "GET_INFO":
            return{
                ...state,
                info: payload,
            }
        case "GET_DIVISA":
            return{
                ...state,
                alldivisas: payload,
            }
        case "GET_OHLC":
            return{
                ...state,
                ohlc: payload,
            }
        case "SET_DIVISA":
            if(payload === ''){
                payload = 'usd'
            }
            return{
                ...state,
                divisas: payload,
            }
        case "GET_FILTER":
            const coins = state.coins
            let filter = coins
            if(payload === '#'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.market_cap_rank>b.market_cap_rank){
                            return 1
                            }
                        if(b.market_cap_rank>a.market_cap_rank){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.market_cap_rank>b.market_cap_rank){
                            return -1
                            }
                        if(b.market_cap_rank>a.market_cap_rank){
                            return 1
                        }
                        return 0
                    })
                }
            }

            if(payload === 'Coins'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.name.toLowerCase()>b.name.toLowerCase()){
                            return 1
                         }
                         if(b.name.toLowerCase()>a.name.toLowerCase()){
                            return -1
                        }
                        return 0
                    })
                }else if(estado){
                    estado = !estado
                    filter = filter.sort((a,b)=>{
                        if(a.name.toLowerCase()>b.name.toLowerCase()){
                           return -1
                        }
                        if(b.name.toLowerCase()>a.name.toLowerCase()){
                           return 1
                        }
                        return 0
                     })
                }
            }
            if(payload === 'Price'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.current_price>b.current_price){
                            return 1
                            }
                        if(b.current_price>a.current_price){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.current_price>b.current_price){
                            return -1
                            }
                        if(b.current_price>a.current_price){
                            return 1
                        }
                        return 0
                    })
                }
            }
            if(payload === '1h'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.price_change_percentage_1h_in_currency>b.price_change_percentage_1h_in_currency){
                            return 1
                            }
                        if(b.price_change_percentage_1h_in_currency>a.price_change_percentage_1h_in_currency){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.price_change_percentage_1h_in_currency>b.price_change_percentage_1h_in_currency){
                            return -1
                            }
                        if(b.price_change_percentage_1h_in_currency>a.price_change_percentage_1h_in_currency){
                            return 1
                        }
                        return 0
                    })
                }
            }
            if(payload === '24h'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.price_change_percentage_24h>b.price_change_percentage_24h){
                            return 1
                            }
                        if(b.price_change_percentage_24h>a.price_change_percentage_24h){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.price_change_percentage_24h>b.price_change_percentage_24h){
                            return -1
                            }
                        if(b.price_change_percentage_24h>a.price_change_percentage_24h){
                            return 1
                        }
                        return 0
                    })
                }
            }
            if(payload === '7d'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.price_change_percentage_7d_in_currency>b.price_change_percentage_7d_in_currency){
                            return 1
                            }
                        if(b.price_change_percentage_7d_in_currency>a.price_change_percentage_7d_in_currency){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.price_change_percentage_7d_in_currency>b.price_change_percentage_7d_in_currency){
                            return -1
                            }
                        if(b.price_change_percentage_7d_in_currency>a.price_change_percentage_7d_in_currency){
                            return 1
                        }
                        return 0
                    })
                }
            }
            if(payload === '24h Volume'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.total_volume>b.total_volume){
                            return 1
                            }
                        if(b.total_volume>a.total_volume){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.total_volume>b.total_volume){
                            return -1
                            }
                        if(b.total_volume>a.total_volume){
                            return 1
                        }
                        return 0
                    })
                }
            }
            if(payload === 'Mkt Cap'){
                if(!estado){
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.market_cap>b.market_cap){
                            return 1
                            }
                        if(b.market_cap>a.market_cap){
                            return -1
                        }
                        return 0
                    })
                }else{
                    estado = !estado
                    filter =  filter.sort((a,b)=>{
                        if(a.market_cap>b.market_cap){
                            return -1
                            }
                        if(b.market_cap>a.market_cap){
                            return 1
                        }
                        return 0
                    })
                }
            }
            return{
                ...state,
                coins: filter,
            }
        default: 
            return{
                ...state
            }
    }
}

export default Reducer