<?php


$ftp_server = "35.184.79.25";
$ftp_user_name = "licencia_arcgis";
$ftp_user_pass = "60!#-}s2=M\D+-M";
$destination_file = "img/tarea.bat";
$source_file = "tarea.bat";
 
// conexión
$conn_id = ftp_connect($ftp_server); 
 
// logeo
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass); 
 
// conexión
if ((!$conn_id) || (!$login_result)) { 
       echo "Conexión al FTP con errores!";
       echo "Intentando conectar a $ftp_server for user $ftp_user_name"; 
       exit; 
   } else {
       echo "Conectado a $ftp_server, for user $ftp_user_name";
   }
 
// archivo a copiar/subir
$upload = ftp_put($conn_id, $destination_file, $source_file, FTP_BINARY);
 
// estado de subida/copiado
if (!$upload) { 
       echo "Error al subir el archivo!";
   } else {
       echo "Archivo $source_file se ha subido exitosamente a $ftp_server en $destination_file";
   }
 
// cerramos
ftp_close($conn_id);


//if (isset($_POST['ref'])) {
    $imagen = file_get_contents("tarea.bat");
    $save = file_put_contents('http://35.184.79.25/tarea.bat',$imagen);
    /*
    $fichero = 'tarea.bat';
    $nuevo_fichero = 'tarea123.bat';
    if (!copy($fichero, $nuevo_fichero)) {
        echo "Error al copiar $fichero...\n";
    }*/
//}
?>