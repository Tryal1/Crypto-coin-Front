import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryCoin, SetCategory } from "../reducer/action";
import { ButtonFiltro, FiltrosContainer } from "./styled";

const Filtros = () => {
  const [catActual, setCatActual] = useState('All Category')
  const Category = useSelector((e) => e.category);
  const dispatch = useDispatch()
  
  const activo = useRef();

  const active = () => {
    activo.current?.classList?.toggle("active");
  };

  const category = (e) =>{
    setCatActual(e.name)
    dispatch(SetCategory(e.category_id))
  }

  useEffect(() => {
    dispatch(categoryCoin());
  }, [dispatch]);

  if(!catActual){
    setCatActual('All Category')
  }

  return (
    <FiltrosContainer>
      <div className="ulContainer">
        <ButtonFiltro onClick={active}>{catActual}</ButtonFiltro>
        <div>
          <ul className="ulFiltros" ref={activo}>
            <li onClick={()=>category('')}>All Category</li>
            {Category.map((e) => (
              <li onClick={()=>category(e)} >{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </FiltrosContainer>
  );
};

export default Filtros;
