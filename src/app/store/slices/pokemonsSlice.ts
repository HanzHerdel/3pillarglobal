import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState /*AppThunk*/ } from "../store";
import { IPokemons, EStatus } from "../../domain/interfaces";
import { fetchPokemons, fetchPokemon } from "../../api/api";

const SLICE_NAME: string = "pokemons";

export interface PokemonsState {
  pokemons: Array<IPokemons> | [];
  pokemonsDict: any;
  status: EStatus.idle | EStatus.loading | EStatus.failed;
}

const initialState: PokemonsState = {
  pokemons: [],
  pokemonsDict:{},
  status: EStatus.idle,
};

export const getPokemons = createAsyncThunk(
  `${SLICE_NAME}/fetchPokemons`,
  async (page:number=1) => {
    const response = await fetchPokemons(page);
    return response.results;
  }
);

export const getPokemon = createAsyncThunk(
  `${SLICE_NAME}/fetchPokemon`,
  async (name: string) => {
    const response = await fetchPokemon(name);
    return response;
  }
);

export const pokemonsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPokemons: (state, action: PayloadAction<Array<IPokemons>>) => {
      state.pokemons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = EStatus.loading;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = EStatus.idle;
        state.pokemons = [...state.pokemons, ...action.payload];
      })
      .addCase(getPokemons.rejected, (state) => {
        state.status = EStatus.failed;
      })
/*       .addCase(getPokemon.pending, (state, action) => {
        state.pokemonsDict[action.meta.arg] = { status: EStatus.loading }
      }) */
      .addCase(getPokemon.fulfilled, (state, action) => {
        //state.pokemonsDict[action.meta.arg] = EStatus.idle;
        state.pokemonsDict[action.meta.arg] = action.payload;
      })
/*       .addCase(getPokemon.rejected, (state, action) => {
        state.pokemonsDict[action.meta.arg] = { status: EStatus.failed }
      }) */
  },
});

export const { setPokemons: setRazas } = pokemonsSlice.actions;

/**** SELECTIORS ****/

export const selectAllPokemons = (state: RootState): Array<IPokemons> => {
  return state.pokemons.pokemons;
};

export const selectPokemon =
  (name: string) =>
  (state: RootState): any =>
    state.pokemons.pokemonsDict[name];

export const selectStatus = (state: RootState): string => state.pokemons.status;

export default pokemonsSlice.reducer;
