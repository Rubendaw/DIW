
<?php
include "../Modelo/registro.php";
?>


<body id="marvelvsdc">

<div class="container2">
    
    <form method="post" action="">
        <div id="div_login">
            <h1>Inicio Sesión</h1>
            <div>
                <input type="text" class="textbox" id="txt_uname" name="txt_uname" placeholder="Usuario" />
            </div>
            <div>
                <input type="password" class="textbox" id="txt_uname" name="txt_pwd" placeholder="Password"/>
            </div>
            <div>
                <input type="submit" value="Iniciar Sesion" name="sesion" id="sesion" />
                <input type="submit" value="Crear Usuario" name="crear" id="crear" />
            </div>
                
        </div>
    </form>
</div>



    
</body>
</html>