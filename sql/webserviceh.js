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
function PrintFac(referencia) {
    var ref = referencia;
    //var ano2017 = document.getElementById("2017").value;
    //console.log(document.getElementById("2017").checked);
    if (document.getElementById("2017").checked && document.getElementById("2018").checked && document.getElementById("2019").checked){
        var ano = "2017~2018~2019";
    }else if (document.getElementById("2017").checked && document.getElementById("2018").checked){
        var ano = "2017~2018";
    }else if (document.getElementById("2017").checked && document.getElementById("2019").checked){
        var ano = "2017~2019";
    }else if (document.getElementById("2018").checked && document.getElementById("2019").checked){
        var ano = "2018~2019";
    }else if (document.getElementById("2017").checked){
        var ano = "2017";
    }else if (document.getElementById("2018").checked){
        var ano = "2018";
    }else if (document.getElementById("2019").checked){
        var ano = "2019";
    }else{
        alert("Debe seleccionar por lo menos un año");
        return;
    }
    //console.log(ano);
    //MessFac();
    //var an = ano;
    //var urlphp = 'sql/wsFactura.php';
    
    window.open("/barranquilla/sql/wsFactura.php?ref="+ref+"&anos="+ano)
    /*
    var temp = $.ajax({
        url: urlphp,
        data: {ref: ref, ano: ano},
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
    });*/
}