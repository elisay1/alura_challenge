function encriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober"); 
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  
  if (document.getElementById("inputTexto").value.match(/^[a-z ]*$/)) {
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
  } else {
    
    alert("Solo se permiten letras minusculas, sin caracteres especiales.");
    
    
  }
}

function desencriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();

  if (document.getElementById("inputTexto").value.match(/^[a-z ]*$/)) {

    if (texto == "") {
      alert("No has ingresado nada para desencriptar");
    } else {
      var txtCifrado = texto.replace(/enter/gim, "e");
      var txtCifrado = txtCifrado.replace(/imes/gim, "i");
      var txtCifrado = txtCifrado.replace(/ai/gim, "a");
      var txtCifrado = txtCifrado.replace(/ober/gim, "o");
      var txtCifrado = txtCifrado.replace(/ufat/gim, "u");
  
      document.getElementById("imgDer").style.display = "none";
      document.getElementById("texto").style.display = "none";
      document.getElementById("texto2").innerHTML = txtCifrado;
      document.getElementById("copiar").style.display = "show";
      document.getElementById("copiar").style.display = "inherit";
    }
    
  } else {
    
    alert("Solo se permiten letras minusculas, sin caracteres especiales.");
    
  }

}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy") 
  showAlert();
}
function showAlert() {
  alert("Copiado", "El mensaje se ha copiado" );
  
}


