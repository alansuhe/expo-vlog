// https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn
// import { OMDB_BASE_URL, OMDB_API_KEY } from '@env'

const { EXPO_PUBLIC_OMDB_BASE_URL: OMDB_BASE_URL, EXPO_PUBLIC_OMDB_API_KEY: OMDB_API_KEY } = process.env
const urlSearch = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&plot=full&s=love&y=2023`
const urlGetMovie = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&plot=full&y=2023`

export const searchMovies = async () => {
    return fetch(urlSearch, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.warn(e))
}

export const getMovie = async (id: string) => {
    return fetch(urlGetMovie + '&i=' + id, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.warn(e))
}