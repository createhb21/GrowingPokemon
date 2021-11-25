export const POKEMON_SUCESS = 'POKEMON_SUCESS';
export const POKEMON_FAIL = 'POKEMON_FAIL';

export type PokemonType = {
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
};

export type PokemonAbility = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

export type PokemonSprites = {
    front_default: string;
};

export interface pokemonFailDispatch {
    type: typeof POKEMON_FAIL;
}

export interface pokemonSucessDispatch {
    type: typeof POKEMON_SUCESS;
    payload: {
        abilities: PokemonAbility[];
        sprites: PokemonSprites;
    };
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSucessDispatch;
