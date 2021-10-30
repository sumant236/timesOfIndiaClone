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
    // console.log(data);
    data.forEach(function(ele){
        var newDiv = document.createElement('div')
        newDiv.classList.add('sectionOneHeadlineLeftCard')
        let newP = document.createElement('p')
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

// Section Four

(async function sectionFourContainerLowerLeft(){
    let data = await fetch('http://localhost:3000/sectionFourHeadlineLeft')
    data = await data.json()
    var mainContainer = document.querySelector('.sectionFourContainerLowerLeft')
    var container = document.createElement('div')
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


(async function sectionFourContainerLowerMiddle(){
    let data = await fetch('http://localhost:3000/sectionFourHeadlineMiddle')
    data = await data.json()
    // console.log(data);
    var container = document.createElement('div')
    container.classList.add('sectionOneHeadlineRightContainer')
    var mainContainer = document.querySelector('.sectionFourContainerLowerMiddle')
    data.forEach(function(ele){
        var newA = document.createElement('p')
        newA.classList.add("sectionOneHeadlineRightCard")
        newA.innerText = "ߋ"+"   "+ele.title.slice(0,52)+"..."
        container.append(newA)
    })
    mainContainer.append(container)
})();


(async function sectionFourContainerLowerRight(){
    let data = await fetch('http://localhost:3000/sectionFourHeadlineRight')
    data = await data.json()
    var mainContainer = document.querySelector('.sectionFourContainerLowerRight')
    var container = document.createElement('div')
    data.forEach(function(ele){
        var newDiv = document.createElement('div')
        newDiv.classList.add('sectionFourContainerLowerRightCard')
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

// Section Five

(async function sectionOneHeadlineRight(){
    let data = await fetch('http://localhost:3000/citySectionOne')
    data = await data.json()
    // console.log(data);
    var container = document.createElement('div')
    container.classList.add('sectionOneHeadlineRightContainer')
    var mainContainer = document.querySelector('.FiveCityLowerUpperRight')
    data.forEach(function(ele){
        var newA = document.createElement('p')
        newA.classList.add("sectionOneHeadlineRightCard")
        newA.innerText = "ߋ"+"   "+ele.title.slice(0,52)+"..."
        container.append(newA)
    })
    mainContainer.append(container)
})();

(async function FiveCityLowerUpperRight(){
    let data = await fetch('http://localhost:3000/citySectionTwo')
    data = await data.json()
    // console.log(data);
    var container = document.createElement('div')
    container.classList.add('FiveCityLowerLowerContainer')
    var mainContainer = document.querySelector('.FiveCityLowerLower')
    data.forEach(function(ele){
        var newA = document.createElement('p')
        // newA.classList.add("sectionOneHeadlineRightCard")
        newA.innerText = ele.title
        container.append(newA)
    })
    mainContainer.append(container)
})();


(async function sectionOneHeadlineRight(){
    let data = await fetch('http://localhost:3000/coranaVirusSectionOne')
    data = await data.json()
    // console.log(data);
    var container = document.createElement('div')
    container.classList.add('sectionOneHeadlineRightContainer')
    var mainContainer = document.querySelector('.FiveCityLowerUpperRightSecond')
    data.forEach(function(ele){
        var newA = document.createElement('p')
        newA.classList.add("sectionOneHeadlineRightCard")
        newA.innerText = "ߋ"+"   "+ele.title.slice(0,52)+"..."
        container.append(newA)
    })
    mainContainer.append(container)
})();

(async function FiveCityLowerUpperRight(){
    let data = await fetch('http://localhost:3000/coranaVirusSectionTwo')
    data = await data.json()
    // console.log(data);
    var container = document.createElement('div')
    container.classList.add('FiveCityLowerLowerContainer')
    var mainContainer = document.querySelector('.FiveCityLowerLowerSecond')
    data.forEach(function(ele){
        var newA = document.createElement('p')
        // newA.classList.add("sectionOneHeadlineRightCard")
        newA.innerText = ele.title
        container.append(newA)
    })
    mainContainer.append(container)
})();

(async function sectionOneHeadlineMiddle(){
    let data = await fetch('http://localhost:3000/indiaFightCovid')
    data = await data.json()
    var container = document.createElement('div')
    // container.classList.add('sectionOneHeadlineMiddleContainer')
    var mainContainer = document.querySelector('.indiaFightCovid')

    data.forEach(function(ele){
        var newDiv = document.createElement('div')
        // newDiv.classList.add('sectionOneHeadlineMiddleCard')
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

(async function sectionOneHeadlineMiddle(){
    let data = await fetch('http://localhost:3000/sectionFiveExplore')
    data = await data.json()
    var container = document.createElement('div')
    // container.classList.add('sectionOneHeadlineMiddleContainer')
    var mainContainer = document.querySelector('.indiaFightCovidThird')

    data.forEach(function(ele){
        var newDiv = document.createElement('div')
        // newDiv.classList.add('sectionOneHeadlineMiddleCard')
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

(async function lifestyle(){
    let data = await fetch('http://localhost:3000/lifestyle')
    data = await data.json()
    // console.log(data);
    let mainContainer = document.querySelector('.lifestyle')
    let container = document.createElement('div')
    data.forEach(function(ele){
        let mainDiv = document.createElement('div')
        let newP = document.createElement('p')
        newP.innerText = ele.mainTitle
        let newImg = document.createElement('img')
        newImg.src = ele.imageURL
        let innerDiv = document.createElement('div')
        let innerPOne = document.createElement('p')
        innerPOne.innerText = ele.titleOne
        let innerPTwo = document.createElement('p')
        innerPTwo.innerText = ele.titleTwo
        innerDiv.append(innerPOne)
        innerDiv.append(innerPTwo)

        mainDiv.append(newP)
        mainDiv.append(newImg)
        mainDiv.append(innerDiv)
        container.append(mainDiv)
    })
    mainContainer.append(container)
})();

(async function sectionSixTwoLowerTwo(){
    let data = await fetch('http://localhost:3000/sectionSixTwoLowerTwo')
    data = await data.json()
    // console.log(data);
    let mainContainer = document.querySelector('.sectionSixTwoLowerTwo')
    let container = document.createElement('div')

    data.forEach(function(ele){
        let newD = document.createElement('div')
        let newImg = document.createElement('img')
        let newP = document.createElement('p')
        newImg.src = ele.imageURL
        newP.innerText = ele.title

        newD.append(newImg)
        newD.append(newP)

        container.appendChild(newD)
    })

    mainContainer.append(container)

})();

(async function sectionSixThreeCard(){
    let data = await fetch('http://localhost:3000/sectionSixThreeCard')
    data = await data.json()
    // console.log(data);
    let mainContainer = document.querySelector('.sectionSixThreeCard')
    let container = document.createElement('div')

    data.forEach(function(ele){
        let newDiv = document.createElement('div')
        let newImg = document.createElement('img')
        let newP1 = document.createElement('p')
        let newP2 = document.createElement('p')
        let newP3 = document.createElement('p')
        let innerDiv = document.createElement('div')
        newImg.src = ele.imageURL
        newP1.innerText = ele.title
        newP2.innerText = `UPTO ${ele.discount}% OFF`
        newP3.innerText = `${ele.dealCount}+ Deals`
        innerDiv.append(newP2)
        innerDiv.append(newP3)

        newDiv.append(newImg)
        newDiv.append(newP1)
        newDiv.append(innerDiv)
        container.append(newDiv)
    })

    mainContainer.append(container)
})();


(async function sectionSixFourCard(){
    let data = await fetch('http://localhost:3000/sectionSixFourCard')
    data = await data.json()
    // console.log(data);
    let mainContainer = document.querySelector('.sectionSixFourCard')
    let container = document.createElement('div')

    data.forEach(function(ele){
        let newDiv = document.createElement('div')
        let newImg = document.createElement('img')
        let newP = document.createElement('p')
        newImg.src = ele.imageURL
        newP.innerText = ele.title

        newDiv.append(newImg)
        newDiv.append(newP)

        container.append(newDiv)
    })
    mainContainer.append(container)
})()

