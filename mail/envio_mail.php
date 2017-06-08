<html>
    <head>
        <title>PHPMailer - SMTP (Gmail) advanced test</title>
    </head>
    <body>
        <?php
        //if (isset($_GET['c']) and isset($_GET['p']) and isset($_GET['u'])) {
        //echo $_GET['c'];
        $correo = $_GET['c'];
        $contrasena = $_GET['p'];
        $usuario = $_GET['u'];
        //}
        if ($_GET['ch'] == 'si') :
            $mensaje = 'Hemos recibido una solicitud para restablecer la contraseña asociada a esta dirección de correo electrónico, su nombre de usuario es: ' . $usuario . ' y su nueva contraseña: ' . $contrasena . ' se recomienda cambiarla, link de acceso: https://www.gesstor.com/';
        else:
            $mensaje = 'Bienvenido a Gesstor, su nombre de usuario es: ' . $usuario . ' y su contraseña: ' . $contrasena . ' link de acceso: https://www.gesstor.com/';
        endif;
        $send = mail($correo, 'Usuario Gesstor', $mensaje, 'From:soportegesstor@gmail.com');
        if ($send) :
            echo 'yes';
        else:
            echo 'no';
        endif;
        ?>
    </body>
</html>
