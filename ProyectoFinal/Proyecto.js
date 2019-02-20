
var acierto = 0;
var fallo = 0;
var elemento;
var contenedor;
var ip = "192.168.4.81";

function cargar() {
cargarHeroes();
cargarVillanos();
GruposdragDrop();
document.getElementById("superheroes").addEventListener("dragover", allowDrop);
document.getElementById("supervillanos").addEventListener("dragover", allowDrop);
hazDraggable();
hazDraggable2();
document.getElementById("superheroes").addEventListener("drop",drop);
document.getElementById("supervillanos").addEventListener("drop",drop);

}


function GruposdragDrop(){

    let grupos = document.getElementsByClassName("marvelG");

    for (let i = 0; i < grupos.length; i++) {
        
        grupos[i].addEventListener("dragover",allowDrop);
        grupos[i].addEventListener("drop",drop);
        
    }

}

/*Funcion que sirve para que celda pueda moverser con el drag & drop*/
function hazDraggable(){
    celdasSuperheroes=document.getElementsByClassName("celda");
    for(var i = 0; i < celdasSuperheroes.length; i++) {
        celdasSuperheroes[i].addEventListener("dragstart", drag);
    }
}
/*Funcion que sirve para que celda pueda moverser con el drag & drop*/
function hazDraggable2(){
    celdasSupervillanos=document.getElementsByClassName("celda2");
    for(var i = 0; i < celdasSupervillanos.length; i++) {
        celdasSupervillanos[i].addEventListener("dragstart", drag);
    }
}

/*Funcion donde llamamos al modelo.php para cargar los hereos de la base de datos */
function cargarHeroes() {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open("GET","http://"+ip+"/ProyectoFinal/Modelo/Modelo.php");
    
    xmlHttp.send(null);
    
    xmlHttp.addEventListener("readystatechange",mostrar);
    
}


/*Funcion donde mostramos los heroes cargados en el div de superheroes */
function mostrar(){

    if(this.readyState == 4 && this.status == 200) {

            var texto =this.responseText;
            
            document.getElementById("superheroes").innerHTML=texto;

    }

    hazDraggable();
    
}


/*Funcion donde llamamos al Modelo2.php para cargar los villanos de la base de datos */
function cargarVillanos() {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open("GET","http://"+ip+"/ProyectoFinal/Modelo/Modelo2.php");
    
    xmlHttp.send(null);
    
    xmlHttp.addEventListener("readystatechange",mostrar2);
    
}
/*Funcion donde mostramos los villanos cargados en el div de superheroes */
function mostrar2(){

    if(this.readyState == 4 && this.status == 200) {

            var texto =this.responseText;
            
            document.getElementById("supervillanos").innerHTML=texto;
    }
    
    
    hazDraggable2();
}


/*function puntos(){


    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open("GET","http://"+ip+"/ProyectoFinal/Modelo/puntuacion.php?IDPuntuacion");
    
    xmlHttp.send(null);
    
    xmlHttp.addEventListener("readystatechange",mostrar2);
}*/



function allowDrop(ev) {

//Permitir que reciba algún elemento
ev.preventDefault();
if (ev.target.getAttribute("draggable") == "true")
    ev.dataTransfer.dropEffect = "none"; 
else 
    ev.dataTransfer.dropEffect = "all";    

}

function drag(ev) {


elemento = this.attributes["name"]["value"];


//Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
ev.dataTransfer.setData("text", ev.target.id);


}

function ganar(){
    acierto++;
    document.getElementById("aciertos").value = acierto;
    
     if(acierto==9){
         alert ("Eres un verdadero Friki\n Aciertos: "+acierto+"\n Fallos: "+fallo);

         acierto=0;
         document.getElementById("aciertos").value = acierto;

         fallo=0;
         document.getElementById("fallos").value = fallo;
         location.reload();
     }
}

function perder(){
    fallo++;
    document.getElementById("fallos").value = fallo;
     if(fallo==3){
        alert ("Has perdido\n Aciertos: "+acierto+"\n Fallos: "+fallo);

        fallo=0;
        document.getElementById("fallos").value = fallo;

        acierto=0;
         document.getElementById("aciertos").value = acierto;
        location.reload();
        
     }
}


function drop(ev) {

 var contenedor = ev.explicitOriginalTarget["id"];
 //Se puede poner this.id para cojer el valor del id del receptor
 //var contenedor = this.id;
 
 var res = contenedor.substring(5, 6);
 
 
 if(res === elemento){
     //aqui pones funcion a documen.getElementbyId("aciertos") y le metes un acierto.
         ganar();
     
 }else{
         perder();
     
 }
 
   
//Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
ev.preventDefault()

//Guardamos el elemento, llamado "text" en una variable.
var data = ev.dataTransfer.getData("text");


//Colgamos el elemeto arrastrado y soltado en el nuevo destino.
ev.target.appendChild(document.getElementById(data));

document.getElementById(data).style.float="none";
document.getElementById(data).style.justifySelf="stretch";

}

window.addEventListener("load",cargar);



