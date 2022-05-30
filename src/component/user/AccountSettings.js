import { useSelector } from "react-redux";
import { AccountUserContainer } from "../styled";
import SearchBar from "../searchBar";

const AccountSettings = () => {
  const url = window.location.href;
  const id = url
    .split("/")
    .filter((x) => x)
    .pop();

  const user = useSelector((e) => e.user);
  console.log(user);

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <AccountUserContainer>
        <div className="flex">
          <img src="usuario.png" />
          <button>Edit Avatar</button>
        </div>
        <div className="flex">
          <input value={user.name.toUpperCase()} />
          <input disabled value={user.email} />
          <button>Save</button>
        </div>
        <div className="flex">
          <h3>Change password</h3>
          <button>Change</button>
        </div>
      </AccountUserContainer>
    </div>
  );
};

export default AccountSettings;
