import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'X-RapidAPI-Key': '44019b78abmshc80164797491e67p1fae58jsn2e165d027a0a',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }     
             
})


