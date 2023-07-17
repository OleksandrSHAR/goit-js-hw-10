import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_E5iLB6lkwpo1ELiOf9rMpBJuuGUlUje6JIpXeVXjQpEBRXCoPT9J3vZs9JTCIWhE";


 
const catInf = document.querySelector('.cat-info')
const infError = document.querySelector('.error')
const infLoad = document.querySelector('.loader')
const breedSelect = document.querySelector('.breed-select')
const body = document.querySelector('body')

// axios.get('/breeds/', {
//     params: {
//         name: '',
//         id:''
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });


body.style.backgroundImage =
    infError.style.visibility = 'hidden';
    infLoad.style.visibility = 'hidden';

breedSelect.addEventListener('imput',catSelect)

function catSelect(items) {
    const breedColect = items.map(({ id, name }) => { return `<option value="${id}">${name}</option>` }).join('');
    breedSelect.innerHTML = breedColect;
}

function etchBreedsBre(items) {
    const breedList = items.map(({ url, name, wikipedia_url, temperament, breeds }) => {
        return `
        <img src="${url}" alt="${name}">
        <h1>${breeds}</h1>
        <p>${wikipedia_url}</p>
        <p>${temperament}</p>
        `
    }).join('');
    catInf.innerHTML = breedList;
    return breedList
}   