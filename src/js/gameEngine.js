function start (state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game))

}

function gameLoop(state, game) {
    const {wizard} = state;
    const {wizardEl} = game;

// move  wizard
if (state.keys.KeyA) {
    wizard.posX -= wizard.speed;
}

if (state.keys.KeyS) {
    wizard.posY += wizard.speed;
}

if (state.keys.KeyD) {
    wizard.posX += wizard.speed;
}

if (state.keys.KeyW) {
    wizard.posY -= wizard.speed;
}
//render game
wizardEl.style.left = state.wizard.posX + "px"
wizardEl.style.top = state.wizard.posY + "px"


window.requestAnimationFrame(gameLoop.bind(null, state, game));
}