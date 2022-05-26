import racesSplice, {PokemonsState } from './pokemonsSlice';
import { EStatus } from '../../domain/interfaces';


describe('counter reducer', () => {
  const initialState: PokemonsState = {
    pokemons: [],
    status:EStatus.idle,
    pokemonsDict:null,
  };
  it('should handle initial state', () => {
    expect(racesSplice(undefined, { type: 'unknown' })).toEqual(initialState);
  });
});
