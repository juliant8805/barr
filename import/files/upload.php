<?php
//comprobamos que sea una petición ajax
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $name = [];
    echo "<script>console.log( 'Debug Objects: 1' );</script>";
    if ($_GET["arch"] == 2) {
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "regarchivo1.csv");
        }
        echo "<script>console.log( 'Debug Objects: 2' );</script>";
    } else if ($_GET["arch"] == 1) {
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "regarchivo0.csv");
        }
        echo "<script>console.log( 'Debug Objects: 3' );</script>";
    } else {
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "reg".$key.".csv");
        }
        echo "<script>console.log( 'Debug Objects: 4' );</script>";
    }
    echo "<script>console.log( 'Debug Objects: 5' );</script>";
    //exec('C:\Users\julio_torres\AppData\Local\Programs\Python\Python36-32\python.exe python.py', $out, $res);
    //echo "<script>console.log( 'Debug Objects: ".$res."' );</script>";
    //echo $res;
    
} else {
    echo "<script>console.log( 'Debug Objects: err' );</script>";
    throw new Exception("Error Processing Request", 1);
}
?>