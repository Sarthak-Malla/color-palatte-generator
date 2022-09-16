var prime = document.getElementById("prime")
var second = document.getElementById("second")
var ter = document.getElementById("ter")
var last = document.getElementById("last")
// prime.style.backgroundColor = "rgb(" + [Math.random() * 256, Math.random() * 256, Math.random() * 256].join(",") + ")"

var generate_button = document.getElementById("generate-button")

generate_button.onclick = function() {generate()}

function generate(){
    prime.style.backgroundColor = "rgb(" + [Math.random() * 256, Math.random() * 256, Math.random() * 256].join(",") + ")"
    second.style.backgroundColor = "rgb(" + [Math.random() * 256, Math.random() * 256, Math.random() * 256].join(",") + ")"
    ter.style.backgroundColor = "rgb(" + [Math.random() * 256, Math.random() * 256, Math.random() * 256].join(",") + ")"
    last.style.backgroundColor = "rgb(" + [Math.random() * 256, Math.random() * 256, Math.random() * 256].join(",") + ")"
}