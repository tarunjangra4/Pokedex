
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { pokemons } from './pokemonList';
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonGallery from './PokemonGallery';
import { useState } from 'react';


 function Homepage(){
     const [selection, setSelection] = useState(null);
    return (
        <>
                <div style={{ display:'flex', justifyContent:'center', backgroundColor:'black'}}>
                <h1 style={{color:'red'}}>POKEDEX</h1>
                </div>
                <h1>Search your favourite Pokemon</h1>
                <div style={{marginTop:'20px', display:'flex', }}>
                <Autocomplete
                    style={{width: 500, flexGrow:1, marginRight: 20}}
                    id="combo-box-demo"
                    options={pokemons}
                    getOptionLabel={(option) => {
                    const {name} = option;
                    return name[0].toUpperCase() + name.substr(1);
                    }} 
                    renderInput={(params) => 
                    <TextField {...params} label="Combo box" variant="outlined" />
                    }
                    onChange={function(event,newselection){
                        setSelection(newselection);
                    }}
                />
                <Link to={selection ? '/pokemon/' + selection.name : '/'}>
                    Search
                </Link>
                {/* <Button variant="contained" color="primary">
                    Search
                </Button> */}
                </div>
                <h1>Pokemons Gallery</h1>
                <PokemonGallery/>
         </>
    )
 }
 
 export {Homepage}