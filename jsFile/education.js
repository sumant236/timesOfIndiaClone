window.addEventListener('load', ()=>{
    handleEduNews()
    .then(res=>showData(res))
    .catch(err=> console.log(err))
})

function handleEduNews() {
    return fetch(`http://localhost:3000/educationNews`)
    .then(res => res.json())
}

function showData(data){
    const div = document.getElementById('container')
    for(let index in data){
        const box = document.createElement('div')
        const heading = document.createElement('h1')
        heading.textContent = data[index].head
        const box1 = createBox1(data, index)
        box1.setAttribute('class', 'box-alignment')
        const box2 = createBox2(data, index)
        box2.setAttribute('class', 'box-alignment')
        const box3 = createBox3(data, index)
        box3.setAttribute('class', 'box-alignment')
        const box4 = createBox4(data, index)
        box4.setAttribute('class', 'box-alignment')
        // console.log(box1)
        box.style.display = "flex"
        box.style.flexWrap = "wrap"
        box.append(box1, box2, box3, box4)
        div.append(box)
    }
    console.log(data.education.box1.news1)
}

function createBox1(data, index) {
    let div = document.createElement('div')
    div.style.position = "relative"
    const img = document.createElement('img');
    img.src = `${data[index].img}`
    img.setAttribute('class', 'newsImg')
    const imgDiv = document.createElement('div');
    const imgText = document.createElement('h3');
    imgText.textContent = data[index].imgtxt;
    imgText.setAttribute('class', 'imgTxt' )
    imgDiv.setAttribute('class', 'imageDiv')
    imgDiv.append(imgText)
    div.append(img, imgDiv)
    return div
}

function createBox2(data, index) {
    let div = document.createElement('div')
    for(let news in data[index].box1){
        const title = document.createElement('p')
        title.textContent = `${data[index].box1[news]}`
        title.setAttribute('class', 'innerbox')
        div.append(title);
        // console.log(news[news])
    }
    div.setAttribute('class', 'color-black')
    return div
}

function createBox3(data, index) {
    
    let div = document.createElement('div')
    for(let news in data[index].box2){
        const title = document.createElement('p')
        title.textContent = `${data[index].box2[news]}`
        title.setAttribute('class', 'innerbox')
        div.append(title);
    }
    div.setAttribute('class', 'color-black')
    return div
}

function createBox4(data, index) {    
    let div = document.createElement('div')
    for(let news in data[index].box3){
        const title = document.createElement('p')
        title.textContent = `${data[index].box3[news]}`
        title.setAttribute('class', 'innerbox')
        div.append(title);
    }
    div.setAttribute('class', 'color-black')
    return div
}