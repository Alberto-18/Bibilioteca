//Seccion1-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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
           informacion.innerHTML += "<div class='span'><p>"+ArrayLibros[index].Nombre+"</p><span class=tooltiptext>Hola</span></div><br>"; 
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
