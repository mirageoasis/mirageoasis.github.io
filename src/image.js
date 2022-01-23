//img
const img = ["pcb.png", "direct_execution.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
//const

const imagePlace = document.getElementById("image")

//document.body.style.backgroundColor = "red"

const num = Math.floor(Math.random() * img.length)

imagePlace.setAttribute("src", `./img/${img[num]}`)
