import { Chart as ChartJs, CategoryScale, LinearScale, PointElement,LineElement,Title,Tooltip,Legend,Filler} from "chart.js"
import { useEffect, useMemo } from "react";
import {Line} from "react-chartjs-2"
import { useDispatch, useSelector } from "react-redux";
import { OHLC } from "../reducer/action";

ChartJs.register(
    CategoryScale, 
    LinearScale, 
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const Graficos = ({coin,currency,day}) =>{
    const scores = []
    const labels = []
    const dispatch = useDispatch()
    const ohlc = useSelector(e=>e.ohlc)

    ohlc.map((e,i)=>{
        const unix = e[0]
        const date = new Date(unix)
        const DateFormat = date.getDate().toString() + '/' +date.getMonth().toString()
        labels[i]=DateFormat
        scores[i]=e[4]
    })

    const options= {
        fill: false,
        responsive: true,
        plugins:{
            legend:{
                display:false,
            },
        },
    };
    const data = {
        labels,
        datasets:[
            {
                label: "Price",
                data: scores,
                segment:{
                    borderColor: function(context){
                        if(context.p0.raw> context.p1.raw){
                            return context.p1DataIndex = "red";
                        }else{
                            return context.p1DataIndex = "green";
                        }
                    }
                }
            },
        ],
    }

    useEffect(()=>{
        dispatch(OHLC(coin,currency,day))
    },[dispatch,coin,currency,day])

    return <Line data={data} options={options}/>;
}

export default Graficos