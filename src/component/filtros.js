import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryCoin, SetCategory } from "../reducer/action";
import { ButtonFiltro, FiltrosContainer } from "./styled";

const Filtros = () => {
  const Category = useSelector((e) => e.category);
  const dispatch = useDispatch()

  const activo = useRef();

  const active = () => {
    activo.current?.classList.toggle("active");
  };

  const category = (e) =>{
    dispatch(SetCategory(e))
  }

  useEffect(() => {
    dispatch(categoryCoin());
  }, [dispatch]);

  return (
    <FiltrosContainer>
      <div className="ulContainer">
        <ButtonFiltro onClick={active}>All Category</ButtonFiltro>
        <div>
          <ul className="ulFiltros" ref={activo}>
            {Category.map((e) => (
              <li onClick={()=>category(e.category_id)} >{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </FiltrosContainer>
  );
};

export default Filtros;
