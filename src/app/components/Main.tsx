import { CircularProgress, Grid } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPokemons, selectAllPokemons } from "../store/slices/pokemonsSlice";
import { useEffect, useRef, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { useIntersection } from "../useIntersection";

const GRID_PROPS = {
  xs: 12,
  sm: 6,
  md: 4,
};

export function Main() {
  /*** HOOKS ****/
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectAllPokemons);
  const [page, setPage] = useState(1);

  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref);
  /*** EFFECTS ****/
  useEffect(() => {
    dispatch(getPokemons(page));
  }, [/*page*/, dispatch]);

  // TODO: infinite scroll
  useEffect(() => {
    //setPage(()=>)
    console.log("visible: ", visible);
  }, [visible]);

  return (
    <Grid container spacing={2}>
      {!pokemons.length ? (
        <CircularProgress />
      ) : (
        pokemons.map((pokemon, idx) => {
         return idx === pokemons.length -2 ? (
              <Grid key={idx} ref={ref} item {...GRID_PROPS}>
                <PokemonCard pokemon={pokemon.name} />
              </Grid>
          ) :  (
            <Grid key={idx} item {...GRID_PROPS}>
              <PokemonCard pokemon={pokemon.name} />
            </Grid>
          )
        })
      )}
    </Grid>
  );
}
