import genres from "../data/genres";
import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';

export interface Genre {
    id:number;
    name:string;
    image_background:string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres =()=> useQuery ({
    queryKey : ['genres'],
    queryFn:apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //for 1 day
    initialData: {count: genres.length, results: genres}
})

export default useGenres;