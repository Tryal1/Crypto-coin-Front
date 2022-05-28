import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home";
import "./App.css";
import Info from "./component/info";
import AccountSettings from "./component/user/AccountSettings";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={"/coin/:id"}>
            <Info />
          </Route>
          <Route path={"/user/:id"}>
            <AccountSettings />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
