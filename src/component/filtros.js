import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryCoin } from "../reducer/action";
import { ButtonFiltro, FiltrosContainer } from "./styled";

const Filtros = () => {
  const Category = useSelector((e) => e.category);
  const dispatch = useDispatch()

  const activo = useRef();

  const active = () => {
    activo.current?.classList.toggle("active");
  };

  useEffect(() => {
    dispatch(categoryCoin());
  }, [dispatch]);

  console.log(Category);
  return (
    <FiltrosContainer>
      <div className="ulContainer">
        <ButtonFiltro onClick={active}>All Category</ButtonFiltro>
        <div>
          <ul className="ulFiltros" ref={activo}>
            {Category.map((e) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </FiltrosContainer>
  );
};

export default Filtros;
