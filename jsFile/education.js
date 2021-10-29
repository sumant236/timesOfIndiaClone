window.addEventListener('load', ()=>{
    handleEduNews()
    .then(res=>console.log(res))
    .catch(err=> console.log(err))
})

function handleEduNews() {
    return fetch(`http://localhost:3000/educationNews`)
    .then(res => res.json())
}