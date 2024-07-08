

let btnEncriptador = document.querySelector(".Encriptador");
console.log(btnEncriptador);

let btnDesencriptar = document.querySelector(".Desencriptar");
console.log(btnDesencriptar);

function clickEncriptar () {

    let txtInput = document.querySelector(".txtInput").value;
    console.log(txtInput);

    let nuevoTxtinput = "";

    for (let letra of txtInput) {
        
        console.log(letra);
        switch (letra) {
            case "a":
                nuevoTxtinput = nuevoTxtinput + "ai";
                
                break;
            
            case "e":
                nuevoTxtinput = nuevoTxtinput + "enter";
                
                break;

            case "i":
                nuevoTxtinput = nuevoTxtinput + "imes";
                    
                break;

            case "o":
                nuevoTxtinput = nuevoTxtinput + "ober";
                
                break;

            case "u":
                nuevoTxtinput = nuevoTxtinput + "ufat";
                
                break;
                    
            default:
                nuevoTxtinput = nuevoTxtinput + letra
                break;
        }
    }

    console.log(nuevoTxtinput);

    incrustarTextoParaMostrar(nuevoTxtinput);
}

function ocultarSeccionImagen(){
    let imagenOcultar = document.querySelector(".main__mostrar__datos__imag");
    if (imagenOcultar) {
        imagenOcultar.style.display = "none";
        imagenOcultar.remove();
    }
    
    let tituloOcultar = document.querySelector(".main__mostrar__datos__titulo");
    if (tituloOcultar) {
        tituloOcultar.style.display = "none";
        tituloOcultar.remove();
    }
    
    let parrafoOcultar = document.querySelector(".main__mostrar__datos__parrafo");
    if (parrafoOcultar) {
        parrafoOcultar.style.display = "none";
        parrafoOcultar.remove();
    }
    
}

function incrustarTextoParaMostrar(texto){

    ocultarSeccionImagen();

    /* Aqui se esta capturando las etiquetas padre donde se van a meter los hijos */
    let contenedorTextoParaMostrar = document.querySelector(".main__mostrar__datos__section");
    let contenedorMostrarDatos = document.querySelector(".main__mostrar__datos");

    /* De esta forma se crean elementos Html */
    let parrafoTextoParaMostrar;
    let buttonCopiarParaMostrar;

    
    if(!parrafoTextoParaMostrar && !buttonCopiarParaMostrar ){
    
        parrafoTextoParaMostrar = document.createElement("p");
        buttonCopiarParaMostrar = document.createElement("button");
    }    

    if(!contenedorTextoParaMostrar.contains(document.querySelector("p")) 
        && !contenedorTextoParaMostrar.contains(document.querySelector("button"))) {

        /* De esta forma se agregan etiquetas dentro de otras */
        contenedorTextoParaMostrar.append(parrafoTextoParaMostrar);
        contenedorTextoParaMostrar.append(buttonCopiarParaMostrar);

        
        /* De esta forma se le asigna texto a las etiquetas previamente creadas */
        parrafoTextoParaMostrar.innerHTML = texto;
        buttonCopiarParaMostrar.innerHTML = "Copiar";
    }else{
        document.querySelector("p").innerHTML=texto;
        document.querySelector("button").innerHTML="";
    }

    darEstiloEtiquetasCreadas(parrafoTextoParaMostrar, buttonCopiarParaMostrar, contenedorMostrarDatos, contenedorTextoParaMostrar );

/* Agregar funcionalidad al boton copiar */



}

        /* ESTA FUNCIONALIDAD crea un evento para verificar la altura automaticamente
        cuando las palabras a encriptar sean muy largas */
    
    document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('multiline-input');

    textarea.addEventListener('input', function () {
        
        // Restablece la altura para recapturar el scrollHeight
        this.style.height = 'auto';

        // Ajusta la altura al contenido actual
        this.style.height = (this.scrollHeight) + 'px';

    });

    // Llama al ajuste de altura al cargar la página para asegurar que el texto inicial (si lo hay) se ajuste
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';

});

/* Esto para  hacer la desencriptacion del texto creando funciones variables y for */
function clickDesencriptar(){
    let textoEncriptado = document.querySelector(".txtInput").value;

    let palabrasAReemplazar  = ["ai","enter","imes","ober","ufat"];
    let nuevasPalabras  = ["a","e","i","o","u"];

    for (let index = 0; index < palabrasAReemplazar.length; index++) {
        console.log("antes de split" + textoEncriptado);

        textoEncriptado = textoEncriptado.split(palabrasAReemplazar[index]);
        console.log("despues de split" + textoEncriptado);

        textoEncriptado = textoEncriptado.join(nuevasPalabras[index]);	
        console.log("despues del join ==>" + textoEncriptado);
        
    }
    incrustarTextoParaMostrar(textoEncriptado);

}
function darEstiloEtiquetasCreadas(parrafo, boton, contenedorGeneral, contenedorTexto ){
    /* MODIFICAMOS LOS ESTILOS DE LAS ETIQUETAS */
    boton.style = 
    "width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
    "border-radius: 24px ; color: #0A3871 ; background-color: #D8DFE8;";
    boton.setAttribute("onclick","copiarTexto (this)");

    contenedorGeneral.style="display : block " ;

    contenedorTexto.style = "margin: 0 ; padding : 11% ; height : 100% ;justify-content:space-between";

    parrafo.style ="font-size: 2rem ; width: 100%  ; overflow: auto;  word-wrap: break-word;";
    parrafo.setAttribute("class", "texto-para-copiar");


}

function copiarTexto(boton){

    // Selecciona el párrafo cuyo texto será copiado
    const textToCopy = document.querySelector('.texto-para-copiar').innerHTML;

    // Usa la API de Portapapeles para copiar el texto
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Muestra un mensaje de éxito
               // Opcional: Restablece el estilo del botón después de unos segundos
               boton.innerHTML="Copiado";
               boton.style="width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
                "border-radius: 24px ; color: #0A3871 ; background-color: color: #e8c9e3;";
               setTimeout(() => {
                   boton.innerHTML = "Copiar";
                   boton.style="width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
                                "border-radius: 24px ; color: #0A3871 ; background-color: #D8DFE8;"
               }, 2000); // 2000 ms = 2 segundos
           })
        .catch(err => {
            // Muestra un mensaje de error
            console.error('Error al copiar el texto: ', err);
            alert('Error al copiar el texto');
        });
}
