//Coins
export const coinsList =
  (divisa, cat = "", limit = 100, offset = 1) =>
  (dispatch) => {
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

//Back user

export const loginUser = (user) => async (dispatch) => {
  const res = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: user.email, password: user.password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();

  if (data.token) {
    window.localStorage.setItem("xtoken", data.token);
    dispatch({
      type: "SET_USER",
      payload: data,
    });
  }
  return data;
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
  return data;
};

export const getUser = async (uid) => {
  const res = await fetch(`http://localhost:4000/usuarios/${uid}`);
  const data = await res.json();
  return data;
};

export const actualizarUsuario = async (user, id) => {
  const res = await fetch(`http://localhost:4000/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name: user.name, password: user.password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

// Back my coins

export const getMyCoins = async (uid) => {
  const res = await fetch(`http://localhost:4000/mycoins`);
  const data = await res.json();
  const newData = [];
  data.coins.forEach((data) => {
    if (data.usuario._id === uid) {
      newData.push(data);
    }
  });
  return newData;
};

export const crearMyCoins =  (name, amount, price, usuario) => {
  fetch("http://localhost:4000/mycoins", {
    method: "POST",
    body: JSON.stringify({
      name,
      coin:
        {
          amount : Number(amount),
          price: Number(price)
        },
      usuario,
    }),
    headers: {
      "Content-Type": "application/json",
      xtoken: localStorage.getItem("xtoken"),
    },
  })
  .then((response) => response.json())
  .then((data) =>{return data})
};

export const modifMyCoins =  (data, amount, usuario) => {
  fetch(`http://localhost:4000/mycoins/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({
      name:data.name,
      coin:
        {
          amount : Number(amount),
          price: Number(data.avg)
        },
      usuario,
    }),
    headers: {
      "Content-Type": "application/json",
      xtoken: localStorage.getItem("xtoken"),
    },
  })
  .then((response) => response.json())
  .then((data) =>{return data})
};

export const myCoinsData = async (name) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
  const data = await res.json();
  return data;
};


export const setMycoins = (payload) => (dispatch) =>{
  dispatch({
    type: "SET_MYCOINS",
    payload: payload,
  })
};