<?php
//comprobamos que sea una petición ajax
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    // Turn off all error reporting
    error_reporting(0);
    $shape = $_POST["param"];
    $connString = 'host=104.154.211.159 dbname=Barranquilla user=postgres password=gesstorB2017';
    $db = pg_connect($connString);
    pg_query($db, "DROP TABLE post_" . $shape . "");
    $result = pg_query($db, "CREATE TABLE post_" . $shape . " AS SELECT * FROM " . $shape. "");
    //print ($result);
    if ($result) {
        pg_query($db, "DROP TABLE " . $shape . "");
        $res = pg_query($db, "CREATE TABLE " . $shape . " AS SELECT * FROM temp_" . $shape . "");
        if ($res) {
            pg_query($db, "DROP TABLE temp_" . $shape . ";");
            echo " ...  " . $shape . "  ...</span></br>";
        } else {
            echo "</br></br><span class='error'>Error al validar " . $shape . "</span>";
        }
    } else {
        echo "</br></br><span class='error'>Ha ocurrido un error con el archivo " . $shape . "</span>";
    }
} else {
    throw new Exception("Error Processing Request", 1);
}
?>