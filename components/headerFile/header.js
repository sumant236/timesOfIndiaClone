// Header Part

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

// Section One 

(async function sectionOneHeadlineLeft(){
    let data = await fetch('http://localhost:3000/sectionOneHeadlineLeft')
    data = await data.json()
    var container = document.createElement('div')
    container.classList.add('sectionOneHeadlineLeftContainer')
    var mainContainer = document.querySelector('.sectionOneHeadlineLeft')
    console.log(data);
    data.forEach(function(ele){
        var newDiv = document.createElement('div')
        newDiv.classList.add('sectionOneHeadlineLeftCard')
        newP = document.createElement('p')
        newP.innerText = ele.title
        newDiv.append(newP)
        var newA = document.createElement('img')
        newA.src = ele.imageURL
        newDiv.append(newA)
        container.append(newDiv)
    })

    mainContainer.append(container)
})();

(async function sectionOneHeadlineMiddle(){
    let data = await fetch('http://localhost:3000/sectionOneHeadlineMiddle')
    data = await data.json()
    var container = document.createElement('div')
    container.classList.add('sectionOneHeadlineMiddleContainer')
    var mainContainer = document.querySelector('.sectionOneHeadlineMiddle')

    data.forEach(function(ele){
        var newDiv = document.createElement('div')
        newDiv.classList.add('sectionOneHeadlineMiddleCard')
        var newA = document.createElement('img')
        newA.src = ele.imageURL
        newDiv.append(newA)
        newP = document.createElement('p')
        newP.innerText = ele.title
        newDiv.append(newP)
        container.append(newDiv)
    })

    mainContainer.append(container)
})();


(async function sectionOneHeadlineRight(){
    let data = await fetch('http://localhost:3000/sectionOneHeadlineRight')
    data = await data.json()
    // console.log(data);
    var container = document.createElement('div')
    container.classList.add('sectionOneHeadlineRightContainer')
    var mainContainer = document.querySelector('.sectionOneHeadlineRight')
    data.forEach(function(ele){
        var newA = document.createElement('p')
        newA.classList.add("sectionOneHeadlineRightCard")
        newA.innerText = "ߋ"+"   "+ele.title.slice(0,52)+"..."
        container.append(newA)
    })
    mainContainer.append(container)
})();