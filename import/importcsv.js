$(document).ready(function () {

    $(".messages").hide();
    //función que observa los cambios del campo file y obtiene información
    $(':file').change(function ()
    {
        //obtenemos un array con los datos del archivo
        if ($("#file1")[0].files.length > 0) {
            var file1 = $("#file1")[0].files;
            var html1 = "<span class='info'>Archivo a subir</br>";
            var fileName1 = file1[0].name;
            var fileSize1 = file1[0].size;
            html1 += 1 + ") Nombre: " + fileName1 + ", peso total: " + fileSize1 + " bytes.</span></br>";
            $(':button').removeAttr("disabled");
            //$(':button').attr("disabled","true");
            showMessage1(html1);
        }
        if ($("#file2")[0].files.length > 0) {
            var file2 = $("#file2")[0].files;
            var html2 = "<span class='info'>Archivo a subir</br>";
            var fileName2 = file2[0].name;
            var fileSize2 = file2[0].size;
            html2 += 1 + ") Nombre: " + fileName2 + ", peso total: " + fileSize2 + " bytes.</span></br>";
            $(':button').removeAttr("disabled");
            showMessage2(html2);
        }
    });
    //al enviar el formulario
    $('#btonsubircsv').click(function () {
        var message = "";
        var archiv = document.getElementById("file1");
        var archivo = archiv.files;
        var archivos = new FormData();
        var archiv2 = document.getElementById("file2");
        var archivo2 = archiv2.files;
        //console.log(archivo);
        //console.log(archivo2);
        if (archivo.length === 1 && archivo2.length === 1){
            var arch = 0;
        }else if (archivo.length === 1){
            var arch = 1;
        }else if (archivo2.length === 1){
            var arch = 2;
        }
        /*
         var archivos = document.getElementById("file1");//Creamos un objeto con el elemento que contiene los archivos: el campo input file
         var archivo = archivos.files; //Obtenemos los archivos seleccionados en el imput
         //Creamos una instancia del Objeto FormDara.
         var archivos = new FormData();
         /* Como son multiples archivos creamos un ciclo for que recorra la el arreglo de los archivos seleccionados en el input
         Este y añadimos cada elemento al formulario FormData en forma de arreglo, utilizando la variable i (autoincremental) como 
         indice para cada archivo, si no hacemos esto, los valores del arreglo se sobre escriben*/
        archivos.append('archivo' + 0, archivo[0]); //Añadimos cada archivo a el arreglo con un indice direfente
        archivos.append('archivo' + 1, archivo2[0]);
        //hacemos la petición ajax  
        $.ajax({
            url: 'import/files/upload.php?arch=' + arch,
            type: 'POST',
            // Form data
            //datos del formulario
            data: archivos,
            //necesario para subir archivos via ajax
            cache: false,
            contentType: false,
            processData: false,
            //mientras enviamos el archivo
            beforeSend: function () {
                message = $("<span class='before'>Subiendo los archivos, por favor espere...</span>");
                showMessage(message);
            },
            //una vez finalizado correctamente
            success: function (data) {
                var message = $("<span class='success'>Archivos subidos correctamente.</span>");
                showMessage(message);
                $('#chargecsv').modal('hide');
                alert("Solicitud aceptada, en 24 horas se veran reflejados los cambios en la plataforma</br>");
            },
            //si ha ocurrido un error
            error: function () {
                var message = $("<span class='error'>Ha ocurrido un error.</span>");
                showMessage(message);
            }
        });
    });
    $(".modal fade").change(function () {
        alert("d.");
    });
});
$(".modal fade").change(function () {
    alert("Handler for .change() called.");
});
//como la utilizamos demasiadas veces, creamos una función para 
//evitar repetición de código
function showMessage(message) {
    $(".messages").html("").show();
    $(".messages").html(message);
}
function showMessage1(message) {
    $(".message1").html("").show();
    $(".message1").html(message);
}
function showMessage2(message) {
    $(".message2").html("").show();
    $(".message2").html(message);
}
function readFile(file, onLoadCallback) {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.onprogress = file;
    reader.readAsText(file);
}
function validate(validar) {
    var table = document.getElementById("table");
    table.innerHTML = "";
    //$("table").children().remove()
    if (validar === "valid") {
        //var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%' ORDER BY table_name");
        var select = search("preproduccion:CountTable", 'temp_%');
        //var sel = [];
        //console.log(select);
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = " SHAPE ";
        cell2.innerHTML = " VALIDAR ";
        //filas=table.getRowCount();
        for (i = 1; i <= select.length; i++) {
            //sel[i - 1] = select[i - 1][0];
            row = table.insertRow(i);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell1.target = "marco";
            cell1.innerHTML = select[i - 1][0].split('temp_')[1].link("http://35.184.3.4:8080/geoserver/preproduccion/wms?service=WMS&version=1.1.0&request=GetMap&layers=preproduccion:" + select[i - 1][0] + "&styles=&bbox=-74.878721,10.9183800000001,-74.7586219999999,11.0510640000001&width=695&height=768&srs=EPSG:4326&format=application/openlayers");
            cell1.getElementsByTagName("a")["0"].target = "_blank";
            //console.log(cell1.getElementsByTagName("a"));
            //console.log(cell1);
            var element1 = document.createElement("input");
            element1.type = "checkbox";
            element1.id = select[i - 1][0];
            //element1.setAttribute("onchange", "toggleSelect(" + select[i - 1][0] + ")");
            //element1.setAttribute("onchange", "toggleSelect()");
            cell2.appendChild(element1);
        }
        document.getElementById("mbutt").setAttribute("onclick", "valshp(" + 0 + ")");
        /*
         var row = table.insertRow(0);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         cell1.innerHTML = "Quiero insertar input text aaqui";
         cell2.innerHTML = "Aqui tambien";
         */
    } else if (validar === "deshacer") {
        var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'post_%' ORDER BY table_name");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = " SHAPE ";
        cell2.innerHTML = " DESHACER ";
        for (i = 1; i <= select.length; i++) {
            row = table.insertRow(i);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell1.target = "marco";
            cell1.innerHTML = select[i - 1][0].split('post_')[1];
            var element1 = document.createElement("input");
            element1.type = "checkbox";
            element1.id = select[i - 1][0];
            cell2.appendChild(element1);
        }
        document.getElementById("mbutt").setAttribute("onclick", "valshp(" + 1 + ")");
    }
}
//function toggleSelect(){

/*console.log(sel.checked);
 console.log(sel.id);
 console.log(document.getElementById(sel[0]));
 for (i = 0; i <= sel.length; i++) {
 
 }*/
//}
function valshp(valor) {
    if (valor === 0) {
        var html = "<span class='info'>Archivos validados con exito</br>";
        var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%' ORDER BY table_name");
        for (i = 0; i < select.length; i++) {
            //console.log(document.getElementById(select[i][0]));
            if (document.getElementById(select[i][0]).checked === true) {
                //console.log(select[i][0].split('temp_')[1]);
                update_query("DROP TABLE post_" + select[i][0].split('temp_')[1] + ";");
                //var up = update_query("ALTER TABLE " + select[i][0].split('temp_')[1] + " RENAME TO post_" + select[i][0].split('temp_')[1] + ";");
                var up = update_query("CREATE TABLE post_" + select[i][0].split('temp_')[1] + " AS SELECT * FROM " + select[i][0].split('temp_')[1] + ";");
                //console.log(select[i][0]);
                //console.log(up);
                if (up) {
                    //var lo = update_query("CREATE TABLE " + select[i][0].split('temp_')[1] + " .FROM temp_" + select[i][0].split('temp_')[1] + ";");
                    update_query("DROP TABLE " + select[i][0].split('temp_')[1] + ";");
                    var lo = update_query("CREATE TABLE " + select[i][0].split('temp_')[1] + " AS SELECT * FROM temp_" + select[i][0].split('temp_')[1] + ";");
                    if (lo) {
                        update_query("DROP TABLE temp_" + select[i][0].split('temp_')[1] + ";");
                        //mensaj.innerHTML += "<br>" + select[i][0].split('temp_')[1];  // Agrego nueva linea antes
                        //message += $("<span class='success'>El archivo " + select[i][0].split('temp_')[1] + "fue validado con exito</span>");
                        html += " ...  " + select[i][0].split('temp_')[1] + "  ...</span></br>";
                        mns(html);
                        //console.log(a);
                        //var mns = document.getElementById("mns");
                    } else {
                        var message = $("</br></br><span class='error'>Error al validar " + select[i][0].split('temp_')[1] + "</span>");
                        mn(message);
                    }
                } else {
                    var message = $("</br></br><span class='error'>Ha ocurrido un error con el archivo " + select[i][0].split('temp_')[1] + "</span>");
                    mn(message);
                }
                document.getElementById("deshacer").style.display = "block";
            }
        }
        validate('valid');
    } else if (valor === 1) {
        var html = "<span class='info'>Archivos validados con exito</br>";
        var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'post_%' ORDER BY table_name");
        for (i = 0; i < select.length; i++) {
            if (document.getElementById(select[i][0]).checked === true) {
                update_query("DROP TABLE " + select[i][0].split('post_')[1] + ";");
                var up = update_query("CREATE TABLE " + select[i][0].split('post_')[1] + " AS SELECT * FROM post_" + select[i][0].split('post_')[1] + ";");
                if (up) {
                    var lo = update_query("DROP TABLE post_" + select[i][0].split('post_')[1] + ";");
                    if (lo) {
                        html += " ...  " + select[i][0].split('post_')[1] + "  ...</span></br>";
                        mns(html);
                    } else {
                        var message = $("</br></br><span class='error'>Error al validar " + select[i][0].split('post_')[1] + "</span>");
                        mn(message);
                    }
                } else {
                    var message = $("</br></br><span class='error'>Ha ocurrido un error con el archivo " + select[i][0].split('post_')[1] + "</span>");
                    mn(message);
                }
            }
        }
        validate('deshacer');
    }
}
function mns(message) {
    $(".message").html("").show();
    $(".message").html(message);
}
function mn(message) {
    $(".messag").html("").show();
    $(".messag").html(message);
}
