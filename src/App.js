import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './component/home'
import './App.css';
import Info from './component/info';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path={'/:id'}>
              <Info/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
