AFRAME.registerSystem('game', {

  init: function() {
    this.balls = []
    this.player = null
  },

  spawnBall: function() {
    const newBall = new Ball()
    this.balls.push(newBall)
    SCENE.appendChild(newBall.el)
  },

  removeAllBalls: function() {
    this.balls.forEach(ball => {
      ball.el.parentNode.removeChild(ball.el)
    })
    this.balls = []
  },

  spawnPlayer: function() {
    this.player = new Player()
    CAMERA.appendChild(this.player.el)
  },

  // when a collision occurs, this ensures the direction the ball is travelling is updated
  handleCollision: function(sphere, plane) {
    sphere.vector = sphere.vector.reflect(plane)
  },

  getSphereSphereDistance: function(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) + (a.z - b.z) * (a.z - b.z))
  },

  // external checks for a sphere-sphere collision on the outside of each
  checkPlayerCollision: function(ball) {
    const a = {...ball.el.getAttribute("position")}
    var vector = new THREE.Vector3()
    const b = vector.setFromMatrixPosition(this.player.el.object3D.matrixWorld) // gets absolute position of player

    const aRad = parseFloat(ball.el.getAttribute("radius"))
    const bRad = parseFloat(this.player.el.getAttribute("radius"))

    const distance = this.getSphereSphereDistance(a, b)
    return (distance <= bRad + aRad) // distance between the two spheres' centers is less than the sum of their radii
  },

  moveBall: function(ball) {
    ball.el.object3D.position.sub(ball.vector) // this applies the velocity of the ball to its current position
  },

  updateBall: function(ball) {
    const a = {...ball.el.getAttribute("position")}
    const b = {...THUNDERDOME.el.getAttribute("position")}

    const distance = this.getSphereSphereDistance(a, b)
    const aRad = parseFloat(ball.el.getAttribute("radius"))
    const bRad = parseFloat(THUNDERDOME.el.getAttribute("radius"))
    const collided = (distance >= bRad - aRad) // internal checks for a sphere-sphere collision on the inside of the thunderdome
    if (collided) {
      const collisionPlane = new THREE.Vector3(a.x - b.x, a.y - b.y, a.z - b.z).normalize()
      this.handleCollision(ball, collisionPlane)
    }
    this.moveBall(ball)
  },

  restart: function() {
    this.player.el.components.sound.playSound()
    this.removeAllBalls()
    this.GAME.spawnBall()
  },

  newBallShouldSpawn: function() {
    // TODO: implement me!
    for 
    // hint: Is there some way to use Date.now() to compare the current time and the time since the last ball spawned?
    return false
  },

  // this runs constantly!
  tick: function() {
    // if (newBallShouldSpawn()) {
    //   this.spawnBall()
    // }
    this.balls.forEach(ball => {
      const collided = this.checkPlayerCollision(ball)
      if (collided) {
        this.restart()
      }
      this.updateBall(ball)
    })
  },

})
