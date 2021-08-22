import {Link} from 'react-router-dom';
// import sampleSize from 'lodash/sampleSize';
import {pokemons} from './pokemonList'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import {  useState } from 'react';
// import {useEffect} from 'react';



// function getPokemonImage(name){
//   let response = fetch('https://pokeapi.co/api/v2/pokemon/' + name, {mode:'cors'})
//                 .then((res)=> res.json());
//     return response;
//               // console.log(response);
//                 // .then((data)=>data);
//                 // .then((result)=>result);

//                 // console.log("new data", newData);
//                 // const {sprites} = newData;
//                 // console.log("sprites",{sprites});
                
//   // const defaultImage = 'https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/180?cb=20140520015336';
//   // const {sprites:{other}} = newData;
//   // const officialArtwork = other['official-artwork'];
//   // return officialArtwork['front_default'];
// }


function GalleryItem(props){
    // it is use for changing the color of fav button
    const {children,name} = props;
    // const [imgSrc, setImgSrc] = useState("");

    // useEffect(function(){
    //   let result = getPokemonImage(name);
    //   setImgSrc(result);
    // },[])
    // // const imgSrc = getPokemonImage(name);
    // console.log("imag src",imgSrc);
    const [isInLocalStorage, setIsInLocalStorage] = useState(function(){
      const val = localStorage.getItem('pokemons');
      if(!val){
        return false;
      }
      const jsArray = JSON.parse(val);
      const set = new Set(jsArray);
      return set.has(name);
    });
    
  return(
      <div style={{
              display:'flex', 
              flexDirection:'column', 
              border:'1px solid red',
              boxShadow:'0 0 5px red',
              alignItems:'center', 
              justifyContent:'center',
              // height:'300px', 
              backgroundColor:'lightgreen', 
              margin:'15px',
              borderRadius:'10px',
              padding:'5px'}}>
      {/* // this children is contain whole link to the specific pokemon inside the grid */}
        <div style={{flexGrow: 1}}>  
          {children}  
        </div>  
        <img src='https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png'
              style={{height:'100px'}}
              alt="pokemon"
        />
        <Button onClick={function(){
                if(!isInLocalStorage){
                  setIsInLocalStorage(true);
                  const key = 'pokemons';
                  const val = localStorage.getItem(key);
                  if(val){
                    const arr = JSON.parse(val);
                    arr.push(name);
                    const stringifiedArray = JSON.stringify(arr);
                    localStorage.setItem(key, stringifiedArray);
                  } else{
                    const stringifiedArray = JSON.stringify([name]);
                    localStorage.setItem(key, stringifiedArray);
                  }
                }
              }} 
            variant="contained" 
            color={isInLocalStorage ? 'secondary' : 'primary'}
        >
          <FavoriteIcon/>
        </Button>
      </div>
    )
  }
  
  
  function PokemonGallery(){
    /* 
      it shows 9 random pokemon details in a 3 x 3 Grid. 
    */
    // const randomPokemons = sampleSize(pokemons,9);  
    /* this pokemon array is fetch data from the pokemonList.js file not from the api. */
    const randomPokemons = pokemons.slice(0, 9);
    console.log(randomPokemons);

    return (
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'1fr 1fr 1fr'}}>
        {randomPokemons.map(pokemon =>{
          const {name} = pokemon;   // get name and url from pokemon objects
          return  <GalleryItem key={name} name={name}>
          {/* this open the new page with single pokemon details after we click on the link present in the grid. */}
                    <Link to={'/pokemon/'+ name}> {name} </Link>    
                  </GalleryItem>
        })}
      </div>
    )
  }

export default PokemonGallery;