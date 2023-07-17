import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_E5iLB6lkwpo1ELiOf9rMpBJuuGUlUje6JIpXeVXjQpEBRXCoPT9J3vZs9JTCIWhE";

import fetchBreeds from './cat-api'
import fetchBreedsBre from './cat-api'
import BASE_URL from'./cat-api'
 
const catInf = document.querySelector('.cat-info')
const infError = document.querySelector('.error')
const infLoad = document.querySelector('.loader')
const breedSelect = document.querySelector('.breed-select')
const body = document.querySelector('body')



body.style.backgroundImage =
    infError.style.visibility = 'hidden';
    infLoad.style.visibility = 'hidden';

breedSelect.addEventListener('imput',imputBreed)
function imputBreed(e) {
  e.fetchBreeds
}


function catBreed(items) {
    const breedList = items.map(({ url, id, wikipedia_url, temperament, breeds }) => {
        return `
        <img src="${url}" alt="${id}">
        <h1>${breeds}</h1>
        <p>${wikipedia_url}</p>
        <p>${temperament}</p>
        `
    }).join('');
    catInf.innerHTML = breedList;
    return breedList
}   