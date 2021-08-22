import {PokeApi} from '../api/pokiApi';
import {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';


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
      <div style={{backgroundColor:'lightblue',justifyContent:'center'}}>
        {/* <h1>The pokemon you have choose {props.name}</h1> */}
        {data.name}
        {data.height}
        <img src={getPokemonImageFromData(data)} width={300} alt={data.name}/>
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
          setIsLaoding(false);  // loading indicator will hide after data has been fetched.
          setPokemonData(data); // it set the whole data of the pokemon.
        }).
        catch(()=>{
          setIsLaoding(false);
          setIsError(true);
        })
    }, []);
  
    // it just show the loading indicator untill data not came.
    if(isLaoding){
      return (
        <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <CircularProgress color="secondary" />
        </div>
    )}
    
    // if there is any erroe then this will run.
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


  export default PokemonPage;