<?php
//comprobamos que sea una petición ajax
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    // Turn off all error reporting
    error_reporting(0);
    $shape = $_POST["param"];
    $connString = 'host=104.154.211.159 dbname=Barranquilla user=postgres password=gesstorB2017';
    $db = pg_connect($connString);
    pg_query($db, "DROP TABLE " . $shape . "");
    $result = pg_query($db, "CREATE TABLE " . $shape . " AS SELECT * FROM post_" . $shape . "");
    //print ($result);
    if ($result) {
        $res = pg_query($db, "DROP TABLE post_" . $shape . "");
        if ($res) {
            echo "1& ...  " . $shape . "  ...</span></br>";
        } else {
            echo "2&</br></br><span class='error'>Error al validar " . $shape . "</span>";
        }
    } else {
        echo "2&</br></br><span class='error'>Error al deshacer cambios del archivo " . $shape . "</span>";
    }
} else {
    throw new Exception("Error Processing Request", 1);
}
?>