import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';


export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});




//dispatch functions
export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
