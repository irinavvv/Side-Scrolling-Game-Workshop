function initGameObj() {
const startScreen = document.querySelector(".start-screen")
const gameScreen= document.querySelector(".game-screen")
return {
    startScreen,
    gameScreen,
    createWizard(initState){

        let  wizardEl = document.createElement("div")
        wizardEl.classList.add("wizard")
        wizardEl.style.height = initState.height + "px"
        wizardEl.style.width = initState.width + "px"

        wizardEl.style.left = initState.posX + "px"
        wizardEl.style.top = initState.posY + "px"

        this.wizardEl = wizardEl
        gameScreen.appendChild(wizardEl)
        return wizardEl
    }
}
}