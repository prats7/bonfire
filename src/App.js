import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Cart} path='/cart' />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
