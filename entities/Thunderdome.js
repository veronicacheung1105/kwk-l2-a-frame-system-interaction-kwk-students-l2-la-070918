class Thunderdome {
  constructor() {
    this.el = document.createElement("a-sphere")
    this.el.setAttribute("src", "../assets/wall-texture.jpg")
    this.el.setAttribute("radius", 30)
    this.el.object3D.position.set({x: 0, y: 0, z: 0})
    this.el.setAttribute("material", "side: back; color: yellow")
  }
}
