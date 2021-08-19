

class PokeApi{
    constructor(){
        throw new Error('Cannot be constructed');
    }

    static getPokemoneByName(pokemonName){
       return   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,{mode:'cors'})
                .then((res)=> res.json());
    }
}

export {PokeApi};