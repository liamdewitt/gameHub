import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '654aeebbf33141c0910b26325ac47013'
    }
})