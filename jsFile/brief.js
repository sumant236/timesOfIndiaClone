window.addEventListener("load", ()=>{
    handleData()
<<<<<<< HEAD
    .then(res =>console.log(res))
=======
    .then(res =>{
        showCards(res)
    })
>>>>>>> 4ee7583840add6d96ee3b2c9464e6e931e71453b
    .catch(err => console.log(err));
})

function handleData(){
<<<<<<< HEAD
    return fetch("https://newsapi.org/v2/top-headlines&apiKey=e88a3ca368aa40d6bfd6144b856d172e").then(res=>res.json())
=======
    return fetch("http://localhost:3000/brief")
    .then(res=>res.json())
    
}

function showCards(data){
    console.log(data)
    const div = document.getElementById('container')
    div.innerHTML = null;
    for(let article in data){
        const card = document.createElement('div')
        card.className = "card"
        const img = document.createElement('img');
        img.src = data[article].urlToImg;
        img.className = "card-img"
        // img.style.width = "100%";
        // img.style.height = "100%";

        const title = document.createElement('h6')
        title.className= "title"
        title.textContent = data[article].title;

        const description = document.createElement('p');
        description.className = "description"
        description.textContent = data[article].content

        const reference = document.createElement('div');
        reference.className = "reference"
        reference.innerHTML = `<p>${data[article].contentFrom}</p>
        <div>
        <i class="card-icons fab fa-facebook-f"></i>
        <i class="card-icons fab fa-twitter"></i>
        <i class="card-icons fab fa-linkedin-in"></i></div>`

        card.append(img, title, description, reference)
        div.append(card)
    }
>>>>>>> 4ee7583840add6d96ee3b2c9464e6e931e71453b
}