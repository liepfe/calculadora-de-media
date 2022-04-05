function Calcular() {
 
  var n1 = parseFloat(document.getElementById("nota1").value);
  var n2 = parseFloat(document.getElementById("nota2").value);
  var n3 = parseFloat(document.getElementById("nota3").value);
  var n4 = parseFloat(document.getElementById("nota4").value);

  var media = (n1 + n2 + n3 + n4) / 4;
  var notaFixada = media.toFixed(2);


  if (
    document.getElementById("nota1") !== "" &&
    document.getElementById("nota2") !== "" &&
    document.getElementById("nota3") !== "" &&
    document.getElementById("nota4") !== "" &&
    notaFixada < 6
  ) {
    var elementoMedia = document.getElementById("resultado");
    var resultadoMedia = "Sua média é " + notaFixada + ". Você reprovou";
    elementoMedia.innerHTML = resultadoMedia;

  } else if (notaFixada > 6) {
    var elementoMedia = document.getElementById("resultado");
    var resultadoMedia =
      "Sua média é " + notaFixada + ". Você atingiu a média!";
    elementoMedia.innerHTML = resultadoMedia;
  } else {
    var elementoErro = document.getElementById("resultado");
    var erro = "Preencha todos os campos";
    elementoErro.innerHTML = erro;
  }
}