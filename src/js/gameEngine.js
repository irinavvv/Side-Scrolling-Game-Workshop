function start (state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game))

}

function gameLoop(state, game) {
    const {wizard} = state;
    const {wizardEl} = game;

// move  wizard
if (state.keys.KeyD) {
    wizard.posX += 10;
}

if (state.keys.KeyW) {
    wizard.posY -= 10;
}
//render game
wizardEl.style.left = state.wizard.posX + "px"
wizardEl.style.top = state.wizard.posY + "px"


window.requestAnimationFrame(gameLoop.bind(null, state, game));
}