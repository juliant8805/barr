<?php
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    if (!is_dir("files/"))
        mkdir("files/", 0777);
    $id = $_GET['id'];
     mkdir("files/".$id."/", 0777);
    $name = [];
        foreach ($_FILES as $key => $error) {
            $tmp_name = $_FILES[$key]['tmp_name'];
            $name[$key] = basename($_FILES[$key]['name']);
            move_uploaded_file($tmp_name, "files/".$id."/".$name[$key]);
        }
    $arr = implode(",", $name);
    echo $arr;
} else {
    throw new Exception("Error Processing Request", 1);
}
?>