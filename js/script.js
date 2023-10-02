let selectionBox = document.getElementById('selectionBox')
let selectionHeader = document.getElementById('selectionHeader')
let cookBox = document.getElementById('cookBox')
let valueBox = document.getElementById('Werte')
let array = []
let arr = []
let cal = 0
function generateBread() {
    for (let i = 0; i < json.bread.length; i++) {
        selectionBox.innerHTML += `
            <div class="select" onclick='generateMeat(), setParams("${json.bread[i].value}"), setName("${json.bread[i].name}"), calcCal(${json.bread[i].cal})' style="background-image: url('${json.bread[i].image}')">
                <h3>${json.bread[i].name}</h3>
            </div>
        `
    }

}
async function generateMeat() {
    selectionBox.innerHTML = ""
    selectionHeader.innerHTML = "Wähle dein Fleisch"
    for (let i = 0; i < json.meat.length; i++) {
        selectionBox.innerHTML += `
            <div class="select" onclick='generateCheese(), setParams("${json.meat[i].value}"), setName("${json.meat[i].name}"), calcCal(${json.meat[i].cal})' style="background-image: url('${json.meat[i].image}')">
                <h3>${json.meat[i].name}</h3>
            </div>
        `
    }
}
async function generateCheese() {
    selectionBox.innerHTML = ""
    selectionHeader.innerHTML = "Wähle deinen Käse"
    for (let i = 0; i < json.cheese.length; i++) {
        selectionBox.innerHTML += `
            <div class="select" onclick='generateSalad(), setParams("${json.cheese[i].value}"), setName("${json.cheese[i].name}"), calcCal(${json.cheese[i].cal})' style="background-image: url('${json.cheese[i].image}')">
                <h3>${json.cheese[i].name}</h3>
            </div>
        `
    }
}
async function generateSalad() {
    selectionHeader.innerHTML = "Willst du Salat"
    selectionBox.innerHTML = `
        <div class="select" onclick='setParams("salad"), cook(), setName("Salat"), calcCal(40)' style="background-image: url('../css/image/salad.jpg')">
            <h3>Ja</h3>
        </div>
        <div class="select" onclick='setParams("no"), cook(), setName("no"), calcCal(0)' style="background-image: url('../css/image/nosalad.jpg')">
            <h3>Nein</h3>
        </div>
    `
    
}
function cook() {

    selectionHeader.innerHTML = "Dein Burger:"
    selectionBox.remove()
    document.getElementById('linkEnd').style.opacity = "1"
    cookBox.innerHTML = `
        <img id="top" src="../css/image/burgerteile/${array[0]}_top.png" alt="">
        <br>
        <img id="salad" src="../css/image/burgerteile/salad.png" alt="">
        <img id="meat" src="../css/image/burgerteile/${array[1]}.png" alt="">
        <img id="bottom" src="../css/image/burgerteile/${array[0]}_bottom.png" alt="">
    `

    /* SESAM */
    if(array[0] == "sesam" && array[1] == "beef_cheese"){
        document.getElementById('meat').style.top = "22vh"
    }
    if(array[0] == "sesam" && array[1] == "beef_cheese" && array[3] == "no"){
        document.getElementById('meat').style.top = "20vh"
        document.getElementById('salad').style.opacity = "0"
        document.getElementById('bottom').style.top = "21vh"
    }
    if(array[0] == "sesam" && array[1] == "chicken_cheese" && array[3] == "no"){
        document.getElementById('meat').style.top = "21vh"
        document.getElementById('salad').style.opacity = "0"
        document.getElementById('bottom').style.top = "18vh"
    }
    if(array[0] == "sesam" && array[1] == "fish" && array[3] == "no"){
        document.getElementById('meat').style.top = "19.5vh"
        document.getElementById('salad').style.opacity = "0"
        document.getElementById('bottom').style.top = "19.5vh"
    }
    if(array[0] == "sesam" && array[1] == "chicken_cheese" && array[3] == "salad"){
        document.getElementById('meat').style.top = "24vh"
        document.getElementById('bottom').style.top = "21.6vh"
    }
    /* BASIC */
    if(array[0] == "basic" && array[1] == "beef_cheese" && array[3] == "salad"){
        document.getElementById('top').style.top = "23vh"
        document.getElementById('bottom').style.top = "20.5vh"
    }
    if(array[0] == "basic" && array[1] == "chicken_cheese" && array[3] == "salad"){
        document.getElementById('top').style.top = "23vh"
        document.getElementById('meat').style.top = "24vh"
        document.getElementById('bottom').style.top = "17.8vh"
    }
    if(array[0] == "basic" && array[1] == "fish" && array[3] == "salad"){
        document.getElementById('top').style.top = "23vh"
        document.getElementById('meat').style.top = "23vh"
        document.getElementById('bottom').style.top = "19vh"
    }
    if(array[0] == "basic" && array[1] == "beef_cheese" && array[3] == "no"){
        document.getElementById('top').style.top = "24.5vh"
        document.getElementById('salad').style.opacity = "0"
        document.getElementById('bottom').style.top = "20.5vh"
    }
    if(array[0] == "basic" && array[1] == "chicken_cheese" && array[3] == "no"){
        document.getElementById('top').style.top = "23vh"
        document.getElementById('salad').style.opacity = "0"
        document.getElementById('bottom').style.top = "16.7vh"
    }
    if(array[0] == "basic" && array[1] == "fish" && array[3] == "no"){
        document.getElementById('top').style.top = "23vh"
        document.getElementById('meat').style.top = "20.6vh"
        document.getElementById('salad').style.opacity = "0"
        document.getElementById('bottom').style.top = "16.7vh"
        
    }
    /* FISH */
    if(array[1] == "fish"){
        document.getElementById('meat').style.left = "39.5%"
    }
    let jsonString = JSON.stringify(arr)
    if(array[3]== 'salad'){
        localStorage.setItem('Salat', "Salat")
    }
    localStorage.setItem('burger', jsonString)
    localStorage.setItem('calories', cal)
    console.log(localStorage);
}
async function setParams(value) {
    array.push(value)
    console.log(array);
}
async function setName(value){
    arr.push(value)
    console.log(arr);
}

async function calcCal(value){
    cal += value
}
async function link() {
    window.open("./endscreen.html", "_self")
}
function values(){
    let arr = JSON.parse(localStorage.getItem('burger'))
    console.log(arr);
    let calories = localStorage.getItem('calories')
    let salad = localStorage.getItem('Salat')
    if(salad == 'Salat'){
        valueBox.innerHTML = `
        <h2>Du hast gewählt:</h2>
        <h2><span class="bold">${arr[0]} </span>mit<span class="bold"> ${arr[1]} </span>und<span class="bold"> ${arr[2]} </span>mit<span class="bold"> Salat</span></h2>
        <h2>Zusätzlich hat dein Burger<span class="bold"> ${calories} </span>Kalorien</h2>
    `
    }else{
        valueBox.innerHTML = `
        <h2>Du hast gewählt:</h2>
        <h2><span class="bold">${arr[0]} </span>mit<span class="bold"> ${arr[1]} </span>und<span class="bold"> ${arr[2]} </span>ohne<span class="bold"> Salat</span></h2>
        <h2>Zusätzlich hat dein Burger<span class="bold"> ${calories} </span>Kalorien</h2>
    `
    }
    localStorage.clear()
}