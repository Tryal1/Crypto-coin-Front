import { useRef } from "react";
import { useSelector } from "react-redux";
import { ButtonFiltro, FiltrosContainer } from "./styled";

const Filtros = () => {
  const Category = useSelector((e) => e.category);

  const activo = useRef()

  const active = () => {
    activo.current?.classList.toggle("active");
  };

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
