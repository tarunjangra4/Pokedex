
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { pokemons } from '../components/pokemonList';
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonGallery from '../components/PokemonGallery';
import { useState } from 'react';
import Favorite from '../components/Favorite';



function Btn(props){
    return(
        <Button variant="contained" color="primary" {...props}>
            Search
        </Button> 
    )
}


 function Homepage(){

     const [selection, setSelection] = useState(null);

    return (
        <>

            <h1>Search your favourite Pokemon</h1>
            <div style={{marginTop:'20px', display:'flex', }}>
                <Autocomplete
                    style={{width: 500, flexGrow:1, marginRight: 20}}
                    id="combo-box-demo"
                    options={pokemons}
                    // this shows the whole list on on select menu with first letter in uppercase
                    getOptionLabel={(option) => {
                        const {name} = option;
                        return name[0].toUpperCase() + name.substr(1);
                    }} 
                    renderInput={(params) => 
                        <TextField {...params} label="Combo box" variant="outlined" />
                    }
                    onChange={function(event,newselection){
                        // newSelection is an object which have two values name and image url.
                        setSelection(newselection);
                    }}
                />
                {/* <Link to={selection ? '/pokemon' + selection : '/'} component={Btn} // this is so bad it gives value 0. */}
                <Link to={selection  ? '/pokemon/' + selection.name  :  '/'} component={Btn}>  {/* '/' this is for home page.*/}
                    Search
                </Link>
                {/* <Button variant="contained" color="primary">
                    Search
                </Button> */}
            </div>
            <h1>Pokemons Gallery</h1>
            <Favorite/>
            <PokemonGallery/>
         </>
    )
 }
 
 export {Homepage}