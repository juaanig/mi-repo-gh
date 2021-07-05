import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Registro from "./page/Registro"
import Home from "./page/home"
import Menu from "./components/Menu/menu"
import Login from "./Login"
import Detalle from "./components/Detalle"
import {Container} from 'react-bootstrap'
import GlobalState from "./context/GlobalState"
import EcommerceContext from './context/EcommerceContext';

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
      <Menu />
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/Alta" component={Registro} exact />
          <Route path="/sesion" component={Login} exact />
          <Route path="/producto/:id" component={Detalle} exact />
        </Container>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
