import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_E5iLB6lkwpo1ELiOf9rMpBJuuGUlUje6JIpXeVXjQpEBRXCoPT9J3vZs9JTCIWhE";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/'

export function fetchBreeds() {
  return axios.get('/breeds/').then(resp => {
    if (resp !== 200) {
      throw new Error(resp.status)
    }
    return resp.data
  })
}


export function fetchBreedsCat(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
        if (resp !== 200) {
          throw new Error(resp.status)
        }
        return resp.data 
  })  

}

