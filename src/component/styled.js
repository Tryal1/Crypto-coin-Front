import styled from "styled-components";

//Contenedor 95
export const Centrar = styled.div`
    width:95%;
    margin: auto;
`

//Table
export const Table = styled.table`
    margin: 0 auto;
    text-align:center;
    border-collapse: collapse;
`

export const Thead = styled.thead`
    font-weight: 700;
`

export const Td = styled.td`
   padding: 1.3rem;
   .container{
       margin: auto;
       display:flex;
       align-items:center;
       gap: .5rem;
       img{
        width: 20px;
        height: 20px
       }
    }
   .contenido{
        font-weight: 700;
        span{
            font-weight: 400;
        }
   }
 
`
export const TdColor = styled(Td)`
    color:${props => props.porsen>=0 ? '#26E300' : '#E70000'}
`
export const Tr = styled.tr`
    border-bottom: 1px solid #dee1e5;
    border-top: 1px solid #dee1e5;
    
`
export const TrAnimation = styled(Tr)`
    :hover{
        -webkit-transition: box-shadow 0.5s 0s ease-out;
        -moz-transition: box-shadow 0.5s 0s ease-out;
        -o-transition: box-shadow 0.5s 0s ease-out;
        transition: box-shadow 0.5s 0s ease-out;
        background-color: #CFCFCF;
        box-shadow: -8px 6px 10px 1px rgba(0,0,0,0.5);
        -webkit-box-shadow: -8px 6px 10px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: -8px 6px 10px 1px rgba(0,0,0,0.5);
    }
`

//Info
export const Contenedor = styled.div`
    width:70%;
    gap: 2rem;
    @media(max-width: 1375px){
        width:90%;
    }
    margin:auto;
`

export const ContenedorInfo = styled.div`
    margin-top:15px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    @media(max-width: 768px){
        grid-template-columns: repeat(1,1fr)
    }
    .rank{
        background-color: #808a9d;
        width: 70px;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        border-radius: 4px;
        color: #ecece
    }
`

export const DivContainerInfo = styled.div`
    h2{
        display: flex;
        align-items: center;
        font-size: 32px;
        font-weight: 700;
       margin:0;
       
    }
    .end{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: start;
        @media(max-width: 768px){
            margin-top: 30px;
            align-items:start;
        }
        
    }
    .priceCrypto{
        text-align:end;
        font-size: 14px;
        @media(max-width: 768px){
            text-align:start;
            margin-bottom:30px;
        }
        p{
            margin: 10px 0;
        }
        span{
            color:${props =>props.porsen >=0 ? '#26E300' : '#E70000'};
        }
    }
`
//${props =>props.porsen >=0 ? '#ea3943' : '#E70000'};
export const PorcenSpan = styled.span`
    color: #ececec;;
    border-radius: 4px;
    font-size: 17px;
    font-weight: 600;
    margin: 10px 0 0 14px;
    background-color: ${props =>props.porsen >=0 ? '#26E300' : '#E70000'};
    margin: 0;
    margin-left:15px;
    padding: 3px 13px;
`
export const SimboloSpan = styled.span`
    color: #58667e;
    border-radius: 4px;
    font-size: 17px;
    font-weight: 600;
    margin: 10px 0 0 14px
`
export const MarketInfo = styled.div`
    display: grid;
    margin-top: 40px;
    grid-template-columns: repeat(3,1fr);
`
export const CardDataPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    border-right: 1px solid black;
    width: 220px;
    height: 150px;
    h3{
        color:#9aa2b1;
        margin-top:0;
    }
    p{
        margin-top:0;
        color: #414542;
        font-weight: 700;
        
    }
`
export const Supply = styled.div`
    display:flex;
    margin-top: 40px;
    max-width:95%;
    flex-direction:column;
    .infoSupp{
        display:flex;
        justify-content:space-between;
        align-items: center;
        border-bottom: 2px solid #9aa2b1;
    }
    p{
        color:#9aa2b1;
    }
    span{
        color: #414542;
        font-weight: 700;
    }
    
`


//Info grafico

export const ContenedorGrafico = styled.div`
    margin-top:100px;
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 2rem;
    @media(max-width: 768px){
        grid-template-columns: repeat(1,1fr);
        
    }
`

//SearchBar

export const Barra = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width:65%;
    margin:auto;
    .DivEnd{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .container {
        position: absolute;
        top:8%;
        border-width: 0px 1px 1px 1px;
        border-style: solid;
        border-color: goldenrod;
        background-color: whitesmoke;
        width: 520px;
        max-height: 200px;
        overflow-y:scroll;
    }
    .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 500px;
        padding: 5px;
        
    }
    span {
        font-size: 17px;
        font-weight: 700;
    }
    img{
        width: 20px;
        height: 20px
       }
    input{
        padding: 10px;
        height: 20px;
        width: 500px;
        border: 1px solid purple;
        margin: 10px;
        font-size: 18px;
        text-transform: capitalize;
    }
`

//Hamburguer bar
export const DivBar = styled.div`
    position: fixed;
    width: 300px;
    height: 100%;
    background: #A7A7A7;
    top:0px;
    left: -300px;
    transition: all 500ms linear;
    ul,li {
        color: rgba(230, 230, 230, .9);
        list-style: none;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(100, 100, 100, .3);
        text-align: center;
    }
    .toggle-btn {
        position: absolute;
        left: 230px;
        top: 20px;
        cursor: pointer;
    }
    .toggle-btn span {
        display: block;
        width: 40px;
        text-align: center;
        font-size: 30px;
        border: 3px solid #000;
    }
    &.active{
        top:0px;
        left:0px;
    }
`

export const ImageBar = styled.img`
    
    display: block;
    margin: 0 auto; 
    
    :hover{
        cursor:pointer;
    }
`