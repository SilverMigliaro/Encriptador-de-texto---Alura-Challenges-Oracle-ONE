const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
    limpiarTexto("#mensaje");
    panelInvisible();
}

function desencriptar (){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    inputResultado.value = mensaje;
    limpiarTexto("#mensaje");
    panelInvisible();
}

function copiar(){
    var mensajeCopiado = document.getElementById('resultado');
    mensajeCopiado.select();
    document.execCommand('copy');
    limpiarTexto("#resultado");
    alert("Texto Copiado!");
    inputMensaje.focus();
    panelVisble();
}

function panelInvisible() {
  document.getElementById('noMensaje').style.visibility = "hidden";
}

function panelVisble() {
  document.getElementById('noMensaje').style.visibility = "visible";
}

function limpiarTexto(id){
    document.querySelector(id).value = "";
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;