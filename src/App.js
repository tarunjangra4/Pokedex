import './App.css';
import { Homepage } from './pages/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import { Header } from './pages/Header';
import PokemonPage from './pages/PokemonPage';



function App() {
  return (
    <BrowserRouter>   
      <Container maxWidth='md'>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route exact path='/pokemon/:name'>
            <PokemonPage/>
          </Route>
          <Route>
            <h1>Error 404: Page not Found</h1>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
