
let state = initState()
let game = initGameObj()

game.startScreen.addEventListener("click", (e) => {
   
    game.startScreen.classList.add("hidden")
    game.gameScreen.classList.remove("hidden")
})