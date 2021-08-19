
import './App.css';
import { Homepage } from './components/Homepage';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import {PokeApi} from './api/pokiApi';
import {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function getPokemonImageFromData(data){
  const defaultImage = 'https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/180?cb=20140520015336';
  const {sprites:{other}} = data;
  const officialArtwork = other['official-artwork'];
  return officialArtwork['front_default'];
}

function PokemonDetails(props){
  const {data} = props;

  if(!data){
    return null;
  }
  
  return (
    <div style={{backgroundColor:'lightblue'}}>
      {/* <h1>The pokemon you have choose {props.name}</h1> */}
      {data.name}
      {data.height}
      <img src={getPokemonImageFromData(data)} width={300} alt='pokeball'/>
    </div>
  )
}

function PokemonPage(){
  const params = useParams();
  const [isLaoding, setIsLaoding] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);
  const [isError, setIsError] = useState();

  useEffect(function(){
    PokeApi.getPokemoneByName(params.name)
      .then((data)=>{
        console.log(data)
        setIsLaoding(false);
        setPokemonData(data);
      }).
      catch(()=>{
        setIsLaoding(false);
        setIsError(true);
      })
  }, []);

  if(isLaoding){
    return (
      <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <CircularProgress color="secondary" />
      </div>
  )}
  
  if(isError){
    <h1>Network Error: try after some time</h1>
  }

  return (
    <>
      <h1>More data for {params.name}</h1>
      <PokemonDetails data={pokemonData}/>
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='md'>
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
