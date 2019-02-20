<?php

session_start();
include ("ModeloLogin.php");

if(isset($_POST['sesion'])){

    $uname = mysqli_real_escape_string($conn,$_POST['txt_uname']);
    $password = mysqli_real_escape_string($conn,$_POST['txt_pwd']);


    if ($uname != "" && $password != ""){

        $consulta = "select count(*) as cntUser from Usuarios where Nombre='".$uname."' and Password='".$password."'";
       
        $result = mysqli_query($conn,$consulta);

        $row = mysqli_fetch_array($result);

        $count = $row['cntUser'];

        if($count > 0){
            $_SESSION['Nombre'] = $uname;
            header('Location: ../Vista/Vista.php');
        }
        
        else{
            echo '<script language="javascript">alert("Nombre de Usuario o Password incorrectos");</script>'; 
        }

    }
    else{
        echo '<script language="javascript">alert("Introduzca Usuario y Password");</script>'; 
        }
    }
   

if(isset($_POST['crear'])){

    $crear_nombre = mysqli_real_escape_string($conn, $_POST['txt_uname']);
    $crear_contrasenia = mysqli_real_escape_string($conn, $_POST['txt_pwd']);

    if($crear_nombre != "" && $crear_contrasenia != ""){

        $comprobar="SELECT Nombre FROM Usuarios WHERE Nombre='$crear_nombre'";

        
        $result = mysqli_query($conn,$comprobar);

        if(mysqli_num_rows($result)>=1){
            echo '<script language="javascript">alert("El Usuario ya existe");</script>'; 
        }

        else{

            $consulta = "INSERT INTO Usuarios(Nombre, Password) VALUES ('$crear_nombre', '$crear_contrasenia')";

            $result = mysqli_query($conn,$consulta);

            echo '<script language="javascript">alert("Usuario Creado");</script>';

        }

    }
    else{
        echo '<script language="javascript">alert("Rellene los campos Usuario y Password");</script>';
    }

}
?>