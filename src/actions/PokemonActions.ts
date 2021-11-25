import Axios from 'axios';
import { Dispatch } from 'redux';
import { PokemonDispatchType, POKEMON_SUCESS, POKEMON_FAIL } from './PokemonActionTypes';

export const fetchPokemonData = (pokemonName: string) => async (dispatch: Dispatch<PokemonDispatchType>) => {
    try {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = res.data;

        dispatch({
            type: POKEMON_SUCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: POKEMON_FAIL,
        });
    }
};
