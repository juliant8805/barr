function enviarRef(referencia) {
    var ref = referencia;
    var urlphp = 'sql/webserviceh.php';
    //var url = urlphp + "?ref=" + ref;  
    var temp = $.ajax({
        url: urlphp,
        data: {ref: ref},
        type: "POST",
        //dataType: "json",
        async: false,
        success: function (data, status, xhr) {},
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            console.log(exception);
        }
    });
    var cadena = temp.responseText;
    separador = "%%", // un espacio en blanco
            arregloDeSubCadenas = cadena.split(separador);
    return arregloDeSubCadenas;
}
function PrintFac(refrencia, ano){
     var ref = referencia;
     var an = ano;
    var urlphp = 'sql/wsFactura.php';
    var temp = $.ajax({
        url: urlphp,
        data: {ref: ref, ano:an},
        type: "POST",
        //dataType: "json",
        async: false,
        success: function (data, status, xhr) {
            console.log("exito fac");
        },
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            console.log(exception);
        }
    });
}