import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_E5iLB6lkwpo1ELiOf9rMpBJuuGUlUje6JIpXeVXjQpEBRXCoPT9J3vZs9JTCIWhE";
import { fetchBreeds} from "./cat-api";
import {fetchBreedsCat} from "./cat-api";

 axios . isCancel ( fetchBreeds )
const catInf = document.querySelector('.cat-info')
const infError = document.querySelector('.error')
const infLoad = document.querySelector('.loader')
const breedSelect = document.querySelector('.breed-select')
const body = document.querySelector('body')

fetchBreeds().then(data => {
    catSelect(data)
})
function catSelect(items) {
    const breedColect = items.map(({ id, name }) => { return `<option value="${id}">${name}</option>` }).join('');
    breedSelect.innerHTML = breedColect;
}
body.style.backgroundImage =
    infError.style.visibility = 'hidden';
    infLoad.style.visibility = 'hidden';

breedSelect.addEventListener('chenge',etchBreedsBre)


function etchBreedsBre(e) {
    infLoad.removeAttribute('hidden')
    const breedList = fetchBreedsCat(e.target.value).then(data => data.map(({ url, name, description, temperament, breeds }) => {
        return `
        <img src="${url}" alt="cat" width="400"height="400">
        <h1>${name}</h1>
        <p>${description}</p>
        <p>${temperament}</p>
        `
    })).join('');
    
    catInf.innerHTML = breedList;
    return breedList;
    
}   