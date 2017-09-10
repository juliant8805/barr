<?php
//comprobamos que sea una petición ajax
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    //comprobamos si existe un directorio para subir el archivo
    //si no es así, lo creamos
    //if (!is_dir("files/"))
    //    mkdir("files/", 0777);
    /*$name = [];
    //print_r ($_FILES);
    if ($_GET["arch"] == 2) {
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "regarchivo1.csv");
        }
    } else if ($_GET["arch"] == 1) {
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "regarchivo0.csv");
        }
    } else {
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            //print_r($tmp_name);
            // basename() may prevent filesystem traversal attacks;
            // further validation/sanitation of the filename may be appropriate
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "reg".$key.".csv");
        }
    }*/
    //print ($_POST["shape"]);
    $shape = $_POST["shape"];
    $connString = 'host=104.154.211.159 dbname=Barranquilla user=postgres password=gesstorB2017';
    $db = pg_connect($connString);
    $result = pg_query($db, "SELECT ST_GeometryType(geom) FROM temp_".$shape." LIMIT 1");
    $select = pg_fetch_row($result);
    print ($select[0]);
    $sel = explode("_", $select[0]);
    //var sel = select[0][0].split("_");
    pg_exec($db, "ALTER TABLE temp_".$shape." ALTER COLUMN geom TYPE geometry");
    pg_exec($db, "UPDATE temp_".$shape." SET geom = ST_Transform(geom, 4326)");
    pg_exec($db, "ALTER TABLE temp_".$shape." ALTER COLUMN geom TYPE geometry('".$sel[1]."', 4326)");
    //select_query("ALTER TABLE temp_" + shape + " ALTER COLUMN geom TYPE geometry;UPDATE temp_" + shape + " SET geom = ST_Transform(geom, 4326);ALTER TABLE temp_" + shape + " ALTER COLUMN geom TYPE geometry('" + sel[1] + "', 4326);");
    echo $sel[1];
    
    //exec("python.py");
    /*$arr = implode(",", $name);
    $query = 'psql -h 104.154.211.159 -d Barranquilla -U postgres -c "copy reg1 from STDIN with delimiter as ';';" < C:/Bitnami/wampstack-5.6.30-2/apache2/htdocs/barranquilla/import/files/re1.csv';
    print_r ($query);
    exec($query);*/
} else {
    throw new Exception("Error Processing Request", 1);
}
?>