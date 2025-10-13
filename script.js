function resistencia(){
let c1 = document.getElementById("color1").value;
let c2 = document.getElementById("color2").value;
let c3 = document.getElementById("color3").value;
let multiplicador = document.getElementById("unidad").value;
let tolerancia = document.getElementById("color4").value;

let r = (c1 + c2) * c3 / multiplicador;
let resultado = r + " " + tolerancia;
document.getElementById("salidaTxt").value = resultado;
}