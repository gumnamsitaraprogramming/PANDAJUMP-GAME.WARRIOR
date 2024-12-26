let score = 0;
cross = true;

audio = new Audio('gameplaying.mp3');
audioGO = new Audio('gameover.mp3'); //GO mean game over.
setTimeout(() => {
    audio.play()
}, 1000)
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        panda = document.querySelector('.panda');
        panda.classList.add('animatePanda');
        setTimeout(() => {
            panda.classList.remove('animatePanda')
        }, 700);
    }
    if (e.keyCode == 39) {
        panda = document.querySelector('.panda');
        pandaX = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
        panda.style.left = pandaX + 112 + "px";
    }
    if (e.keyCode == 37) {
        panda = document.querySelector('.panda');
        pandaX = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
        panda.style.left = pandaX - 112 + "px";
    }
}
setInterval(() => {
    panda = document.querySelector('.panda');
    gameOver = document.querySelector('.gameOver')
    Lion = document.querySelector('.Lion')
    px = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left')); //px = Panda x side
    py = parseInt(window.getComputedStyle(panda, null).getPropertyValue('top')); //py = Panda y
    lx = parseInt(window.getComputedStyle(Lion, null).getPropertyValue('left'));
    ly = parseInt(window.getComputedStyle(Lion, null).getPropertyValue('top'));

    offsetX = Math.abs(px - lx);
    offsetY = Math.abs(py - ly);
    // console.log(offsetX, offsetY)
    if (offsetX < 100 && offsetY < 100) {
        gameOver.innerHTML = "GAME OVER - Relode to Play Again"
        Lion.classList.remove('LionAni');
        audioGO.play();
        setTimeout(() => {
            audioGO.pause();
        }, 3000)
        setTimeout(() => {
            audio.pause();
        }, 1000)
    }
    else if (offsetX < 100 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            panda = document.querySelector('.panda');
            Lion = document.querySelector('.Lion');

            // Ensure you retrieve the correct animation duration of panda
            aniDur = parseFloat(window.getComputedStyle(panda, null).getPropertyValue('animation-duration'));

            // Decrease the duration of lion's animation by 0.1s
            newDur = aniDur - 0.1;

            // Apply the new animation duration to the lion
            Lion.style.animationDuration = newDur + 's';

            console.log('New animation duration: ', newDur);
        }, 700);


    }

}, 10);
function updateScore(score) {
    ScoreCount.innerHTML = "your score: " + score
}