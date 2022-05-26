import { IPokemons } from "../domain/interfaces";

const PAGE_LIMIT = 20;

export const fetchPokemons = async (
  page = 1
): Promise<{
  results: Array<IPokemons>;
  count: Number;
  next: string;
  previous: string;
}> => {
  try {
    const offSet = page * PAGE_LIMIT;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${offSet}`
    )
    const data= await response.json()
    return data;
  } catch (err: any) {
    console.log("err: ", err);
    return err;
  }
};

export const fetchPokemon = async (
  name:string
): Promise<{
  data:any;
}> => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
      )
    const data= await response.json()
    return data;
  } catch (err: any) {
    console.log("err: ", err);
    return err;
  }
};


