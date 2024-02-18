var totalruim = 0
var contador = 0

while (contador < 4 ) {
var entrevista = prompt("Stranger Things, você achou excelente, bom, ruim")
if (entrevista === "ruim") {
  totalruim = totalruim + 1;
  
} else if (entrevista !== "excelente" && entrevista !== "bom" && entrevista !== "ruim") {
  alert('Digite apenas "excelente", "bom" ou "ruim"');
  continue;
 }
 contador++
}

console.log("Total de 'ruim': " + totalruim);