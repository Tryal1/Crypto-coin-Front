import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetDivisa } from "../reducer/action";
import HamburgerBar from "./hamburgerbar";
import FormLogin from "./login";
import Register from "./register";
import { Barra, BarraContainer, DropDown, ImageBar } from "./styled";

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const [img, setimg] = useState(true);
  const [darkActive, setDarkActive] = useState(true);

  const dispatch = useDispatch();
  const coins = useSelector((e) => e.allCoins);
  const alldivisas = useSelector((e) => e.alldivisas);

  const avtiveSearch = useRef();
  const activo = useRef();

  const update = (coin) => {
    setSearch(coin);
    setDisplay(false);
  };
  const handleType = (e) => {
    dispatch(SetDivisa(e));
  };
  const ActiveDark = () => {
    document.body.classList.toggle("dark-mode");
    setDarkActive(!darkActive);
  };

  const lateralsalir = () => {
    activo.current?.classList.toggle("active");
    setimg(!img);
  };

  const searchLupa = () => {
    avtiveSearch.current.classList.toggle("active");
  };

  return (
    <BarraContainer>
      <Barra>
        <div className="barraIzquierda">
          <div className="toggle-btn" onClick={lateralsalir}>
            <ImageBar src="hamburge.png" alt="Logo Fazt" className="logo" />
          </div>
          <h1>Crypto Coin</h1>
          <div>
            <select onClick={(e) => handleType(e.target.value)}>
              <option value="usd">USD</option>
              {alldivisas
                ? alldivisas.map((alldivisas) => (
                    <option key={alldivisas} value={alldivisas}>
                      {alldivisas.toUpperCase()}
                    </option>
                  ))
                : null}
            </select>
          </div>
        </div>
        <div className="barraDerecha">
          <FormLogin />
          <Register />
          <div>
            {darkActive ? (
              <img src="luna.png" onClick={ActiveDark} />
            ) : (
              <img src="sol.png" onClick={ActiveDark} />
            )}
          </div>
          <DropDown>
            <img src="lupa.png" onClick={searchLupa} />
            <div className="dropMenu" ref={avtiveSearch}>
              <div className="dropBar">
                <div>
                  <img src="lupaN.png" />
                  <input
                    id="auto"
                    onClick={() => setDisplay(!display)}
                    placeholder="Search Coin"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  {display && (
                    <div className="container">
                      {coins
                        .filter((coins) =>
                          coins.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        )
                        .map((value, i) => {
                          return (
                            <div
                              onClick={() => update(value.name)}
                              key={i}
                              tabIndex="0"
                              className="option"
                            >
                              <Link to={`/${value.id}`}>
                                <img src={value.image} alt="Crypto" />
                                <span>{value.name}</span>
                              </Link>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
                <button type="submit">Search</button>
              </div>
            </div>
          </DropDown>
          <HamburgerBar activo={activo} />
        </div>
      </Barra>
    </BarraContainer>
  );
};

export default SearchBar;

{
  /* <div className="DivEnd">
          <input
            id="auto"
            onClick={() => setDisplay(!display)}
            placeholder="Type to search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {display && (
            <div className="container">
              {coins
                .filter((coins) =>
                  coins.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((value, i) => {
                  return (
                    <div
                      onClick={() => update(value.name)}
                      key={i}
                      tabIndex="0"
                      className="option"
                    >
                      <Link to={`/${value.id}`}>
                        <img src={value.image} alt="Crypto" />
                        <span>{value.name}</span>
                      </Link>
                    </div>
                  );
                })}
            </div>
          )}
        </div> */
}
