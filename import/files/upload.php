<?php

//comprobamos que sea una petición ajax
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $name = [];
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
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "reg" . $key . ".csv");
        }
    }
    exec('C:\Users\julio_torres\AppData\Local\Programs\Python\Python36-32\python.exe python.py', $out, $res);
    $connString = 'host=104.154.211.159 dbname=Barranquilla user=postgres password=gesstorB2017';
    $db = pg_connect($connString);
    $file = file('C:\Bitnami\wampstack-5.6.30-2\apache2\htdocs\barranquilla\import\files\reg1.csv');
    pg_exec($db, "DELETE FROM reg1");
    pg_exec($db, "COPY reg1 FROM stdin");
    foreach ($file as $line) {
        $tmp = explode(";", $line);
        pg_put_line($db, $tmp[0] . "\t" . $tmp[1] . "\t" . $tmp[2] . "\t" . $tmp[3] . "\t" . $tmp[4] . "\t" . $tmp[5] . "\t" . $tmp[6] . "\t" . $tmp[7] . "\t" . $tmp[8] . "\t" . $tmp[9] . "\t" . $tmp[10] . "\t" . $tmp[11] . "\t" . $tmp[12] . "\t" . $tmp[13] . "\t" . $tmp[14] . "\t" . $tmp[15] . "\t" . $tmp[16] . "\t" . $tmp[17]);
    }
    pg_end_copy($db);
    $file = file('C:\Bitnami\wampstack-5.6.30-2\apache2\htdocs\barranquilla\import\files\reg2.csv');
    pg_exec($db, "DELETE FROM reg2");
    pg_exec($db, "COPY reg2 FROM stdin");
    foreach ($file as $line) {
        $tmp = explode(";", $line);
        pg_put_line($db, $tmp[0] . "\t" . $tmp[1] . "\t" . $tmp[2] . "\t" . $tmp[3] . "\t" . $tmp[4] . "\t" . $tmp[5] . "\t" . $tmp[6] . "\t" . $tmp[7] . "\t" . $tmp[8] . "\t" . $tmp[9] . "\t" . $tmp[10] . "\t" . $tmp[11] . "\t" . $tmp[12] . "\t" . $tmp[13] . "\t" . $tmp[14] . "\t" . $tmp[15] . "\t" . $tmp[16] . "\t" . $tmp[17] . "\t" . $tmp[18] . "\t" . $tmp[19] . "\t" . $tmp[20] . "\t" . $tmp[21] . "\t" . $tmp[22] . "\t" . $tmp[23] . "\t" . $tmp[24] . "\t" . $tmp[25] . "\t" . $tmp[26] . "\t" . $tmp[27] . "\t" . $tmp[28] . "\t" . $tmp[29] . "\t" . $tmp[30] . "\t" . $tmp[31] . "\t" . $tmp[32] . "\t" . $tmp[33] . "\t" . $tmp[34] . "\t" . $tmp[35] . "\t" . $tmp[36] . "\t" . $tmp[37] . "\t" . $tmp[38] . "\t" . $tmp[39] . "\t" . $tmp[40] . "\t" . $tmp[41] . "\t" . $tmp[42] . "\t" . $tmp[43] . "\t" . $tmp[44]);
    }
    pg_end_copy($db);
    pg_query($db, "BEGIN; COMMIT;\n" . file_get_contents('C:\Bitnami\wampstack-5.6.30-2\apache2\htdocs\barranquilla\import\files\query.sql'));
    pg_close($db);
    echo "exito";
} else {
    echo "error";
    throw new Exception("Error Processing Request", 1);
}
?>