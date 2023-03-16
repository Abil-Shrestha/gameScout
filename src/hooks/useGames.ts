import useData from './useData';
import { Genre } from "../hooks/useGenres";
import { GameQuery } from './../App';

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform: Platform} [];
    metacritic:number;
}


const useGames = (gameQuery : GameQuery) => 
useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,}
    }, 
        [gameQuery]);

export default useGames;