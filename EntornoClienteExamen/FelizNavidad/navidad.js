var villancico = document.getElementById("villancico");
const myTimeout = setTimeout(verFelicitacion, 3000); /*La frase de felicitación tardará 3 segundos en aparecer*/ 


function verFelicitacion() {
  document.getElementById("felicitacion").style.visibility="visible";
}

let body = document.querySelector("body");
body.addEventListener("click", cerrarFelicitacion); /*Se cerrara la Felicitacion cuando se haga click*/

function cerrarFelicitacion() { /*Al hacer click en la primera imagen se pasara a la segunda y solo será visible
la segunda imagen con la frase de felicitacion y el audio */

    document.getElementById("felicitacion").style.visibility="visible";
    document.getElementById("tigreRegalo").style.visibility="visible";
    document.getElementById("postal").style.visibility="hidden";
    document.getElementById("estrellaBelen").style.transform = "scaleX(-1)";


    villancico.play(); /*Sonará el villancico cuando se haga click y se pase a la segunda imagen */

  }


