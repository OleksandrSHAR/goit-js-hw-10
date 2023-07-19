import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_hAPwe9T2sAFqIdAaEVWLWnLgPvoQnZJvaq8wz7DiapKWYNWcPv75pqIDfZxNu5yC";
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
    fetchBreedsCat(e.target.value).then(data => {
        const imgCat = data.map(elem =>
            `<img src="${elem.url}" alt="cat" width="400"height="400"></img>`).join('')
        catInf.innerHTML = imgCat
        data.map(elem => {
            elem.breeds.forEach(cat => {
                const array = [cat]
                const findCat = array.find(option=>option.id===`${e.target.value}`)
            const markur= `
         
         <h1>${findCat.name}</h1>
        <p>${findCat.description}</p>
        <p>${findCat.temperament}</p>
        `
          catInf.insertAdjacentHTML("beforeend",markur)      
            })
        }) 
    })
        .catch(() => {
        infError.removeAttribute('hidden')
        })
    .finally(()=>infLoad.setAttribute("hidden",true))
}
  