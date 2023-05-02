const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = window.getComputedStyle(clouds).left;

    console.log(cloudsPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 120){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}`;

        mario.src = './images/endgame.webp';
        mario.style.width = '120px'
        mario.style.marginLeft = '10px';

        clearInterval(loop);

    }

},10)

document.addEventListener('keydown', jump);