import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/VgDetail/Detail";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/videogames" component={CreateVideogame} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
