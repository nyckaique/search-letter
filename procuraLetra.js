function procuraLetra(letra, frase) {
  var count = 0;
  var frase2 = frase.toLowerCase();
  for (var l of frase2) {
    if (l == letra) {
      count++;
    }
  }

  console.log(
    "A letra '" +
      letra +
      "' aparece um total de " +
      count +
      " vezes na frase '" +
      frase +
      "'"
  );
}
procuraLetra("n", "O meu nome é Nycollas");
