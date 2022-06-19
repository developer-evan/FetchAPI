
const myButton=document.getElementById('fetch');
myButton.addEventListener('click', fetchInfo);

// display UI 

function fetchInfo() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response =>{

      console.log(response.json())
    })
    .then(jsonObj =>{
         displayUi(jsonObj)})
    .catch(()=> alert('API Could  not be reached at this time'))
    
}

function displayUi(country) {
    const {name, capital, languages, currencies, population, region } = country[Math.floor(Math.random() * 150)]
    const template=`
    <div>
    <h1 id="head">${name}</h1>
    <p id="content">This is  A country and its capital city in ${capital}. The language(s) spoken here are ${languages[0].name}.
    The name of  ${name} is located in the ${region} region wuth population of ${population} an uses ${currencies[0].name}
    as its currency
    </p>
    </div>
    `
    document.getElementById('template').innerHTML=template
}