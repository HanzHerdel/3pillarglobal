
import { useParams } from "react-router-dom";
import { PokemonCard } from './PokemonCard';

  
  export function PokemonDetails() {
    /*** HOOKS ****/
    const { pokemon } = useParams();
    console.log('pokemon: ', pokemon);
    return (
      <PokemonCard pokemon={pokemon||""} showDetails={true}/>
    );
  }
  