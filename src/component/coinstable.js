import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Td, TdColor,TrAnimation } from "./styled"


const CoinsTable = ({coins}) =>{
    const divisas = useSelector(e=>e.divisas)
    const FormatNumber = (number) =>{
        return new Intl.NumberFormat('en-US',{
            minimumFractionDigits: 2,
            maximumFractionDigits: 10,
            style: 'currency',
            currency: divisas,
        }).format(number)
    }
    return(
        <TrAnimation className="hoverT">
            <Td>{coins.market_cap_rank}</Td>
            <Td style={{paddingRight: '0'}}><div className="container">
                    <div>
                        <img className="img" src={coins.image}/>
                    </div>
                    <div className="contenido">
                    <Link to={`/${coins.id}`}>{coins.name}</Link>                       
                    </div>
                </div>
            </Td>
            <Td style={{paddingLeft: '0'}}>{coins.symbol}</Td>
            <Td>{FormatNumber(coins.current_price)}</Td>
            <TdColor porsen={coins.price_change_percentage_1h_in_currency}>{coins.price_change_percentage_1h_in_currency?.toFixed(2)}%</TdColor>
            <TdColor porsen={coins.price_change_percentage_24h}>{coins.price_change_percentage_24h?.toFixed(2)}%</TdColor>
            <TdColor porsen={coins.price_change_percentage_7d_in_currency}>{coins.price_change_percentage_7d_in_currency?.toFixed(2)}%</TdColor>
            <Td>{FormatNumber(coins.total_volume)}</Td>
            <Td>{FormatNumber(coins.market_cap)}</Td>
        </TrAnimation>
        
    )
}
export default CoinsTable