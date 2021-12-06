var texto = "Las personas exitosas son personas comunes con una decision extraordinaria";
var cant = 0; // inicio la variable para guardar la cantidad de letras A del texto


for (var i = 0; i<texto.length; i++){ // recorro todo el texto, desde la primer posicion hasta el final del texto

    if(texto[i]=='a'){ //valido si es letra A
        cant = cant+1; //incremento cada vez que encuentro una letra A
    }
}

alert("El texto tiene " + cant+" de letras A"); //le muestro al usuario la cantidad de letras A del texto
