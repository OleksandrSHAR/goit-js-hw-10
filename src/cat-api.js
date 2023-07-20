import axios from "axios";
axios.defaults.headers.common['x-api-key'] ="live_hAPwe9T2sAFqIdAaEVWLWnLgPvoQnZJvaq8wz7DiapKWYNWcPv75pqIDfZxNu5yC";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/'

export function fetchBreeds() {
  return axios.get('/breeds/').then(resp => {
    
    return resp.data
  })
}


export function fetchBreedsCat(breedId) {
  
    return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
      
        return resp.data 
  })  

}

