let selectionBox = document.getElementById('selectionBox')
let selectionHeader = document.getElementById('selectionHeader')
let cookBox = document.getElementById('cookBox')
let valueBox = document.getElementById('Werte')
let array = []
let arr = []
let calories
function generateBread() {
    for (let i = 0; i < json.bread.length; i++) {
        selectionBox.innerHTML += `
            <div class="select" onclick='generateMeat(), setParams("${json.bread[i].value}" )' style="background-image: url('${json.bread[i].image}')">
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
            <div class="select" onclick='generateCheese(), setParams("${json.meat[i].value}")' style="background-image: url('${json.meat[i].image}')">
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
            <div class="select" onclick='generateSalad(), setParams("${json.cheese[i].value}")' style="background-image: url('${json.cheese[i].image}')">
                <h3>${json.cheese[i].name}</h3>
            </div>
        `
    }
}
async function generateSalad() {
    /**
     * Kalorien: 40
     */
    selectionHeader.innerHTML = "Willst du Salat"
    selectionBox.innerHTML = `
        <div class="select" onclick='setParams("salad"), cook()' style="background-image: url('../css/image/salad.jpg')">
            <h3>Ja</h3>
        </div>
        <div class="select" onclick='setParams("no"), cook()' style="background-image: url('../css/image/nosalad.jpg')">
            <h3>Nein</h3>
        </div>
    `

}
async function cook() {

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
    let jsonString = JSON.stringify(array)
    localStorage.setItem('burger', jsonString)
    console.log(localStorage);
}
async function setParams(value) {
    array.push(value)
    console.log(array);
    
}
async function link() {
    window.open("./endscreen.html", "_self")
}
function values(){
    let arr = JSON.parse(localStorage.getItem('burger'))
    if(arr[3] == "no"){
        valueBox.innerHTML = `
        <h2>Du hast gewählt:</h2>
        <h2>${arr[0]} mit ${arr[1]} und ${arr[2]} ohne Salat</h2>
    `
    }else{
        valueBox.innerHTML = `
        <h2>Du hast gewählt:</h2>
        <h2>${arr[0]} mit ${arr[1]} und ${arr[2]} mit Salat</h2>
    `
    }
    
}