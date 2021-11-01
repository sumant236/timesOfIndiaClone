
(async function addHeader(){
    let data = await fetch('http://localhost:3000/headerTag')
    data = await data.json()
    var container = document.querySelector('.headerBottomContainer')
    var mainContainer = document.querySelector('.headerBottom')
    data.forEach(function(ele){
        var newA = document.createElement('a')
        newA.innerText = ele.name
        newA.href = ele.href
        container.append(newA)
    })
    mainContainer.append(container)
})();

