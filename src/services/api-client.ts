import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '4fb92d75435e4d23965bf9dae39bc96d'
    }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>{
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then((res) => res.data);
  }
}

export default APIClient;