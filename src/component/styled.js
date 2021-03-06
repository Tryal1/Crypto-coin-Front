import styled from "styled-components";

//Contenedor 95
export const Centrar = styled.div`
  margin: 0;
  padding: 0;
`;

//Table
export const Table = styled.table`
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  font-weight: 700;
`;

export const Td = styled.td`
  padding: 1.3rem;
  text-align: start;
  .container {
    margin: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .contenido {
    font-weight: 700;
    span {
      font-weight: 400;
    }
  }
  img {
    width: 20px;
    height: 20px;
  }
  *{
    text-decoration:none;
    color:#212529;
  }
`;
export const TdColor = styled(Td)`
  color: ${(props) => (props.porsen >= 0 ? "#26E300" : "#E70000")};
`;
export const Tr = styled.tr`
  border-bottom: 1px solid #dee1e5;
  border-top: 1px solid #dee1e5;
`;
export const TrAnimation = styled(Tr)`
  :hover {
    -webkit-transition: box-shadow 0.5s 0s ease-out;
    -moz-transition: box-shadow 0.5s 0s ease-out;
    -o-transition: box-shadow 0.5s 0s ease-out;
    transition: box-shadow 0.5s 0s ease-out;
    background-color: #cfcfcf;
    box-shadow: -8px 6px 10px 1px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: -8px 6px 10px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -8px 6px 10px 1px rgba(0, 0, 0, 0.5);
  }
`;

//Info
export const Contenedor = styled.div`
  width: 70%;
  gap: 2rem;
  @media (max-width: 1375px) {
    width: 90%;
  }
  margin: auto;
`;

export const ContenedorInfo = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .rank {
    background-color: #808a9d;
    width: 70px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    color: #ecece;
  }
`;

export const DivContainerInfo = styled.div`
  h2 {
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
  }
  .end {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    @media (max-width: 768px) {
      margin-top: 30px;
      align-items: start;
    }
  }
  .priceCrypto {
    text-align: end;
    font-size: 14px;
    @media (max-width: 768px) {
      text-align: start;
      margin-bottom: 30px;
    }
    p {
      margin: 10px 0;
    }
    span {
      color: ${(props) => (props.porsen >= 0 ? "#26E300" : "#E70000")};
    }
  }
`;
//${props =>props.porsen >=0 ? '#ea3943' : '#E70000'};
export const PorcenSpan = styled.span`
  color: #ececec;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 0 14px;
  background-color: ${(props) => (props.porsen >= 0 ? "#26E300" : "#E70000")};
  margin: 0;
  margin-left: 15px;
  padding: 3px 13px;
`;
export const SimboloSpan = styled.span`
  color: #58667e;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 0 14px;
`;
export const MarketInfo = styled.div`
  display: grid;
  margin-top: 40px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    display: block;
  }
`;
export const CardDataPrice = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  width: 220px;
  height: 150px;
  margin: auto;
  h3 {
    color: #9aa2b1;
    margin-top: 0;
  }
  p {
    margin-top: 0;
    color: #414542;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid black;
    justify-content: center;
    align-items: center;
  }
`;
export const Supply = styled.div`
  display: flex;
  margin-top: 40px;
  max-width: 95%;
  flex-direction: column;
  .infoSupp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #9aa2b1;
  }
  p {
    color: #9aa2b1;
  }
  span {
    color: #414542;
    font-weight: 700;
  }
`;

//Info grafico

export const ContenedorGrafico = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

//SearchBar

export const BarraContainer = styled.div`
  background-color: rgba(32, 186, 78, 0.85);
`;

export const Barra = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;

  img {
    width: 16px;
    heigth: 16px;
    cursor: pointer;
  }

  .barraDerecha,
  .barraIzquierda {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .barraDerecha {
    justify-content: end;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .leftActive {
    display: flex;
  }

  .barraIzquierda {
    option,
    select {
    }
    h1 {
      color: #fff;
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }
    select {
      border: none;
      background: none;
      outline: none;
      color: #fff;
    }
    option {
      color: #000;
    }
    a {
      text-decoration: none;
    }
  }
  .toggle-btn {
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .toggle-btn {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const DropDown = styled.div`
  position: relative;
  .dropMenu {
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 157%;
    min-width: 310px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-out;
  }
  .active {
    opacity: 1;
    visibility: visible;
  }
  .dropBar {
    display: flex;
    justify-content: space-between;
    * {
      border: none;
    }
    button {
      background-color: rgba(32, 186, 78, 0.85);
      color: #fff;
      padding: 6px 12px;
      font-size: 14px;
    }
    input {
      outline: none;
      padding: 6px 12px;
    }
  }
  button{
    heigth:36px;
  }
`;

// LOGIN

export const LogIn = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  :hover {
    color: #fff;
  }
  cursor: pointer;
`;

// Filtros

export const FiltrosContainer = styled.div`
  width: 70%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  .ulContainer {
    position: relative;
  }

  .ulFiltros {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: absolute;
    padding: 0;
    left: 0;
    top: calc(100% + 0.25rem);
    background-color: #fff;
    border: 1px solid #d9dde2;
    border-radius: 5px;

    opacity: 0;
    visibility: hidden;

    transition: all 0.2s linear;

    li {
      margin: 10px;
      cursor: pointer;
    }
  }

  .active {
    opacity: 1;
    visibility: visible;
  }
`;

export const ButtonFiltro = styled.button`
  border: 1px solid #d9dde2;
  border-radius: 15px;
  padding: 2px 15px;
`;

export const ContainerConvert = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

export const Convert = styled.div`
  display: flex;

  select {
    margin: 0;
    padding: 10px;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid #000;
  }
  input {
    padding: 10px;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    outline: none;
  }
`;

// Account

export const AcountContainer = styled.div`
  position: relative;

  .account {
    background-color: #fff;
    position: absolute;
    left: -150px;
    top: 157%;
    width: 250px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-out;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    gap: 1rem;
    opacity: 0;
    visibility: hidden;
  }

  .accountUser {
    gap: 2rem;
    width: 100%;
    justify-content: space-between;
    img {
      width: 60px;
      heigth: 60px;
    }
    h3 {
      font-size: 15px;
    }
  }

  .accountEnlaces {
    width: 100%;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    a {
      text-decoration: none;
      color: #000;
      font-size: 14px;
    }
  }

  .active {
    opacity: 1;
    visibility: visible;
  }
`;

// acoutn user

export const AccountUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 95%;
  margin: 20px auto;
  img {
    width: 100px;
    height: 100px;
  }

  .flexR,
  flexC {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .flexR {
    flex-direction: row;
    justify-content: space-evenly;
  }
  .flexC {
    display: flex;
    align-items: start;
    gap: 2rem;
    flex-direction: column;
  }

  .btn-verde {
    background-color: #2edd2e;
  }
  .btn-red {
    background-color: #ff4f4f;
  }

  .inputAcc {
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    padding: 0 10px;
    width: 240px;
  }
`;

// error msj

export const ErrorMsj = styled.div`
  color: #ff0000;
  font-size: 12px;
  text-align: start;
  margin-left: 20px;
`;

// PortFolio

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 30px;

  .balance {
    padding: 30px 0;
    h1 {
      font-size: 32px;
      font-weight: 700;
    }
  }
`;

export const AddnewCoin = styled.div`
  .add-button {
    background-color: #3861fb;
    border: none;
    border-radius: 10px;
    padding: 5px 15px;
    color: #fff;
    font-weight: 500;
  }

  .contenido-Add {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
  .add-img {
    width: 20px;
    height: 20px;
  }
  .add-input {
    border: 1px solid #c5c5c5;
    border-radius: 8px;
    padding: 0 25px;
    width: 100%;
    outline: none;
  }
  .add-ul {
    height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  .add-button-list {
    text-align: start;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    width: 100%;
  }

  .add-titulo {
    margin-top: 5px;
    font-size: 27px;
    font-weight: bold;
  }

  .add-search {
    position: relative;
    display: flex;
    width: 100%;
    padding-top: 20px;
  }

  .add-svg {
    position: absolute;
    top: 40%;
    left: 5px;
  }

  .contenido-transaction {
    display: flex;
    gap: 2rem;
    padding: 30px 0;
    p {
      margin-bottom: 8px;
      line-height: 1.5;
      color: rgb(0, 0, 0);
      font-weight: 500;
      font-size: 14px;
    }
  }

  .input-transaction {
    border: 1px solid #c5c5c5;
    border-radius: 8px;
    outline: none;
    padding: 8px 13px;
    width: 100%;
  }

  .transaction-spnt {
    padding-bottom: 10px;
    p {
      margin-bottom: 8px;
      line-height: 1.5;
      color: rgb(0, 0, 0);
      font-weight: 500;
      font-size: 14px;
    }
    h3 {
      font-size: 32px;
      font-weight: 700;
    }
  }

  .transaction-btn {
    button {
      width: 100%;
    }
    padding-bottom: 20px;
  }
`;