function chargegestor() {
    console.log("3");
    var f = new Date();
    //var hora = f.getHours
    if ((f.getMonth() + 1) < 10) {
        var month = '0' + (f.getMonth() + 1);
    } else {
        var month = (f.getMonth() + 1);
    }
    if (f.getDate() < 10) {
        var day = '0' + f.getDate();
    } else {
        var day = f.getDate();
    }
    if (f.getHours() + 5 < 10) {
        var hour = '0' + (f.getHours() + 5);
    } else {
        var hour = f.getHours() + 5;
    }
    if (f.getMinutes() < 10) {
        var minute = '0' + f.getMinutes();
    } else {
        var minute = f.getMinutes();
    }
    if (f.getSeconds() < 10) {
        var second = '0' + f.getSeconds();
    } else {
        var second = f.getSeconds();
    }
    var fecha = f.getFullYear() + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "Z";
    var arrayResult = '<Transaction xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:user="user" xmlns:gml="http://www.opengis.net/gml" version="1.1.0" service="WFS" xsi:schemaLocation="http://35.184.3.4:8080/geoserver">\
            <Insert xmlns="http://www.opengis.net/wfs">\
                <user:gestor>\
                    <barrio>' + document.getElementById("radbarr").value + '</barrio>\
                    <direccion>' + document.getElementById("raddir").value + '</direccion>\
                    <coordenadas>' + document.getElementById("radcoo").value + '</coordenadas>\
                    <servicio>' + document.getElementById("tiposerviciogesstor").value + '</servicio>\
                    <estrato>' + document.getElementById("radest").value + '</estrato>\
                    <uso>' + document.getElementById("raduso").value + '</uso>\
                    <fecha>' + fecha + '</fecha>\
                </user:gestor>\
            </Insert>\
        </Transaction>';
    //rooturl = 'http://35.184.3.4:8080/geoserver/user/ows?';
    var res = $.ajax({
        type: "POST",
        url: rooturl,
        dataType: "xml",
        contentType: "text/xml",
        async: false,
        data: arrayResult,
        success: function (xml) {
            //console.log(xml);
            //alert('success');
        },
        error: function (xml) {
            console.log('error');
        }
        //console.log(arrayResult);
    });
    console.log(res);
}