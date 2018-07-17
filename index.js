const SCENE = document.querySelector('a-scene')
const GAME = SCENE.systems['game']
const THUNDERDOME = new Thunderdome()
const CAMERA = document.getElementById("camera")
SCENE.appendChild(THUNDERDOME.el)


function main() {
  GAME.spawnPlayer()
  GAME.spawnBall()
  GAME.spawnBall()
  GAME.spawnBall()
}


SCENE.addEventListener('loaded', main())
