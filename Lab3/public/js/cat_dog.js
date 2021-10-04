const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const body = document.body;
const cat_url = "https://aws.random.cat/meow";
const dog_url = "https://random.dog/woof.json";


cat.addEventListener('click',cat_picture);

dog.addEventListener('click',dog_picture);

async function cat_picture(){
    const url = `${cat_url}`
    try{
        const response = await fetch(url,reqInit);
        const json = await response.json();
        console.log(json);
        displayCat(json)
        
    }catch(err){
        console.log(err)
    }
    
}

async function dog_picture(){
    const url = `${dog_url}`
    try{
        const response = await fetch(url,reqInit);
        const json = await response.json();
        console.log(json);
        displayDog(json)
        
    }catch(err){
        console.log(err)
    }
    
}

function displayDog(data){
    const output = `
    <img src=${data.url} alt='article image'>`;
    document.getElementById('picture').innerHTML = output;
}
function displayCat(data){
    const output = `
    <img src=${data.file} alt='article image'>`;
    document.getElementById('picture').innerHTML = output;
}