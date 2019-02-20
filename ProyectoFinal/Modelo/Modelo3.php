<?php
    //Esto es modelo
    $servidor = "localhost"; 
    $username = "daw";
    $password = "daw";
    $basedatos = "Heroes";

    //$IDHeroes = $_GET["IDHeroes"];
    
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);

    $consulta = "SELECT * FROM Grupos WHERE IDGrupo ";
   
    $result = mysqli_query($conn, $consulta);
  

    while ($fila = mysqli_fetch_array($result)) {
        

            
            echo $fila['IDGrupo'];
          
    }
    
    mysqli_close($conn);
   
?>