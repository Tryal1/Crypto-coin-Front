//Coins
export const coinsList =
  (divisa, cat = "", limit = 100, offset = 1) =>
  (dispatch) => {
    console.log(cat);
    let category = "";
    if (divisa === "") {
      divisa = "usd";
    }
    if (cat !== "") {
      category = `category=${cat}&`;
    }

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${divisa}&${category}order=market_cap_desc&per_page=${limit}&page=${offset}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "GET_CRYPTO",
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  };
export const searchCoin = (id) => (dispatch) => {
  fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "GET_INFO",
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};

export const filtroCrypto = (payload) => {
  return {
    type: "GET_FILTER",
    payload: payload,
  };
};

export const categoryCoin = () => (dispatch) => {
  fetch(`https://api.coingecko.com/api/v3/coins/categories/list`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "GET_CATEGORY",
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};

export const SetCategory = (payload) => {
  return {
    type: "GET_FILTERCATEGORY",
    payload: payload,
  };
};

//Divisas
export const Divisas = () => (dispatch) => {
  fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "GET_DIVISA",
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};

export const SetDivisa = (payload) => {
  return {
    type: "SET_DIVISA",
    payload: payload,
  };
};

//Grafico
export const OHLC = (coin, currency, day) => (dispatch) => {
  fetch(
    `https://api.coingecko.com/api/v3/coins/${coin}/ohlc?vs_currency=${currency}&days=${day}`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "GET_OHLC",
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};
//Back

export const loginUser = (user) => (dispatch) => {
  fetch("http://localhost:4000/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: user.email, password: user.password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "SET_USER",
        payload: data,
      })
    )
    .then((data) => window.localStorage.setItem("xtoken", data.payload.token))
    .catch((err) => console.log(err));
};

export const registerUser = async (user) => {
  const res = await fetch("http://localhost:4000/usuarios", {
    method: "POST",
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
      rol: user.rol,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data.errors)
  return data;
};

export const getUser = async (uid) => {
  const res = await fetch(`http://localhost:4000/usuarios/${uid}`);
  const data = await res.json();
  return data;
};

export const actualizarUsuario = async (user, id) => {
  console.log(user.name, user.password)
  console.log(user)
  const res = await fetch(`http://localhost:4000/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name: user.name, password: user.password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};