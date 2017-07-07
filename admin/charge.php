<?php

$fichero = 'ejemplo.txt';
$nuevo_fichero = 'ejemplo1234.txt.bak';
if (!copy($fichero, $nuevo_fichero)) {
    echo "Error al copiar $fichero...\n";
}
?>