// export const login = async (user) =>{
//     const res = await fetch('http://localhost:4000/auth/login',{
//             method:"POST",
//             body:JSON.stringify({email:user.email,password:user.password}),
//             headers:{'Content-Type':'application/json'}
//         })
//         const data = await res.json()
//         window.localStorage.setItem('x-token',data.token)
// }

// export const crearUsuario = async (user) =>{
//     const res = await fetch('http://localhost:4000/usuarios',{
//             method:"POST",
//             body:JSON.stringify({name:user.name,email:user.email,password:user.password,rol:user.rol}),
//             headers:{'Content-Type':'application/json'}
//         })
//         const data = await res.json()
//         return data
// }

export const actualizarUsuario = async (user, id) => {
  const res = await fetch(`http://localhost:4000/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name: user.name, password: user.password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const borrarUsuario = async (user) => {
  const res = await fetch(`http://localhost:4000/usuarios/${user.uid}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};
