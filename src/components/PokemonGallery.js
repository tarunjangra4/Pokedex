import {Link} from 'react-router-dom'
import sampleSize from 'lodash/sampleSize';
import {pokemons} from './pokemonList'

function GalleryItem(props){
    const {children} = props;
    return(
      <div style={{width:'30%', height:'200px', backgroundColor:'red', margin:'5px'}}>
        {children}
      </div>
    )
  }
  
  
  function PokemonGallery(){
    const randomPokemons = sampleSize(pokemons,9);
    console.log(randomPokemons);
    return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {randomPokemons.map(pokemon =>{
          const {name} = pokemon;
          return <GalleryItem key={name}> <Link to={'/pokemon/'+ name}>{name}</Link> </GalleryItem>
        })}
      </div>
    )
  }

export default PokemonGallery;