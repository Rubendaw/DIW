    <!---
        Esto es vista
    Este archivo cambiarlo al php con un html dentro
    -->
    <?php
    session_start();
    include ("head.php");
    if(isset($_SESSION['Nombre'])){
        $mensaje ="Hola terricola " . $_SESSION['Nombre'];
    }
    

    ?>

    
    <body >
        
        
        <div id="contenedor">
        
        
            

            <div id="superheroes" >
                <div id="imagenheroes">

                </div>
            </div>

            <div id="Universos">

            <form method='post' action="../Modelo/logout.php">
                <input id="saludo" type="text" value='<?php echo $mensaje ?>' disabled>
                <input type="submit" value="Salir" name="salir" id="salir">
            </form>             


            <input type="text" id="aciertos" disabled>

            <input type="text" id="fallos" disabled>

                <div id="tituloMarvel">
                <!-- Esto es container--->
                    <div id="logoMarvel"></div>
                    <!--<img src="imagenes/marvel3.png">-->

                    <div id ="Marvel">

                
                        <!-- Esto es gallery--->
                        
                        <div class="marvelG"  id="Grupo1">
                           
                        </div>
                        <div class="marvelG" id="Grupo2">
                            
                            
                        </div>
                        <div class="marvelG" id="Grupo3">
                            
                            
                        </div>
                        <div class="marvelG" id="Grupo4">
                            
                            
                        </div>
                    </div>
                </div>
                <div id="tituloDC">   
                <div id="logoDC"></div> 
                    
                    <div id ="DCComics">
                            
                        <div class="marvelG" id="Grupo5">
                           
                            
                        </div>
                        <div class="marvelG" id="Grupo6">
                            
                            
                        </div>
                        <div class="marvelG" id="Grupo7">
                            
                            
                        </div>
                        <div class="marvelG" id="Grupo8">
                            
                        </div>
                    </div>
                    
                </div>
                

            </div>
            <div id="supervillanos" >
                
                   
            </div>
        </div>
        
</body>
</html>

