
import { fetchBreeds,fetchBreedsCat} from "./cat-api";

const catInf = document.querySelector('.cat-info')
const infError = document.querySelector('.error')
const infLoad = document.querySelector('.loader')
const breedSelect = document.querySelector('.breed-select')



breedSelect.addEventListener('change',etchBreedsBre)

   
fetchBreeds().then(data => {
    catSelect(data)
     
})
 .catch((error) =>
 {
    infError.removeAttribute("hidden")
 console.log(error)}
        )
    .finally(() => {
        infLoad.setAttribute("hidden", true)
        
    })

function catSelect(items) {
    const breedColect = items.map(({ id, name }) => { return `<option value="${id}">${name}</option>` }).join('');
    breedSelect.innerHTML = breedColect;
}


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
                const markur = 
            `
         <h1>${findCat.name}</h1>
        <p>${findCat.description}</p>
        <p>${findCat.temperament}</p>
        `
          catInf.insertAdjacentHTML("beforeend",markur)      
            })
        }) 
    })
        .catch((error) => {
            infError.removeAttribute("hidden")
        console.log(error)}
        )
        .finally(() => {
            infLoad.setAttribute("hidden", true)
           
         })
}
  