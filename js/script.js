let selectionBox = document.getElementById('selectionBox')
let selectionHeader = document.getElementById('selectionHeader')
function generateBread() {
    for(let i = 0; i< json.bread.length; i++){
        selectionBox.innerHTML += `
            <div class="select" onclick='generateMeat(), setParams("bread", "${json.bread[i].value}")' style="background-image: url('${json.bread[i].image}')">
                <h3>${json.bread[i].name}</h3>
            </div>
        `
    }
    
}
async function generateMeat() {
    selectionBox.innerHTML = ""
    selectionHeader.innerHTML = "Wähle dein Fleisch"
    for(let i = 0; i< json.meat.length; i++){
        selectionBox.innerHTML += `
            <div class="select" onclick='generateCheese(), setParams("meat", "${json.meat[i].value}")' style="background-image: url('${json.meat[i].image}')">
                <h3>${json.meat[i].name}</h3>
            </div>
        `
    }
}
async function generateCheese(){
    selectionBox.innerHTML = ""
    selectionHeader.innerHTML = "Wähle deinen Käse"
    for (let i = 0; i < json.cheese.length; i++) {
        selectionBox.innerHTML += `
            <div class="select" onclick='generateSalad(), setParams("cheese", "${json.cheese[i].value}")' style="background-image: url('${json.cheese[i].image}')">
                <h3>${json.cheese[i].name}</h3>
            </div>
        `
    }
}
async function generateSalad(){
    /**
     * Kalorien: 40
     */
    selectionHeader.innerHTML = "Willst du Salat"
    selectionBox.innerHTML = `
        <div class="select" onclick='setParams("salad", "yes"), link()' style="background-image: url('../css/image/salad.jpg')">
            <h3>Ja</h3>
        </div>
        <div class="select" onclick='setParams("salad", "no"), link()' style="background-color: #fff">
            <h3>Nein</h3>
        </div>
    `
    
}
async function setParams(key, value){
    let url = new URL(window.location)
    let params = new URLSearchParams(url.search); 
    params.set(key, value)

    console.log(params);
}
async function link(){
    window.open("./endscreen.html", "_self")
}