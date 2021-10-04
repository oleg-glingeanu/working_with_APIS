const nasa_api_key = "b7mNccybolIKNozCvIKjLhFVXNZcuWAsTYiTzfUR";
const cat_api_key = "3b738323-484d-4c8b-884f-de480297436d";
const dog_api_key = "";


const headers = new Headers();
const reqInit = {method: 'GET', headers: headers, mode:'cors', cache: 'default'}

async function getNasaPicture(){


    const url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}`
    try{
        const response = await fetch(url,reqInit);
        const json = await response.json();
        console.log(json);
        displayNasa(json)
        
    }catch(err){
        console.log(err)
    }
}

getNasaPicture();

function displayNasa(data){
    const output = `
    <img src=${data.url} alt='article image'>
    <h3>${data.title}</h3>`;
    document.getElementById('nasa_pic').innerHTML = output;
}