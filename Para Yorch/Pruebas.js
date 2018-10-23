function lanzar() {
    var array = document.getElementsByTagName("p");

    for (let index = 0; index < array.length; index++) {
        alert(array[index].innerText);

    }
}


function boton(){

        var res = document.getElementById("mono");
        var p = document.createElement("p");
        var texto = document.createTextNode("Hola que tal");
        p.appendChild(texto);
        res.appendChild(p);


    
}