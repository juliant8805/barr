window.onload = function () {
    var ca = document.cookie.split('=');
    try {
        var select = search("preproduccion:ValidateUser", ca[0], ca[1], 't');
    } catch (err) {
    }
    if (navigator.vendor !== "Google Inc.") {
        location.href = "barranquilla.html?ig=navegador";
    }
    if (select === undefined) {
        location.href = "barranquilla.html";
    }
};
function changeprofile(){
    console.log(document.getElementById("dependencia").value);
    if (document.getElementById("dependencia").value !== ""){
        $("#labelP").removeAttr("hidden").show();
        $("#table").removeAttr("hidden").show();
    }else if(document.getElementById("dependencia").value === ""){
        $("#labelP").hide();
        $("#table").hide();
    }
    if (document.getElementById("dependencia").value === "Planeación"){
        $("#th1").hide();
        $("#th11").hide();
        $("#th12").hide();
        $("#c11").hide();
        $("#c12").hide();
        $("#th2").removeAttr("hidden").show();
        $("#th21").removeAttr("hidden").show();
        $("#th22").removeAttr("hidden").show();
        $("#th23").removeAttr("hidden").show();
        $("#c21").removeAttr("hidden").show();
        $("#c22").removeAttr("hidden").show();
        $("#c23").removeAttr("hidden").show();
        $("#th3").hide();
        $("#th31").hide();
        $("#th32").hide();
        $("#c31").hide();
        $("#c32").hide();
        $("#th4").hide();
        $("#c4").hide();
        $("#th5").hide();
        $("#c5").hide();
        $("#th6").hide();
        $("#c6").hide();
        document.getElementById("sui").className = "btn btn-warning";
        document.getElementById("planeacion").className = "btn btn-primary";
        document.getElementById("planeacionConsul").className = "btn btn-success";
    }else if (document.getElementById("dependencia").value === "Hacienda"){
        $("#th1").hide();
        $("#th11").hide();
        $("#th12").hide();
        $("#c11").hide();
        $("#c12").hide();
        $("#th2").hide();
        $("#th21").hide();
        $("#th22").hide();
        $("#th23").hide();
        $("#c21").hide();
        $("#c22").hide();
        $("#c23").hide();
        $("#th3").removeAttr("hidden").show();
        $("#th31").removeAttr("hidden").show();
        $("#th32").removeAttr("hidden").show();
        $("#c31").removeAttr("hidden").show();
        $("#c32").removeAttr("hidden").show();
        $("#th4").hide();
        $("#c4").hide();
        $("#th5").hide();
        $("#c5").hide();
        $("#th6").hide();
        $("#c6").hide();
    }else if (document.getElementById("dependencia").value === "Catastro"){
        $("#th1").removeAttr("hidden").show();
        $("#th11").removeAttr("hidden").show();
        $("#th12").removeAttr("hidden").show();
        $("#c11").removeAttr("hidden").show();
        $("#c12").removeAttr("hidden").show();
        $("#th2").hide();
        $("#th21").hide();
        $("#th22").hide();
        $("#th23").hide();
        $("#c21").hide();
        $("#c22").hide();
        $("#c23").hide();
        $("#th3").hide();
        $("#th31").hide();
        $("#th32").hide();
        $("#c31").hide();
        $("#c32").hide();
        $("#th4").hide();
        $("#c4").hide();
        $("#th5").hide();
        $("#c5").hide();
        $("#th6").hide();
        $("#c6").hide();
    }else if (document.getElementById("dependencia").value === "GESSTOR"){
        $("#th1").hide();
        $("#th11").hide();
        $("#th12").hide();
        $("#c11").hide();
        $("#c12").hide();
        $("#th2").hide();
        $("#th21").hide();
        $("#th22").hide();
        $("#th23").hide();
        $("#c21").hide();
        $("#c22").hide();
        $("#c23").hide();
        $("#th3").hide();
        $("#th31").hide();
        $("#th32").hide();
        $("#c31").hide();
        $("#c32").hide();
        $("#th4").hide();
        $("#c4").hide();
        $("#th5").removeAttr("hidden").show();
        $("#c5").removeAttr("hidden").show();
        $("#th6").hide();
        $("#c6").hide();
    }else if (document.getElementById("dependencia").value === "Sistemas"){
        $("#th1").hide();
        $("#th11").hide();
        $("#th12").hide();
        $("#c11").hide();
        $("#c12").hide();
        $("#th2").hide();
        $("#th21").hide();
        $("#th22").hide();
        $("#th23").hide();
        $("#c21").hide();
        $("#c22").hide();
        $("#c23").hide();
        $("#th3").hide();
        $("#th31").hide();
        $("#th32").hide();
        $("#c31").hide();
        $("#c32").hide();
        $("#th4").removeAttr("hidden").show();
        $("#c4").removeAttr("hidden").show();
        $("#th5").hide();
        $("#c5").hide();
        $("#th6").hide();
        $("#c6").hide();
    }else if (document.getElementById("dependencia").value === "Totem"){
        $("#th1").hide();
        $("#th11").hide();
        $("#th12").hide();
        $("#c11").hide();
        $("#c12").hide();
        $("#th2").hide();
        $("#th21").hide();
        $("#th22").hide();
        $("#th23").hide();
        $("#c21").hide();
        $("#c22").hide();
        $("#c23").hide();
        $("#th3").hide();
        $("#th31").hide();
        $("#th32").hide();
        $("#c31").hide();
        $("#c32").hide();
        $("#th4").hide();
        $("#c4").hide();
        $("#th5").hide();
        $("#c5").hide();
        $("#th6").removeAttr("hidden").show();
        $("#c6").removeAttr("hidden").show();
    }
}
function Sourceuser(requestString, responseFunc) {
    var querystr = requestString.term.replace(/[^0-9a-zA-Z ]/g, "");
    if (querystr.length === 0) {
        response([]);
        return;
    }
    var viewParamsStr = viewparamsToStr({
        query: querystr
    });
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: 'preproduccion:BuscarUsuario',
        outputFormat: 'application/json',
        srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };
    $.ajax({
        url: url,
        data: wfsParams,
        type: "GET",
        dataType: "json",
        success: function (data, status, xhr) {
            var arr = [];
            for (i = 0; i < data.features.length; i++) {
                arr.push({
                    value: data.features[i].properties.usuario,
                    cargo: data.features[i].properties.cargo,
                    catastroc: data.features[i].properties.catastroc,
                    catastrom: data.features[i].properties.catastrom,
                    dependenci: data.features[i].properties.dependenci,
                    email: data.features[i].properties.email,
                    estado: data.features[i].properties.estado,
                    fechaexp: data.features[i].properties.fechaexp,
                    gestor: data.features[i].properties.gestor,
                    haciendac: data.features[i].properties.haciendac,
                    haciendam: data.features[i].properties.haciendam,
                    nombre: data.features[i].properties.nombre,
                    planeacionc: data.features[i].properties.planeacionc,
                    planeacionm: data.features[i].properties.planeacionm,
                    pot: data.features[i].properties.pot,
                    sistemas: data.features[i].properties.sistemas,
                    sui: data.features[i].properties.sui,
                    id: data.features[i].properties.id

                });
            }
            if (arr.length !== 0) {
                responseFunc(arr);
            } else {
                arr[0] = "No se encuentra informacion asociada a la consulta";
                responseFunc(arr);
            }
        },
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            console.log(exception);
        }
    });
}
function SelectUser(event, ui) {
    var select = [];
    select[0] = [];
    for (j = 0; j < Object.keys(ui.item).length; j++) {
        var a = Object.keys(ui.item)[j];
        select[0][j] = ui.item[a];
    }
    userid = select[0][17];
    document.getElementById('usu').disabled = true;
    document.getElementById('group').style.display = 'block';
    document.getElementById('button').style.display = 'block';
    //document.getElementById('e_nombre1').value = select["0"][0];
    //document.getElementById('e_apellido1').value = select["0"][2];
    //document.getElementById('e_apellido2').value = select["0"][3];
    document.getElementById('e_cargo').value = select[0][1];
    document.getElementById('e_email').value = select[0][5];
    document.getElementById('e_fecha').value = select[0][7].substring(0, 10);
    if (select[0][4] === "Planeación") {
        document.getElementById("e_dependencia").value = "Planeación";
    } else if (select[0][4] === "Catastro") {
        document.getElementById("e_dependencia").value = "Catastro";
    } else if (select[0][4] === "Hacienda") {
        document.getElementById("e_dependencia").value = "Hacienda";
    } else if (select[0][4] === "GESSTOR") {
        document.getElementById("e_dependencia").value = "GESSTOR";
    }
    if (select[0][6] === true) {
        document.getElementById("rad1").checked = true;
    } else {
        document.getElementById("rad2").checked = true;
    }
    if (select[0][3] === true) {
        document.getElementById("catastroE").className = "btn btn-primary active";
    } else {
        document.getElementById("catastroE").className = "btn btn-primary";
    }
    if (select[0][2] === true) {
        document.getElementById("catastroConsulE").className = "btn btn-success active";
    } else {
        document.getElementById("catastroConsulE").className = "btn btn-success";
    }
    if (select[0][16] === true) {
        document.getElementById("suiE").className = "btn btn-warning active";
    } else {
        document.getElementById("suiE").className = "btn btn-warning";
    }
    if (select[0][14] === true) {
        document.getElementById("potE").className = "btn btn-danger active";
    } else {
        document.getElementById("potE").className = "btn btn-danger";
    }
    if (select[0][13] === true) {
        document.getElementById("planeacionE").className = "btn btn-primary active";
    } else {
        document.getElementById("planeacionE").className = "btn btn-primary";
    }
    if (select[0][10] === true) {
        document.getElementById("haciendaE").className = "btn btn-primary active";
    } else {
        document.getElementById("haciendaE").className = "btn btn-primary";
    }
    if (select[0][15] === true) {
        document.getElementById("sistemasE").className = "btn btn-warning active";
    } else {
        document.getElementById("sistemasE").className = "btn btn-warning";
    }
    if (select[0][8] === true) {
        document.getElementById("gestorE").className = "btn btn-danger active";
    } else {
        document.getElementById("gestorE").className = "btn btn-danger";
    }
    if (select[0][12] === true) {
        document.getElementById("planeacionConsulE").className = "btn btn-success active";
    } else {
        document.getElementById("planeacionConsulE").className = "btn btn-success";
    }
    if (select[0][9] === true) {
        document.getElementById("haciendaConsulE").className = "btn btn-success active";
    } else {
        document.getElementById("haciendaConsulE").className = "btn btn-success";
    }
}
function actualizar() {
    if (document.getElementById('catastroE').className === 'btn btn-primary') {
        var catastroE = false;
    } else {
        var catastroE = true;
    }
    if (document.getElementById('catastroConsulE').className === 'btn btn-success') {
        var catastroConsulE = false;
    } else {
        var catastroConsulE = true;
    }
    if (document.getElementById('planeacionE').className === 'btn btn-primary') {
        var planeacionE = false;
    } else {
        var planeacionE = true;
    }
    if (document.getElementById('planeacionConsulE').className === 'btn btn-success') {
        var planeacionConsulE = false;
    } else {
        var planeacionConsulE = true;
    }
    if (document.getElementById('suiE').className === 'btn btn-warning') {
        var suiE = false;
    } else {
        var suiE = true;
    }
    if (document.getElementById('potE').className === 'btn btn-danger') {
        var potE = false;
    } else {
        var potE = true;
    }
    if (document.getElementById('haciendaE').className === 'btn btn-primary') {
        var haciendaE = false;
    } else {
        var haciendaE = true;
    }
    if (document.getElementById('haciendaConsulE').className === 'btn btn-success') {
        var haciendaConsulE = false;
    } else {
        var haciendaConsulE = true;
    }
    if (document.getElementById('sistemasE').className === 'btn btn-warning') {
        var sistemasE = false;
    } else {
        var sistemasE = true;
    }
    if (document.getElementById('gestorE').className === 'btn btn-danger') {
        var gestorE = false;
    } else {
        var gestorE = true;
    }
    var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.3.4:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="user:usuario">\
                        <Property>\
                            <Name>cargo</Name>\
                            <Value>' + document.getElementById('e_cargo').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>email</Name>\
                            <Value>' + document.getElementById('e_email').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>catastrom</Name>\
                            <Value>' + catastroE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>catastroc</Name>\
                            <Value>' + catastroConsulE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>sui</Name>\
                            <Value>' + suiE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>totem</Name>\
                            <Value>' + potE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>planeacionm</Name>\
                            <Value>' + planeacionE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>haciendam</Name>\
                            <Value>' + haciendaE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>sistemas</Name>\
                            <Value>' + sistemasE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>gestor</Name>\
                            <Value>' + gestorE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>planeacionc</Name>\
                            <Value>' + planeacionConsulE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>haciendac</Name>\
                            <Value>' + haciendaConsulE + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>estado</Name>\
                            <Value>' + document.getElementById('rad1').checked + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>dependenci</Name>\
                            <Value>' + document.getElementById('e_dependencia').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>fechaexp</Name>\
                            <Value>' + document.getElementById('e_fecha').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                    </Update>\
                </Transaction>';
    rooturl = 'http://35.184.3.4:8080/geoserver/user/ows?';
    $.ajax({
        type: "POST",
        url: rooturl,
        dataType: "xml",
        async: false,
        contentType: "text/xml",
        data: postData,
        success: function (xml) {
            alert('Datos actualizados con exito');
        },
        error: function (xml) {
            alert('Los datos NO se actualizaron');
        }
    });
}
function guardar() {
    var nom1 = document.getElementById('nombre').value.toLowerCase();
    var nom = nom1.split(' ');
    if (nom.length === 1) {
        var nomg = nom[0].charAt(0).toUpperCase() + nom[0].slice(1);
    } else {
        var nomg = nom[0].charAt(0).toUpperCase() + nom[0].slice(1) + nom[nom.length - 1].charAt(0).toUpperCase() + nom[nom.length - 1].slice(1);
    }
    var cont = nomg + "2017";
    var contrasena = hex_md5(cont);
    if (document.getElementById('catastro').className === 'btn btn-primary') {
        var catastro = 'false';
    } else {
        var catastro = 'true';
    }
    if (document.getElementById('catastroConsul').className === 'btn btn-success') {
        var catastroConsul = 'false';
    } else {
        var catastroConsul = 'true';
    }
    if (document.getElementById('sui').className === 'btn btn-warning') {
        var sui = 'false';
    } else {
        var sui = 'true';
    }
    if (document.getElementById('pot').className === 'btn btn-danger') {
        var pot = 'false';
    } else {
        var pot = 'true';
    }
    if (document.getElementById('planeacion').className === 'btn btn-primary') {
        var planeacion = 'false';
    } else {
        var planeacion = 'true';
    }
    if (document.getElementById('hacienda').className === 'btn btn-primary') {
        var hacienda = 'false';
    } else {
        var hacienda = 'true';
    }
    if (document.getElementById('sistemas').className === 'btn btn-warning') {
        var sistemas = 'false';
    } else {
        var sistemas = 'true';
    }
    if (document.getElementById('gestor').className === 'btn btn-danger') {
        var gestor = 'false';
    } else {
        var gestor = 'true';
    }
    if (document.getElementById('planeacionConsul').className === 'btn btn-success') {
        var planeacionConsul = 'false';
    } else {
        var planeacionConsul = 'true';
    }
    if (document.getElementById('haciendaConsul').className === 'btn btn-success') {
        var haciendaConsul = 'false';
    } else {
        var haciendaConsul = 'true';
    }
    /*console.log("catastro"+catastro);
     console.log("catastroConsul"+catastroConsul);
     console.log("hacienda"+hacienda);
     console.log("haciendaadm"+haciendaadm);
     console.log("planeacion"+planeacion);
     console.log("planeacionadm"+planeacionadm);
     console.log("tecnologia"+tecnologia);
     console.log("gestor"+gestor);
     console.log(document.getElementById('inlineRadio1').checked);*/
    var arrayResult = '<Transaction xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:user="user" xmlns:gml="http://www.opengis.net/gml" version="1.1.0" service="WFS" xsi:schemaLocation="http://35.184.3.4:8080/geoserver">\
     <Insert xmlns="http://www.opengis.net/wfs">\
     <user:usuario>\
     <usuario>' + nomg + '</usuario>\
     <nombre>' + document.getElementById('nombre').value + '</nombre>\
     <cargo>' + document.getElementById('cargo').value + '</cargo>\
     <email>' + document.getElementById('email').value + '</email>\
     <contrasena>' + contrasena + '</contrasena>\
     <catastrom>' + catastro + '</catastrom>\
     <catastroc>' + catastroConsul + '</catastroc>\
     <sui>' + sui + '</sui>\
     <totem>' + pot + '</totem>\
     <planeacionm>' + planeacion + '</planeacionm>\
     <haciendam>' + hacienda + '</haciendam>\
     <sistemas>' + sistemas + '</sistemas>\
     <gestor>' + gestor + '</gestor>\
     <estado>true</estado>\
     <dependenci>' + document.getElementById('dependencia').value + '</dependenci>\
     <fechaexp>' + document.getElementById('fecha').value + '</fechaexp>\
     <planeacionc>' + planeacionConsul + '</planeacionc>\
     <haciendac>' + haciendaConsul + '</haciendac>\
     </user:usuario>\
     </Insert>\
     </Transaction>';
    rooturl = 'http://35.184.3.4:8080/geoserver/user/ows?';
    var res = $.ajax({
        type: "POST",
        url: rooturl,
        dataType: "xml",
        contentType: "text/xml",
        async: false,
        data: arrayResult,
        success: function (xml) {
        },
        error: function (xml) {
            console.log('error');
        }
    });
    if (res.responseText.substring(0, 62) === '<?xml version="1.0" encoding="UTF-8"?><wfs:TransactionResponse') {
        var urls = "./mail/envio_mail.php";
        var req = new ajaxRequest();
        var url = urls + "?c=" + document.getElementById('email').value + "&u=" + nomg + "&p=" + cont;
        req.open("GET", url, false);
        req.send();
    } else {
        alert("El usuario o correo electronico ya se encuentra registrado");
    }
}
function password() {
    var ca = document.cookie.split('=');
    console.log(ca);
    var select = search("preproduccion:ValidateUser", ca[0], hex_md5(document.getElementById('password').value), "t");
    console.log(select);
    console.log(document.getElementById('password').value);
    console.log(hex_md5(document.getElementById('password').value));
    if (select === null || select.length === 0) {
        alert("Contraseña incorrecta");
    } else if (document.getElementById("newpassword").value === document.getElementById("cpassword").value) {
        var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.3.4:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
            <Update typeName="user:usuario">\
                <Property>\
                    <Name>contrasena</Name>\
                    <Value>' + hex_md5(document.getElementById('newpassword').value) + '</Value>\
                </Property>\
                <Filter>\
                    <FeatureId fid="usuario.' + select[0][18] + '"/>\
                </Filter>\
            </Update>\
        </Transaction>';
        rooturl = 'http://35.184.3.4:8080/geoserver/user/ows?';
        $.ajax({
            type: "POST",
            url: rooturl,
            dataType: "xml",
            async: false,
            contentType: "text/xml",
            data: postData,
            success: function (xml) {
                alert('Datos actualizados con exito');
            },
            error: function (xml) {
                alert('Los datos NO se actualizaron');
            }
        });
        $('#myModal').modal('hide');
    } else {
        alert("La contraseña nueva y su confirmacion no coinciden");
    }
    return;
}
function ajaxRequest() {
    try {
        var request = new XMLHttpRequest();
    } catch (e1) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e2) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e3) {
                request = false;
            }
        }
    }
    return request;
}