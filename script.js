function resistencia(){
let c1 = parseInt(document.getElementById("color1").value);
let c2 = parseInt(document.getElementById("color2").value);
let c3 = parseInt(document.getElementById("color3").value);
let multiplicador = parseFloat(document.getElementById("unidad").value);
let tolerancia = document.getElementById("color4").value;

let r = (c1 * 10 + c2) * c3 / multiplicador;
let resultado = r + " " + tolerancia;
document.getElementById("salidaTxt").value = resultado;
}