
document.getElementById("lapiz").addEventListener("click", habilitar,false);



function habilitar(){
    document.getElementById("DNI").disabled=false;
    document.getElementById("NOMBRE").disabled=false;
    document.getElementById("APELLIDOS").disabled=false;
    document.getElementById("lapiz").disabled=true;
}

