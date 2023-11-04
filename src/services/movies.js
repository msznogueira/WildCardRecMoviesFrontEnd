import axios from "axios"

const tmdb_key = process.env.REACT_APP_TMDB_API_KEY

const moviesAPI = axios.create({baseURL: "http://localhost:8000/movies/"})
const tmdbAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: tmdb_key,
    }
})

async function getMovies() {
    const response = await moviesAPI.get("")
    return response.data
}

async function getSuggestions(searchTerm) {
    // const movies = await getMovies()
    const movies = await tmdbAPI.get("/search/movie", {
        params: {
            query: encodeURIComponent(searchTerm)
        }
    })
    console.log(movies)
    return movies.data.results;
    // return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm))
}

async function getMovieDetails(movieId) {
    const response = await tmdbAPI.get(`/movie/${movieId}`)
    return response.data    
}

async function getMovieCredits(movieId) {
    const response = await tmdbAPI.get(`/movie/${movieId}/credits`)
    return response.data
}

export {
    getMovies,
    getSuggestions,
    getMovieDetails
}