import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home";
import "./App.css";
import Info from "./component/info";
import AccountSettings from "./component/user/AccountSettings";
import Portfolio from "./component/user/portfolio";
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
          <Route path={"/portfolio"}>
            <Portfolio/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
