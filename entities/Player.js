class Player {
  constructor() {
    this.el = document.createElement("a-sphere")
    this.el.setAttribute("src", "../assets/chrome-boi.png")
    this.el.setAttribute("radius", 5)
    this.el.setAttribute("position", "0 0 -20")
    this.el.setAttribute("rotation", "45 -25 0")

    this.el.setAttribute("sound", "src: ../assets/explosion.wav")
  }
}
