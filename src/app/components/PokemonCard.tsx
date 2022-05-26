import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPokemon } from "../store/slices/pokemonsSlice";
import { useEffect } from "react";
import { getPokemon } from "../store/slices/pokemonsSlice";
import { CircularProgress } from "@mui/material";

import { useNavigate } from "react-router-dom";
interface ICardPokemon {
  pokemon: string;
  showDetails?: boolean;
}

export function PokemonCard({
  pokemon,
  showDetails = false,
  ...props
}: ICardPokemon) {
  /*** HOOKS ****/
  const dispatch = useAppDispatch();

  const pokemonData = useAppSelector(selectPokemon(pokemon));

  const navigate = useNavigate();
  /*** EFFECTS ****/
  useEffect(() => {
    if (!pokemonData) dispatch(getPokemon(pokemon));
  }, [pokemon, dispatch, pokemonData]);

  return (
    <Paper>
      <Card>
        <CardHeader title={pokemon} />
        {pokemonData?.sprites ? (
          <>
            <CardMedia
              component="img"
              image={pokemonData.sprites.front_default}
              alt={pokemon}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Weight:{pokemonData.weight} Height:{pokemonData.weight}
              </Typography>
              <Typography variant="h6">
                Abilities:{" "}
                <small>
                  {pokemonData.abilities
                    .map((ab: any) => `${ab.ability.name}`)
                    .join(", ")}
                </small>
              </Typography>
            </CardContent>
          </>
        ) : (
          <CircularProgress />
        )}
        <CardActions>
          {showDetails ? null /** TODO: show more details */ : (
            <Button size="small" onClick={() => navigate(pokemon)}>
              Details
            </Button>
          )}
        </CardActions>
      </Card>
    </Paper>
  );
}
