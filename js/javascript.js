//Seccion1-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var ArrayLibros = [];
var textoVentana = "";
class Libro {
    constructor(literatura, edadRecomendada, observaciones, nombre, identificador, anoPublicacion, nCopias, nuevaFecha){
        this.literatura = literatura;
        this.edadRecomendada = edadRecomendada;
        this.observaciones = observaciones;

        this.nombre = nombre;
        this.identificador = identificador;
        this.anoPublicacion = anoPublicacion;
        this.nCopias = nCopias;
      
        this.nuevaFecha = nuevaFecha;
    }
  
}

function selectInfantil(){
    
    let literatura = document.getElementById("literatura");
    let divInfantil= document.getElementById("infantil");

    if(literatura.value == "juvenil"){
        divInfantil.setAttribute("hidden","");
        divInfantil.setAttribute("disabled","");

    }else if(literatura.value == "adulta"){
        divInfantil.setAttribute("hidden","");
        divInfantil.setAttribute("disabled","");

    }else{
        divInfantil.removeAttribute("hidden");
        divInfantil.removeAttribute("disabled");

    }

}

function recogerFormulario(){
    let literatura = document.getElementById("literatura");
    let edadRecomendada = document.getElementById("edadRecomendada");
    let observaciones = document.getElementById("observaciones");

    let nombre = document.getElementById("nombre");
    let identificador = document.getElementById("identificador");
    let anoPublicacion = document.getElementById("anoPublicacion");
    let nCopias = document.getElementById("nCopias");

    let boton = document.getElementById("submit");
    boton.addEventListener("click", event => {
        todoCorrecto = true;
        //edadRecomendada, observaciones, nombre, identificador, anoPublicacion, nCopias
        //edadRecomendada
        if (edadRecomendada.value < 1 && edadRecomendada.value > 10) {
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Necesita un número entre 1 y 10</p>";   

        }else{
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Falta la edad recomendada</p>";
            
        }
        
        //Obervaciones
        if (observaciones.value.length > 150) {
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Se ha superado el límite de 150 caracteres.</p>";

        }else {
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Falta la edad recomendada</p>";

        }

        //nombre
        while(!nombre.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Falta el nombre del libro</p>";
       
        }

        //identificador
        if (identificador.validity.patternMismatch) {
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Formato incorrecto</p>";

        }else{
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Falta el identificador</p>";

        }
        
        
        //anoPublicacion
        while((anoPublicacion.value).split("-")[0] > new Date().getFullYear()) {
            todoCorrecto = false;
            event.preventDefault();
            anoPublicacion.style.borderColor = "red"
            textoVentana += "<p>Año incorrecto</p>";

        }

        //nCopias
        if (nCopias.value.length > 2) {
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Necesita menos de 2 cifras.</p>";  

        }else{
            todoCorrecto = false;
            event.preventDefault();
            textoVentana += "<p>Falta el número de copias</p>";

        }


        if(todoCorrecto == true){           
            let libro = {
                literatura: literatura.value,
                edadRecomendada: edadRecomendada.value,
                observaciones: observaciones.value,

                nombre: nombre.value,
                identificador: identificador.value,
                anoPublicacion: (anoPublicacion.value).split("-")[0],
                nCopias: nCopias.value,
               
                nuevaFecha: new Date()
            }
            
            document.querySelector("seccion2").innerHTML = JSON.stringify(libro)

        }
    
    });

}



//Seccion2-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function seccionDos(){
    let desplegable = document.getElementById("literatura");
    let informacion = document.getElementById("seccion2");
    informacion.innerHTML = "Los libros de tipo "+desplegable.value;
    for (let index = 0; index < ArrayLibros.length; index++) {
        if (desplegable.value == ArrayLibros[index].Literatura) {
            informacion.innerHTML = "<div class='span'><p>"
            +ArrayLibros[index].Nombre+"</p><span class=tooltiptext>Hay disponibles "
            +ArrayLibros[index].NumeroCopias+" ejemplar/es.</span></div><br>";

        }else{
           informacion.innerHTML += "<div class='span'><p>"
           +ArrayLibros[index].Nombre+"</p><span class=tooltiptext>Hola</span></div><br>"; 
        }
   }   
}



//Seccion3-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function imprimirMensajeFecha() {
    let seccion = document.getElementById("seccion3");
    let dia = new Date().getDay();
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let button = document.getElementById("buton1");

    if((dia >= 1 && dia <= 5) && (hora >= 9 && hora <= 19) && (minuto >= 0 && minuto <= 59)){
        seccion.innerHTML = "Sección de alta abierta";
        
    }

    if(dia == 6 || dia == 0){
        seccion.innerHTML = "En días festivos no es posible dar de alta nuevos libros";
        button.disabled = true;

    }
    
    if((dia >= 1 && dia <= 5) && (hora >= 19 && hora <= 9) && (minuto >= 0 && minuto <= 59)){
        seccion.innerHTML = "Está fuera de horario. Solo es posible dar de alta libros de lunes a viernes de 9:00 a 19:00";
        button.disabled = true; 

    }
    

}

window.onload = function() {
    seccion3();
    setInterval(seccionTres, 60000);
}

//VentanaEmergente-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function(){
    let ventana = window.opener;
    let cuerpo = document.getElementsByTagName("body");
    cuerpo[0].innerHTML = ventana.recuperarAlertas();

}
