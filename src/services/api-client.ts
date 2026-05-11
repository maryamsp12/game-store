import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '4fb92d75435e4d23965bf9dae39bc96d'
    }
})