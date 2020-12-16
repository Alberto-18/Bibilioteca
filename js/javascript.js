var cantidadFruta = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var precioTotal = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

var precioFruta = new Array(1.1, 1.2 , 1.3, 1.4 ,1.5, 1.6, 1.7, 1.8, 1.9, 1.99);
var nombreFruta = new Array("Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja" );

var precioTotal = 0;
var precioMedio = 0;


class Fruta{
    constructor(kilos, precio, nombre){
        this.kilos = kilos;
        this.precio = precio;
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    getKilos(){
        return this.kilos;
    }

    getPrecio(){
        return this.precio;
    }
                    
    sumarKilos(kilos){
        this.kilos += kilos;
    }

}


class FrutaVerano extends Fruta{
    constructor(kilos, precio, nombre, region){
        super(kilos, precio, nombre);
        this.region = region;

    }

}

class FrutaInvierno extends Fruta{
    constructor(kilos, precio, nombre, region){
        super(kilos, precio, nombre);
        this.region = region;

    }

}

//"Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja"
function fruta(frutas){
    let cesta = document.getElementById("cesta");
    let texto = document.createTextNode( kilos + " de " + frutas );
    parrafo.appendChild(texto);


    switch(frutas){
        case Pera.getNombre():
            Pera.sumarKilos(kilos);
            break;

        case Manzana.getNombre():
            Manzana.sumarKilos(kilos);
            break;

        case Uva.getNombre():
            Uva.sumarKilos(kilos);
            break;

        case Melocoton.getNombre():
            Melocoton.sumarKilos(kilos);
            break;

        case Sandia.getNombre():
            Sandia.sumarKilos(kilos);
            break;

        case Melón.getNombre():
            Melón.sumarKilos(kilos);
            break;

        case Platanos.getNombre():
            Platanos.sumarKilos(kilos);
            break;

        case Kiwi.getNombre():
            Kiwi.sumarKilos(kilos);
            break;

        case Fresa.getNombre():
            Fresa.sumarKilos(kilos);
            break;

        case Naranja.getNombre():
            Naranja.sumarKilos(kilos);
            break;

    }
    
    
}


function funcion(Fruta){
    let fecha = new Date();
    document.getElementById("cesta").value = "Fecha del pedido: " + fecha.toString();

    //"Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja"
    document.getElementById("cesta").value += Pera.getNombre() + Pera.getKilos() + Pera.getPrecio() + Pera.getPrecio() * Pera.getKilos();
    document.getElementById("cesta").value += Manzana.getNombre() + Manzana.getKilos() + Manzana.getPrecio() + Manzana.getPrecio() * Manzana.getKilos() ;
    document.getElementById("cesta").value += Uva.getNombre() + Uva.getKilos() + Uva.getPrecio() + Uva.getPrecio() * Uva.getKilos();
    document.getElementById("cesta").value += Melocoton.getNombre() + Melocoton.getKilos() + Melocoton.getPrecio()+ Melocoton.getPrecio() * Melocoton.getKilos();
    document.getElementById("cesta").value += Sandia.getNombre() + Sandia.getKilos() + Sandia.getPrecio() + Sandia.getPrecio() * Sandia.getKilos() ;
    document.getElementById("cesta").value += Melón.getNombre() + Melón.getKilos() + Melón.getPrecio() + Melón.getPrecio()*Melón.getKilos() ;
    document.getElementById("cesta").value += Platanos.getNombre() + Platanos.getKilos() + Platanos.getPrecio() + Platanos.getPrecio() * Platanos.getKilos();
    document.getElementById("cesta").value += Kiwi.getNombre() + Kiwi.getKilos() + Kiwi.getPrecio() + Kiwi.FresagetPrecio() * Kiwi.getKilos();
    document.getElementById("cesta").value += Fresa.getNombre() + Fresa.getKilos() + Fresa.getPrecio() + Fresa.getPrecio() * Fresa.getKilos();
    document.getElementById("cesta").value += Naranja.getNombre() + Naranja.getKilos()+ Naranja.getPrecio() + Naranja.getPrecio() * Naranja.getKilos();

    var precioTotal = 0;
    var contador = 0;

    //"Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja"
    if(Pera.getKilos() != 0){
        texto += Manzana.getNombre();
        precioTotal += Pera.getKilos() * Pera.getPrecio();
        contador++;

    }

    if(Manzana.getKilos() != 0){
        texto += Manzana.getNombre() ();
        precioTotal += Manzana.getKilos()*Manzana.getPrecio();
        contador++;

    }

    if(Uva.getKilos() != 0){
        texto += Uva.getNombre() ;
        precioTotal += Uva.getKilos() * Uva.getPrecio();
        contador++;

    }

    if(Melocoton.getKilos() != 0){
        texto += Melocoton.getNombre();
        precioTotal += Melocoton.getKilos() * Melocoton.getPrecio();
        contador++;

    }

    if(Sandia.getKilos() != 0){
        texto += Sandia.getNombre();
        precioTotal += Sandia.getKilos() * Sandia.getPrecio();
        contador++;

    }

    if(Melón.getKilos() != 0){
        texto += Melón.getNombre();
        precioTotal += Melón.getKilos() * Melón.getPrecio();
        contador++;

    }

    if(Platanos.getKilos() != 0){
        texto += Platanos.getNombre();
        precioTotal += Platanos.getKilos() * Platanos.getPrecio();

        contador++;
    }

    if(Kiwi.getKilos() != 0){
        texto += Kiwi.getNombre();
        precioTotal += Kiwi.getKilos( )* Kiwi.getPrecio();
        contador++;

    }

    if(Fresa.getKilos() != 0){
        texto += Fresa.getNombre();
        precioTotal += Fresa.getKilos() * Fresa.getPrecio();
        contador++;

    }

    if(Naranja.getKilos() != 0){
        texto += Naranja.getNombre();
        precioTotal += Naranja.getKilos() * Naranja.getPrecio();
        contador++;

    }

}


function enviarDatos() {
    var textoVentana = "";
    if (permitir) {
        textoVentana += new Date()

        for (var i = 0; i < 10; i++) {
            if (almacenObjeto[i] != 0) {
                textoVentana += "<p>" + almacenObjeto[i].nombre + almacenObjeto[i].cantidad + " Kilo" + almacenObjeto[i].precio.toFixed(2) + "€ " + (almacenObjeto[i].cantidad * almacenObjeto[i].precio).toFixed(2) + "€ </p>";
                total += precioTotal[i];
                aux += almacenObjeto[i].cantidad;

            }

            inputs[i].value = "";

        }

        textoVentana += "<p> Precio Total: " + total.toFixed(2) + " Kilo</p>";
        textoVentana += "<p> Precio Medio:" + (total / aux).toFixed(3) + "€</p>";

    }

}



//Formulario ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = () => {
    form = document.getElementById("contenedorF");

    nombre = document.getElementById("nombre");
    nombreError = document.getElementById("errorNombre");

    papellidos = document.getElementById("pApellido");
    papellidosError = document.getElementById("errorPApellido");

    sapellidos = document.getElementById("sApellido");
    sapellidosError = document.getElementById("errorSApellido");

    direccion = document.getElementById("direccion");
    direccionError = document.getElementById("errorDireccion");

    email = document.getElementById("direccionemail");
    emailError = document.getElementById("errorDireccionemail");

    form.addEventListener("submit", (event) => {
        todoCorrecto = true;
        errorNombre.textContent = nombre.validationMessage;
        if (!nombre.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        
        if (!pApellido.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        
        if (!sApellido.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        
        if (!direccion.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        
        if (!direccionemail.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }


        if (todoCorrecto) {
            ventanilla = window.open("./Inicio/VentanaEmergente.html", "pop-up", "width=500px height=500px");
            event.preventDefault();
        }

    });

};

function realizarPedido() {
    

}


function limpiarFormulario() {
    document.getElementById("contenedorF").reset();

}



//Ventana Emergente ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.onload = function() {
    ventaAux = document.getElementsByTagName("form");
    inputs = document.getElementsByTagName("input");

}

function ventanaEmergente() {
      window.open("../Inicio/Emergente.html", "pop-up", "height=500, width=500");

}


window.onload = function() {
    let contenidoVentana=window.opener;
    let cuerpo = document.getElementById("emergente");
    cuerpo.innerHTML=contenidoVentana.enviarDatos();

}