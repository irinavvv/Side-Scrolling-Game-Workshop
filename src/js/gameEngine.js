function start (state, game) {
    game.createWizard(state.wizzard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game))

}

function gameLoop(state, game) {
console.log(state.keys);
window.requestAnimationFrame(gameLoop.bind(null, state, game));
}