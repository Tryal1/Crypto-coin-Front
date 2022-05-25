import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetDivisa } from "../reducer/action";
import FormLogin from "./login";
import Register from "./register";
import { Barra, BarraContainer, DropDown } from "./styled";

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const [darkActive, setDarkActive] = useState(true);

  const dispatch = useDispatch();
  const coins = useSelector((e) => e.allCoins);
  const alldivisas = useSelector((e) => e.alldivisas);

  const avtiveSearch = useRef();
  const leftActive = useRef();

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

  const leftBar = () => {
    leftActive.current?.classList.toggle("leftActive");
  };

  const searchLupa = () => {
    avtiveSearch.current.classList.toggle("active");
  };

  return (
    <BarraContainer>
      <Barra>
        <div className="barraIzquierda">
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
          <div className="toggle-btn" onClick={leftBar}>
            <img src="hamburge.png" alt="Logo Fazt" className="logo" />
          </div>
        </div>
        <div className="barraDerecha" ref={leftActive}>
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
