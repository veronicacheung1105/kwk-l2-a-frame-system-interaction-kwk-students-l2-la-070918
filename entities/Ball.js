class Ball {
  constructor() {
    this.el = document.createElement("a-sphere")
    this.el.setAttribute("color", this._getRandomStartColor())
    this.el.setAttribute("radius", Math.random()*5)
    this.el.setAttribute("position", this._getRandomStartPos())
    this.el.setAttribute("material", "side: double")
    this.vector = this._getRandomStartVector() // we use this to keep track of the balls direction of travel through 3D space
  }

  _getRandomStartColor() {
    const letters = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 3; i++)
      color += letters[Math.floor(Math.random() * 15)]
    return color
  }

  _getRandomStartPos() {
    // ensures we start away from the center (where the player spawns) but within the thunderdome
    const coords = [0, 15, -15]
    return {
      x: coords.splice(Math.floor(Math.random() * coords.length), 1),
      y: coords.splice(Math.floor(Math.random() * coords.length), 1),
      z: coords.splice(Math.floor(Math.random() * coords.length), 1),
    }
  }

  _getRandomStartVector() {
    return new THREE.Vector3(
      Math.random()/2.0 - .5,
      Math.random()/2.0 - .5,
      Math.random()/2.0 - .5
    )
  }
}
