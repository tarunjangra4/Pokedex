import {useState} from 'react';

function Favorite(){
    const [favs, setFavs] = useState(function(){
        const value = localStorage.getItem('pokemons');
        if(value){
            return JSON.parse(value);
        }
        return [];
    });

    return favs.length ? (
            <div>
            <h2>Your Favorite Pokemons</h2>
            {favs.map((pokemon)=>{
                return <div> {pokemon} </div>
            })}
        </div>
        ) : null;
}

export default Favorite;