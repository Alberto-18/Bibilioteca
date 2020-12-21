// Formulario----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Seccion 2----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Seccion 3----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function imprimirHoraFecha() {
    let contenedor = document.getElementById("seccion3");
    class Fecha {
        constructor(dia, mes, ano) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    
        static hoy() {
            var fecha = new Date();
            var dia = fecha.getDate();
            var mes = fecha.getMonth() + 1;
            var ano = fecha.getFullYear();
            return new Fecha(dia, mes, ano);
        }
    
        toString(){
            return this.ano;
        }
    }
    
    contenedor.innerHTML(Fecha.hoy());
    
    if(dia == 6 || dia == 0){
        seccion.innerHTML = "En días festivos no es posible dar de alta nuevos libros";
        boton.disabled = true;
    }
  
    if((dia >= 1 && dia <= 5) && (hora >= 9 && hora <= 19)){
        seccion.innerHTML = "Sección de alta abierta";
    }

    if((dia >= 1 && dia <= 5) && (hora >= 19 && hora <= 9)){
        seccion.innerHTML = "Está fuera de horario. Solo es posible dar de alta libros de lunes a viernes de 9:00 a 19:00";
        boton.disabled = true;
    }
}