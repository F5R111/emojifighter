let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
   let random1=Math.floor(Math.random()*fighters.length)
   let random2=Math.floor(Math.random()*fighters.length)
    stageEl.textContent=fighters[random1]+"vs"+fighters[random2]
})

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊","🍊","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sort(){
    for(i=0;i<fruit.length;i++){
        if(fruit[i]==="🍎"){
            appleShelf.textContent+="🍎"
        }
        else if(fruit[i]==="🍊"){
            orangeShelf.textContent+="🍊"
        }
    }


}

sort()