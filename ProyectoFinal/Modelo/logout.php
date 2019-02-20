<?php

// logout
if(isset($_POST['salir'])){
    session_destroy();
    header('Location: ../controlador/Controlador.php');
}
?>