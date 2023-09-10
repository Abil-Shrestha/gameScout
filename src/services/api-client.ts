import axios, { RawAxiosRequestConfig } from 'axios';

export interface FetchResponse<T>{
    count:number;
    next:string | null;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:import.meta.env.VITE_apiKey,
    }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = (config: RawAxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res=>res.data);
    }
}

export default APIClient;
