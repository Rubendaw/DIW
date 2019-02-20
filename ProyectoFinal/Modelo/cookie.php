<html>

    <head>
        <meta charset="UTF-8">
    </head>

        <body>

            <?php

                $name="usuario";
                $value=12;
                $experies=time()+1000;
                $path="/";
                $domain="";
                $secure=false;
                $HttpOnly=true;

                setcookie($name,$value,$experies,$path,$domain,$secure,$HttpOnly);

                //echo ("Cookie enviada");

            ?>

        </body>

</html>