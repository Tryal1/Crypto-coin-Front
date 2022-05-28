import { useSelector } from "react-redux"

const AccountSettings = () =>{
    const url = window.location.href
    const id = url.split('/').filter(x=>x).pop()

    const user = useSelector(e=>e.user)
    console.log(user)

    return(
        <div>
            <input value={user.name.toUpperCase()}/>
            <input disabled value={user.email} />
        </div>
    )
}

export default AccountSettings