import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import LoginPage from './pages/login';
import Register from './pages/register';
import MyNavbar from "./componants/navbar";
import Details from './pages/details';
import Favorites from './pages/favorites';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/details/:id" component={Details} exact />
        <Route path="/favorites" component={Favorites} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
