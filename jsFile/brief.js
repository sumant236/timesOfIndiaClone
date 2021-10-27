window.addEventListener("load", ()=>{
    handleData()
    .then(res =>console.log(res))
    .catch(err => console.log(err));
})

function handleData(){
    return fetch("https://newsapi.org/v2/top-headlines&apiKey=e88a3ca368aa40d6bfd6144b856d172e").then(res=>res.json())
}