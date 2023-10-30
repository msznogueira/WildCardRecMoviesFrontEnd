import axios from "axios"

const moviesAPI = axios.create({baseURL: "http://localhost:8000/movies/"})


async function getMovies() {
    const response = await moviesAPI.get("")
    return response.data
}

async function getSuggestions(searchTerm) {
    const movies = await getMovies()
    return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm))
}

export {
    getMovies,
    getSuggestions
}