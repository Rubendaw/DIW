<?php
    //Esto es modelo
    $servidor = "localhost"; 
    $username = "daw";
    $password = "daw";
    $basedatos = "Heroes";
    
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);

    $consulta ="SELECT * FROM SuperHeroes ";
   
    $result = mysqli_query($conn, $consulta);
  
    while ($fila = mysqli_fetch_array($result)) { ?>
                    
        <div class='nido'>
            <div draggable='true' class='celda superHeroe' id='<?php echo $fila['Nombre']; ?>' name='<?php echo $fila['IDGrupo']; ?>'>
            </div>
        </div>
    
    <?php
    }
    
    mysqli_close($conn);
   
?> 
