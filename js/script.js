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
    for(let i = 0; i< json.beef.length; i++){
        selectionBox.innerHTML += `
            <div class="select" onclick="" style="background-image: url('${json.beef[i].image}')">
                <h3>${json.beef[i].name}</h3>
            </div>
        `
    }
}
async function generateChesse(){
    selectionBox.innerHTML = ""
    selectionHeader = "Käse"
    for (let i = 0; i < json.cheese.length; i++) {
        const element = array[i];
        
    }
    selectionBox.innerHTML = `
        
    `
}
async function setParams(key, value){
    let url = new URL(window.location)
    let params = new URLSearchParams(url.search); 
    params.set(key, value)

    console.log(params);
}