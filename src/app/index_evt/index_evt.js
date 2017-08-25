//window.onload = detectarCarga;
//window.oncontextmenu = function() { return false; };
$(document).on('ready', function () {
//codigo aquí
    var select = validacionusuarios();
    //console.log(select);
    if (navigator.vendor !== "Google Inc.") {
        location.href = "barranquilla.html?ig=navegador";
    }
    if (select === null || select === undefined) {
        location.href = "barranquilla.html?ig=error";
    }
//registro de ingreso de usuarios
    else {
        var ca = document.cookie.split('=');
        //var select1 = select_query("SELECT count(*) AS count FROM reguser WHERE usuario = '" + ca[0] + "'");
        var select1 = search("preproduccion:activUser", ca[0]);
        if (select1[0][0] === 0) {
            document.getElementById("completo").style.display = 'block';
        }
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
                <user:reguser>\
                    <usuario>' + select[0][3] + '</usuario>\
                    <fecha>' + fecha + '</fecha>\
                    <actividad>Ingreso al sistema</actividad>\
                </user:reguser>\
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
                //console.log(xml);
                //alert('success');
            },
            error: function (xml) {
                console.log('error');
            }
            //console.log(arrayResult);
        });
    }
    try {
        //console.log(select);
        if (select[0][5] === true) {
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            document.getElementById("icono_matricula").style.display = "block";
            document.getElementById("icono_codigo").style.display = "block";
            document.getElementById("propietario").style.display = "block";
            document.getElementById("cedula").style.display = "block";
            document.getElementById("Rango Area Construccion").style.display = "block";
            document.getElementById("Tipo Construccion").style.display = "block";
            document.getElementById("predios_construidos").style.display = "block";
            document.getElementById("Distrito vs Prestadores AAA").style.display = "block";
            document.getElementById("plusvalia").style.display = "block";
            document.getElementById("predios_actualizacion").style.display = "block";
            document.getElementById("Rango Area Terreno").style.display = "block";
            document.getElementById("Calidad Construcciones").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            document.getElementById("update").style.display = "block";
            document.getElementById("updcsv").style.display = "block";
            //document.getElementById("Avaluo Catastral").style.display = "block";
            modulo = "catastro";
            //new
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/catastro/ConsultasCatastro.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "UTF-8";
            d.src = "sql/js_sql.js";
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            c.appendChild(d);
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
            /*  var e = document.createElement("script");
             e.type = "text/javascript";
             e.charset = "UTF-8";
             e.src = "src/app/app/Consultas/sinconsulta.js";
             var f = document.getElementsByTagName("head")[0];
             f || (f = document.body.parentNode.appendChild(document.createElement("head")));
             f.appendChild(f);*/
            var g = document.createElement("script");
            g.type = "text/javascript";
            g.charset = "UTF-8";
            g.src = "import/importcsv.js";
            var h = document.getElementsByTagName("head")[0];
            h || (h = document.body.parentNode.appendChild(document.createElement("head")));
            h.appendChild(g);
        } else if (select[0][6] === true) {
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            document.getElementById("icono_matricula").style.display = "block";
            document.getElementById("icono_codigo").style.display = "block";
            document.getElementById("propietario").style.display = "block";
            document.getElementById("cedula").style.display = "block";
            document.getElementById("Rango Area Construccion").style.display = "block";
            document.getElementById("Tipo Construccion").style.display = "block";
            document.getElementById("predios_construidos").style.display = "block";
            document.getElementById("Distrito vs Prestadores AAA").style.display = "block";
            document.getElementById("plusvalia").style.display = "block";
            document.getElementById("predios_actualizacion").style.display = "block";
            document.getElementById("Rango Area Terreno").style.display = "block";
            document.getElementById("Calidad Construcciones").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            //document.getElementById("Avaluo Catastral").style.display = "block";
            modulo = "catastro";
            //new
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/catastro/ConsultasCatastro.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "UTF-8";
            d.src = "sql/js_sql.js";
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            c.appendChild(d);
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
            /*  var e = document.createElement("script");
             e.type = "text/javascript";
             e.charset = "UTF-8";
             e.src = "src/app/app/Consultas/sinconsulta.js";
             var f = document.getElementsByTagName("head")[0];
             f || (f = document.body.parentNode.appendChild(document.createElement("head")));
             f.appendChild(f);*/
        } else if (select[0][7] === true) {
            //document.getElementById("metrotel").style.display = "block";
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            document.getElementById("Distrito vs Prestadores AAA").style.display = "block";
            document.getElementById("estratificacion_oficial").style.display = "block";
            document.getElementById("oficial_vs_AAA").style.display = "block";
            document.getElementById("oficial_vs_AAA_uso").style.display = "block";
            document.getElementById("uso_electricaribe").style.display = "block";
            document.getElementById("disponibilidad_AAA").style.display = "block";
            document.getElementById("Nomenclatura Domiciliaria").style.display = "block";
            document.getElementById("icono_codigo").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            modulo = "sui";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/sui/ConsultasSui.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "UTF-8";
            d.src = "sql/js_sql.js";
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            c.appendChild(d);
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
        } else if (select[0][16] === true) {
            modulo = "planeacionmisional";
            //var sele = select_query("SELECT COUNT(table_name) FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%'");
            //console.log(sele);
            /*if (parseInt(sele[0][0]) > 0) {
             //console.log(sele);        
             document.getElementById("valid").style.display = "block";
             }
             var sel = select_query("SELECT COUNT(table_name) FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'post_%'");
             if (parseInt(sel[0][0]) > 0) {
             document.getElementById("deshacer").style.display = "block";
             }*/
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            //document.getElementById("subirshape").style.display = "block";
            document.getElementById("alineamiento").style.display = "block";
            document.getElementById("Usos_Permitidos").style.display = "block";
            document.getElementById("espacio_publico").style.display = "block";
            document.getElementById("transmetro").style.display = "block";
            //document.getElementById("Conflicto Uso del Suelo").style.display = "block";
            document.getElementById("Area Proteccion Urbanistica").style.display = "block";
            document.getElementById("estratificacion_oficial").style.display = "block";
            document.getElementById("Tipo de Amenaza").style.display = "block";
            document.getElementById("Estructura Ecologica Principal").style.display = "block";
            document.getElementById("Clasificacion_Uso").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            document.getElementById("Nomenclatura Domiciliaria").style.display = "block";

            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/planeacion/ConsultasPlaneacion.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            /*var d = document.createElement("script");
             d.type = "text/javascript";
             d.charset = "UTF-8";
             d.src = "sql/js_sql.js";
             var c = document.getElementsByTagName("head")[0];
             c || (c = document.body.parentNode.appendChild(document.createElement("head")));
             c.appendChild(d);*/
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
        } else if (select[0][9] === true) {
            modulo = "planeacionmisional";
            //var sele = select_query("SELECT COUNT(table_name) FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%'");
            var sele = search("preproduccion:CountTable", 'temp_%');
            //console.log(sele.length);
            if (sele.length > 0) {
                //console.log(sele);
                // document.getElementById("valid").style.display = "block";
            }
            //var sel = select_query("SELECT COUNT(table_name) FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'post_%'");
            var sel = search("preproduccion:CountTable", 'post_%');
            //console.log(sel.length);
            if (sel.length > 0) {
                // document.getElementById("deshacer").style.display = "block";
            }
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            //document.getElementById("subirshape").style.display = "block";
            document.getElementById("alineamiento").style.display = "block";
            document.getElementById("Usos_Permitidos").style.display = "block";
            document.getElementById("espacio_publico").style.display = "block";
            document.getElementById("transmetro").style.display = "block";
            //document.getElementById("Conflicto Uso del Suelo").style.display = "block";
            document.getElementById("Area Proteccion Urbanistica").style.display = "block";
            document.getElementById("estratificacion_oficial").style.display = "block";
            document.getElementById("Tipo de Amenaza").style.display = "block";
            document.getElementById("Estructura Ecologica Principal").style.display = "block";
            document.getElementById("Clasificacion_Uso").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/planeacion/ConsultasPlaneacion.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "UTF-8";
            d.src = "sql/js_sql.js";
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            c.appendChild(d);
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
            var g = document.createElement("script");
            g.type = "text/javascript";
            g.charset = "UTF-8";
            g.src = "import/import.js";
            var h = document.getElementsByTagName("head")[0];
            h || (h = document.body.parentNode.appendChild(document.createElement("head")));
            h.appendChild(g);
        } else if (select[0][10] === true) {
            document.getElementById("Avaluo Catastral").style.display = "block";
            document.getElementById("Incremento Avaluo").style.display = "block";
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            document.getElementById("Tipo de Contribuyente").style.display = "block";
            //document.getElementById("predios_exentos_2016").style.display = "block";
            document.getElementById("Tipo Propietario").style.display = "block";
            document.getElementById("Impuesto Camara").style.display = "block";
            //document.getElementById("icono_matricula").style.display = "block";
            document.getElementById("icono_codigo").style.display = "block";
            document.getElementById("propietario").style.display = "block";
            document.getElementById("Tipo Construccion").style.display = "block";
            document.getElementById("oficial_vs_AAA_uso").style.display = "block";
            document.getElementById("uso_electricaribe").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            modulo = "hacienda";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/hacienda/ConsultasHacienda.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "UTF-8";
            d.src = "sql/js_sql.js";
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            c.appendChild(d);
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
        } else if (select[0][12] === true) {

            //document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            //document.getElementById("manual").style.display = "block";
            document.getElementById("icono_codigo").style.display = "block";
            //document.getElementById("dir_gestor").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            modulo = "gestor";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "gesstor/gesstor.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
        } else if (select[0][17] === true) {
            document.getElementById("Avaluo Catastral").style.display = "block";
            document.getElementById("Incremento Avaluo").style.display = "block";
            document.getElementById("menu_circular").style.display = "block";
            document.getElementById("tipo_usuario").style.display = "block";
            document.getElementById("manual").style.display = "block";
            document.getElementById("Tipo de Contribuyente").style.display = "block";
            //document.getElementById("predios_exentos_2016").style.display = "block";
            document.getElementById("Tipo Propietario").style.display = "block";
            document.getElementById("Impuesto Camara").style.display = "block";
            //document.getElementById("icono_matricula").style.display = "block";
            document.getElementById("icono_codigo").style.display = "block";
            document.getElementById("propietario").style.display = "block";
            document.getElementById("Tipo Construccion").style.display = "block";
            document.getElementById("oficial_vs_AAA_uso").style.display = "block";
            document.getElementById("uso_electricaribe").style.display = "block";
            document.getElementById("boton_comparacion").style.display = "block";
            document.getElementById("boton_geocoder").style.display = "block";
            //hacienda consultas
            modulo = "hacienda";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/hacienda/ConsultasHacienda.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.charset = "UTF-8";
            d.src = "sql/js_sql.js";
            var c = document.getElementsByTagName("head")[0];
            c || (c = document.body.parentNode.appendChild(document.createElement("head")));
            c.appendChild(d);
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = "UTF-8";
            e.src = "gesstor/gesstor.js";
            var f = document.getElementsByTagName("head")[0];
            f || (f = document.body.parentNode.appendChild(document.createElement("head")));
            f.appendChild(e);
        } else if (select[0][19] === true) {
            //totem pruebas
            document.getElementById("lista_general").style.display = "none";
            document.getElementById("barra_direccion").style.display = "none";
            document.getElementById("tipo_usuario").style.display = "none";
            document.getElementById("salida").style.display = "none";
            document.getElementById("menu_totemp").style.display = "block";
            modulo = "totempruebas";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/Totems/Totems.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            //window.oncontextmenu = function() { return false; }
        } else {
            document.getElementById("lista_general").style.display = "none";
            document.getElementById("barra_direccion").style.display = "none";
            document.getElementById("tipo_usuario").style.display = "none";
            document.getElementById("salida").style.display = "none";
            document.getElementById("menu_totem").style.display = "block";
            modulo = "totem";
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.charset = "UTF-8";
            b.src = "src/app/Totems/Totems.js";
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            a.appendChild(b);
            window.oncontextmenu = function () {
                return false;
            };
        }
        //$("#map").removeAttr("hidden").show();
        $("#logos_cabezote").removeAttr("hidden").show();
        $("#barratransparencia").removeAttr("hidden").show();
        $("#posicionbarra").removeAttr("hidden").show();
        $("#boton_limpiar").removeAttr("hidden").show();
        $("#mouse-position").removeAttr("hidden").show();
        $("#salida").removeAttr("hidden").show();
    } catch (err) {
    }
});
function validacionusuarios() {
    var ca = document.cookie.split('=');
    try {
        //var selec = select_query("SELECT * FROM usuario WHERE usuario ='" + ca[0] + "' AND contrasena ='" + ca[1] + "' AND estado='t';");
        //console.log(selec);
        var select = search("preproduccion:ValidateUser", ca[0], ca[1]);
        document.getElementById("carga").style.display = "none";
        document.getElementById("nombre_usuario").innerHTML = select[0][0].split(" ", 1);
    } catch (err) {
    }
    return(select);
}
changestyles = 0;
function password() {
    var ca = document.cookie.split('=');
    var select = search("preproduccion:ValidateUser", ca[0], hex_md5(document.getElementById('password').value));
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
function mostrar(consulta) {
//document.getElementById('barra_direccion').style.display = 'none';
    document.getElementById('barra_sitio').style.display = 'none';
    //document.getElementById('barra_propietario').style.display = 'none';
    document.getElementById('barra_barrio').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    //document.getElementById('barra_busqueda_direccion').style.display = 'none';
    document.getElementById('barra_busqueda_matricula').style.display = 'none';
    //document.getElementById('barra_matricula').style.display = 'none';
    document.getElementById('barra_comuna').style.display = 'none';
    document.getElementById('barra_localidad').style.display = 'none';
    document.getElementById('barra_manzana').style.display = 'none';
    document.getElementById('barra_direccion').style.display = 'none';
    document.getElementById('direccion').value = "";
    document.getElementById('address1').value = "";
    //document.getElementById('nombre_propietario').value = "";
    document.getElementById('barrio').value = "";
    document.getElementById('codigo').value = "";
    document.getElementById('comuna').value = "";
    document.getElementById('localidad').value = "";
    document.getElementById('manzana').value = "";
    document.getElementById('matricula').value = "";
    document.getElementById('direccion').value = "";
    if (consulta === 'consulta_direccion') {
        document.getElementById('barra_direccion').style.display = 'block';
        localidad.setVisible(false);
        manzana.setVisible(false);
        barrio.setVisible(false);
    } else if (consulta === 'consulta_sitio') {
        document.getElementById('barra_sitio').style.display = 'block';
        localidad.setVisible(false);
        manzana.setVisible(false);
        barrio.setVisible(false);
    } else if (consulta === 'consulta_propietario') {
        document.getElementById('barra_propietario').style.display = 'block';
    } else if (consulta === 'consulta_barrio') {
        document.getElementById('barra_barrio').style.display = 'block';
        barrio.setVisible(true);
        localidad.setVisible(false);
        predio.setVisible(false);
        manzana.setVisible(false);
        // map.getView().fitExtent(barrio.getExtent(), map.getSize());
    } else if (consulta === 'consulta_codigo') {
        document.getElementById('barra_codigo').style.display = 'block';
    } else if (consulta === 'consulta_matricula') {
        document.getElementById('barra_matricula').style.display = 'block';
    } else if (consulta === 'consulta_comuna') {
        document.getElementById('barra_comuna').style.display = 'block';
    } else if (consulta === 'consulta_localidad') {
        document.getElementById('barra_localidad').style.display = 'block';
        localidad.setVisible(true);
        barrio.setVisible(false);
        predio.setVisible(false);
        manzana.setVisible(false);
        map.getView().fitExtent(barrio.getExtent(), map.getSize());
    } else if (consulta === 'consulta_manzana') {
        document.getElementById('barra_manzana').style.display = 'block';
        localidad.setVisible(false);
        barrio.setVisible(false);
        //manzana.setVisible(true);
        map.getView().fitExtent(barrio.getExtent(), map.getSize());
    }
}

function mostrartotem(consulta) {
    if (consulta == 'direcciontotem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        document.getElementById('exp1').style.display = 'block';
        var x = document.getElementById("audiodireccion");
        x.play();
    } else if (consulta == 'referencia') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiorefcatastral");
        x.play();
    } else if (consulta == 'sitiototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiositio");
        x.play();
    } else if (consulta == 'localidad') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiolocalidad");
        x.play();
    } else if (consulta == 'barrio') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiobarrio");
        x.play();
    } else if (consulta == 'manzana') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiomanzana");
        x.play();
    } else if (consulta == 'barriototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'none';
        document.getElementById('menubarriototem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
       // document.getElementById('inputmanzanatotem').style.display = 'block';
       // document.getElementById('consultas_totem').style.display = 'block';
        //var x = document.getElementById("audiomanzana");
        //x.play();
    } else if (consulta == 'manzanatotem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
       // document.getElementById('inputmanzanatotem').style.display = 'block';
       // document.getElementById('consultas_totem').style.display = 'block';
        //var x = document.getElementById("audiomanzana");
        //x.play();
    } else if (consulta == 'prediototem')    {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('buscar_ref').style.display = 'none';
        document.getElementById('menu_predio').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        //document.getElementById('submenuprediototem').style.display = 'block';
        //document.getElementById('inputdirecciontotem').style.display = 'block';
        //document.getElementById('consultas_totem').style.display = 'block';
    } else if (consulta == 'direcciontotemp')
    {
        document.getElementById('menu_predio').style.display = 'none';
        document.getElementById('submenuprediototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('consultas_totem').style.display = 'none';
        document.getElementById('consultas_totemp').style.display = 'block';

    }
}

function menu_principal() {
// document.getElementById('botones').style.display = 'block';
    document.getElementById('submenu').style.display = 'block';
    document.getElementById('cerrar_submenu').style.display = 'block';
    document.getElementById('lupa_pequeña').style.display = 'block';
    document.getElementById('boton_capas').style.display = 'block';
    document.getElementById('boton_principal').style.display = 'none';
}

function menu_consultas() {
    /*document.getElementById('busqueda_personalizada').style.display = 'block';
     document.getElementById('cerrar_submenu_cafe').style.display = 'block';
     document.getElementById('cerrar_submenu_verde').style.display = 'none';*/
    document.getElementById('botones').style.display = 'block';
    document.getElementById('herramientas').style.display = 'none';
    //document.getElementById('transicion_capas').style.display = 'none';

    /*if (document.getElementById('botones').style.display === "" || document.getElementById('botones').style.display === "none"){
     var ca = document.cookie.split('=');
     var select = select_query("SELECT * FROM usuario WHERE usuario ='" + ca[0] + "' AND contrasena ='" + ca[1] + "' AND estado='t';");
     console.log(select[0][8]);
     if(select[0][7]==='f'){
     document.getElementById('predios_actualizacion').style.display = 'none';
     document.getElementById('oficial_vs_AAA').style.display = 'none';
     document.getElementById('oficial_vs_AAA_uso').style.display = 'none';
     document.getElementById('disponibilidad_AAA').style.display = 'none';
     document.getElementById('transmetro').style.display = 'none';
     document.getElementById('espacio_publico').style.display = 'none';
     document.getElementById('Nomenclatura Domiciliaria').style.display = 'none';
     }
     } else
     {*/


    //document.getElementById('submenu').style.display = 'none';

    //}      
}

function herramientas() {
    /*document.getElementById('mensaje').style.display = 'none';
     document.getElementById('busqueda_personalizada').style.display = 'none';*/
    document.getElementById('botones').style.display = 'none';
    // document.getElementById('cerrar_submenu_cafe').style.display = 'none';
    document.getElementById('herramientas').style.display = 'block';
    /*document.getElementById('transicion_capas').style.display = 'block';
     document.getElementById('cerrar_submenu_verde').style.display = 'block';*/
}

function limpiar_consulta() {
    globalstyle = "sinconsulta";
    puntos_aaa.setVisible(false);
    manzana.setVisible(false);
    construcciones.setVisible(true);
    unidades.setVisible(false);
    vias.setVisible(false);
    predio.setVisible(true);
    document.getElementById('panel_atr').style.display = 'none';
    document.getElementById('panel_atr_totempbarrio').style.display = 'none';
    document.getElementById("pestanastotem").style.display = "none";
    document.getElementById('tablaatributospuntosaaa').style.display = 'none';
    document.getElementById('botonmaximizarpuntosaaa').style.display = 'none';
    document.getElementById('botoncerrarstreetview').style.display = 'none';
    document.getElementById('botonmostrarstreetview').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
    barrio.setVisible(false);
    localidad.setVisible(false);
    document.getElementById('address1').value = "";
    document.getElementById('barrio').value = "";
    document.getElementById('localidad').value = "";
    document.getElementById('manzana').value = "";
    document.getElementById('matricula').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('codigo').value = "";
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSource.clear();
    markerSourceAlineamiento.clear();
    document.getElementById('barra_busqueda_matricula').style.display = 'none';
    document.getElementById('barra_alineamiento').style.display = 'none';
    //document.getElementById('barra_busqueda_direccion').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    document.getElementById("marco").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    document.getElementById('leyenda_transmetro').style.display = 'none';
    layerEstratificacionOficial.setVisible(false);
    layermetrotel.setVisible(false);
    layerindustriaycomercio.setVisible(false);
    layerSUI.setVisible(false);
    layerprediosexentos2016.setVisible(false);
    espacio_pubico.setVisible(false);
    layerespaciopublico.setVisible(false);
    estacionestransmetro.setVisible(false);
    viastransmasivo.setVisible(false);
    barrio.setVisible(false);
    localidad.setVisible(false);
    puntos_aaa.setVisible(false);
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("botonocultarpanelatributos").style.display = "none";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_predioshasusos").style.display = "none";
    document.getElementById("botonminimizar").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "none";
    document.getElementById("botonminimizarhasusos").style.display = "none";
    document.getElementById("botonmaximizarhasusos").style.display = "none";
    document.getElementById("botonmostrarpanelatributos").style.display = "none";
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    document.getElementById("botonminimizarph").style.display = "none";
    document.getElementById("panel_atributos_ph").style.display = "none";
    document.getElementById("tablaatributosprediosph").style.display = "none";
    document.getElementById("botonmaximizarph").style.display = "none";
    if (modulo == 'gestor') {
        predio.getSource().updateParams({'STYLES': 'ffsf'});
    } else {
        predio.getSource().updateParams({'STYLES': 'predios_sin_consulta', 'CQL_FILTER': null});
    }
}
function busqueda_personalizada() {
    if (document.getElementById('personalizada').style.display === "" || document.getElementById('personalizada').style.display === "none")
    {
        document.getElementById('personalizada').style.display = 'block';
        document.getElementById('personalizada1').style.display = 'block';
        document.getElementById('personalizada2').style.display = 'block';
        document.getElementById('rango_area').style.display = 'block';
        document.getElementById('tipo_construccion').style.display = 'block';
        document.getElementById('estrato').style.display = 'block';
    } else
    {
        document.getElementById('personalizada').style.display = 'none';
        document.getElementById('personalizada1').style.display = 'none';
        document.getElementById('personalizada2').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
        //document.getElementById('barra_busqueda_direccion').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'none';
        document.getElementById('rango_area').style.display = 'none';
        document.getElementById('tipo_construccion').style.display = 'none';
        document.getElementById('estrato').style.display = 'none';
    }
}
function busqueda(id) {
//document.getElementById('barra_busqueda_direccion').style.display = 'none';
    document.getElementById('barra_busqueda_matricula').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    document.getElementById('barra_alineamiento').style.display = 'none';
    document.getElementById('barra_predioshasusos').style.display = 'none';
    document.getElementById('matricula').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('codigo').value = "";
    document.getElementById('cedul').value = "";
    document.getElementById('propietarios').value = "";
    document.getElementById('input_ladomanzana').value = "";
    document.getElementById('direccion_gestor').value = "";
    if (id === "propietar") {
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('codigo').style.display = 'none';
        document.getElementById('cedul').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('propietarios').style.display = 'block';
    } else if (id === "cedula") {
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('propietarios').style.display = 'none';
        document.getElementById('codigo').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('cedul').style.display = 'block';
    } else if (id === "personalizada1") {
        document.getElementById('barra_busqueda_matricula').style.display = 'block';
    } else if (id === "personalizada2") {
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('propietarios').style.display = 'none';
        document.getElementById('cedul').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('codigo').style.display = 'block';
    } else if (id === "alineamiento") {
        document.getElementById('barra_alineamiento').style.display = 'block';
    } else if (id === "Usos_Permitidos") {
        document.getElementById('barra_predioshasusos').style.display = 'block';
    } else if (id === "boton_geocoder") {
        document.getElementById('propietarios').style.display = 'none';
        document.getElementById('cedul').style.display = 'none';
        document.getElementById('codigo').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('tabladir').style.display = 'block';
    }
}

function ocultarpanelatributosaaa() {
    document.getElementById('mensaje').style.display = 'none';
    document.getElementById('tablaatributospuntosaaa').style.display = 'none';
    document.getElementById('botonmaximizarpuntosaaa').style.display = 'block';
}
function mostrarpanelatributosaaa() {
    document.getElementById('mensaje').style.display = 'none';
    document.getElementById('tablaatributospuntosaaa').style.display = 'block';
    document.getElementById('botonmaximizarpuntosaaa').style.display = 'none';
}


function cerrar_menu() {
    document.getElementById('mensaje').style.display = 'none';
    document.getElementById('botones').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    // document.getElementById('barra_busqueda_direccion').style.display = 'none';
    document.getElementById('barra_busqueda_matricula').style.display = 'none';
    document.getElementById('cerrar_submenu').style.display = 'none';
    document.getElementById('cerrar_submenu_cafe').style.display = 'none';
    document.getElementById('cerrar_submenu_verde').style.display = 'none';
    document.getElementById('boton_capas').style.display = 'none';
    document.getElementById('submenu').style.display = 'none';
    document.getElementById('boton_principal').style.display = 'block';
    document.getElementById('lupa_pequeña').style.display = 'none';
    document.getElementById('busqueda_personalizada').style.display = 'none';
    document.getElementById('transicion_capas').style.display = 'none';
    document.getElementById('herramientas').style.display = 'none';
}
$(document).ready(function () {
    $('#marco').load(function () {
        $(this).contents().find("img").css({'height': '970px', 'width': '572px'});
        //$(this).contents().find("img").css({'background-color':'red','font-weight':'bolder','color':'white'});
    });
});
function open_streetview() {
    document.getElementById('marco').style.display = 'block';
    document.getElementById('botoncerrarstreetview').style.display = 'block';
}/*
 function close_streetview() {
 console.log(algo);
 //console.log(algo);
 //algo = 'none';
 //document.getElementById('marco').style.display = 'none';
 }*/
function lista() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function abrir_manual() {
    if (modulo == 'catastro') {
        window.open('./documentos/manual_catastro.pdf', '_blank');
        /* window.open(
         'http://35.184.3.4/gesstor/documentos/manual_catastro.pdf',
         '_blank' // <- This is what makes it open in a new window.
         );*/
    } else if (modulo == 'planeacion') {
        window.open('./documentos/manual_misional_planeacion.pdf', '_blank', 'fullscreen=yes');
        /*'http://35.184.3.4/gesstor/documentos/manual_misional_planeacion.pdf',
         '_blank' // <- This is what makes it open in a new window.
         );*/
    } else if (modulo == 'sui') {
        window.open('./documentos/manual_sui.pdf', '_blank', 'fullscreen=yes');
        /* window.open(
         'http://35.184.3.4/gesstor/documentos/manual_sui.pdf',
         '_blank' // <- This is what makes it open in a new window.
         );*/
    } else if (modulo == 'hacienda') {
        window.open('./documentos/manual_hacienda.pdf', '_blank', 'fullscreen=yes');
        /*window.open(
         'http://35.184.3.4/gesstor/documentos/manual_hacienda.pdf',
         '_blank' // <- This is what makes it open in a new window.
         );*/
    }
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
function marcado() {
    if (document.getElementById("termin").checked === true) {
        document.getElementById('completo').style.display = 'none';
    } else {
        alert("Debes aceptar los términos y condiciones");
        return false;
    }
}

function changeImage(id) {
    if (id === "icono_matricula") {
        document.getElementById('icono_matricula').style = "background:url('./imagenes/botones_consultas/buscar_matricula/matricula_inmobiliaria.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "icono_direccion") {
        document.getElementById('icono_direccion').style = "background:url('./imagenes/buscar_direccion.png'); background-color:#adad32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "icono_codigo") {
        document.getElementById('icono_codigo').style = "background:url('./imagenes/botones_consultas/buscar_codigo/codigo.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "cedula") {
        document.getElementById('cedula').style = "background:url('./imagenes/botones_consultas/buscar_cedula/cedula.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "propietario") {
        document.getElementById('propietario').style = "background:url('./imagenes/botones_consultas/buscar_propietario/propietario.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Rango Area Terreno") {
        document.getElementById('Rango Area Terreno').style = "background:url('./imagenes/botones_consultas/rango_area_terreno/rango_area_terreno.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo Construccion") {
        document.getElementById('Tipo Construccion').style = "background:url('./imagenes/botones_consultas/propiedad_horizontal/propiedad_horizontal.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Distrito vs Prestadores AAA") {

        /* document.getElementById('Distrito vs Prestadores AAA').style = "background:url('./imagenes/botones_consultas/base_distrito_prestadores/base_distrito_prestadores.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";*/
    } else if (id === "metrotel") {
        document.getElementById('metrotel').style = "background:url('./imagenes/consultar_estratificacion_metrotel.png'); background-color:#326f32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo de Contribuyente") {
        document.getElementById('Tipo de Contribuyente').style = "background:url('./imagenes/botones_consultas/tipo_contribuyente/tipo_contribuyente.png'); background-color:#6fb76f; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "predios_exentos_2016") {
        document.getElementById('predios_exentos_2016').style = "background:url('./imagenes/consultar_predios_exentos.png'); background-color:#adad32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "estratificacion_oficial") {
        document.getElementById('estratificacion_oficial').style = "background:url('./imagenes/botones_consultas/estratificacion_oficial/estratificacion_oficial.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "predios_construidos") {
        document.getElementById('predios_construidos').style = "background:url('./imagenes/botones_consultas/lotes_no_construidos/lotes_no_construidos.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "oficial_vs_AAA") {
        document.getElementById('oficial_vs_AAA').style = "background:url('./imagenes/oficial_vs_AAA.png'); background-color:#adad32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        document.getElementById('oficial_vs_AAA').value = 0;
    } else if (id === "oficial_vs_AAA_uso") {
        document.getElementById('oficial_vs_AAA_uso').style = "background:url('./imagenes/oficial_vs_AAA_destino.png'); background-color:#326f32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        document.getElementById('oficial_vs_AAA_uso').value = 0;
    } else if (id === "disponibilidad_AAA") {
        document.getElementById('disponibilidad_AAA').style = "background:url('./imagenes/disponibilidad_servicios_AAA.png'); background-color:#006600; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        document.getElementById('disponibilidad_AAA').value = 0;
    } else if (id === "uso_electricaribe") {
        document.getElementById('uso_electricaribe').style = "background:url('./imagenes/botones_consultas/uso_electricaribe/uso_electricaribe.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "transmetro") {
        document.getElementById('transmetro').style = "background:url('./imagenes/botones_consultas/transmetro/transmetro.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "espacio_publico") {
        document.getElementById('espacio_publico').style = "background:url('./imagenes/botones_consultas/espacio_publico/espacio_publico.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Nomenclatura Domiciliaria") {
        document.getElementById('Nomenclatura Domiciliaria').style = "background:url('./imagenes/estandarizada.png'); background-color:#326f32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Calidad Construcciones") {
        document.getElementById('Calidad Construcciones').style = "background:url('./imagenes/botones_consultas/calidad_construccion/calidad_construccion.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Rango Area Construccion") {
        document.getElementById('Rango Area Construccion').style = "background:url('./imagenes/botones_consultas/rango_area_construccion/rango_area_construccion.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Avaluo Catastral") {
        document.getElementById('Avaluo Catastral').style = "background:url('./imagenes/botones_consultas/avaluo_catastral/avaluo_catastral.png'); background-color:#adad32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo Propietario") {
        document.getElementById('Tipo Propietario').style = "background:url('./imagenes/botones_consultas/tipo_propietario/tipo_propietario.png'); background-color:#b7b7b7; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        document.getElementById('Avaluo Catastral').value = 0;
    } else if (id === "Conflicto Uso del Suelo") {
        document.getElementById('Conflicto Uso del Suelo').style = "background:url('./imagenes/Conflictos_Uso_Suelo.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Area Proteccion Urbanistica") {
        document.getElementById('Area Proteccion Urbanistica').style = "background:url('./imagenes/botones_consultas/proteccion_urbanistica/proteccion_urbanistica.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo de Zona") {
        document.getElementById('Tipo de Zona').style = "background:url('./imagenes/Tipo_Zona.png'); background-color:#326f32; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo de Amenaza") {
        document.getElementById('Tipo de Amenaza').style = "background:url('./imagenes/botones_consultas/tipo_amenaza/tipo_amenaza.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        document.getElementById('Tipo de Amenaza').value = 0;
    } else if (id === "Estructura Ecologica Principal") {
        document.getElementById('Estructura Ecologica Principal').style = "background:url('./imagenes/botones_consultas/estructura_ecologica/estructura_ecologica.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "alineamiento") {
        document.getElementById('alineamiento').style = "background:url('./imagenes/botones_consultas/alineamiento/alineamiento.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Usos_Permitidos") {
        document.getElementById('Usos_Permitidos').style = "background:url('./imagenes/botones_consultas/usos_permitidos/usos_permitidos.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "plusvalia") {
        document.getElementById('plusvalia').style = "background:url('./imagenes/botones_consultas/plusvalia/plusvalia.png'); background-color:#b7b7b7; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Incremento Avaluo") {
        document.getElementById('Incremento Avaluo').style = "background:url('./imagenes/botones_consultas/incremento_avaluo/incremento_avaluo.png'); background-color:#b7b7b7; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Clasificacion_Uso") {
        document.getElementById('Clasificacion_Uso').style = "background:url('./imagenes/botones_consultas/clasificacion_uso/clasificacion_uso.png'); background-color:#93c993; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "predios_actualizacion") {
        document.getElementById('predios_actualizacion').style = "background:url('./imagenes/botones_consultas/conservacion/conservacion.png'); background-color:#b7b7b7; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Impuesto Camara") {
        document.getElementById('Impuesto Camara').style = "background:url('./imagenes/botones_consultas/industria_y_comercio/industria_y_comercio.png'); background-color:#b7b7b7; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    }
}

function normalImage(id) {
    if (id === "icono_matricula") {
        document.getElementById('icono_matricula').style = "background:url('./imagenes/botones_consultas/buscar_matricula/matricula_inmobiliaria.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "icono_direccion") {
        document.getElementById('icono_direccion').style = "background:url('./imagenes/direccion.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "icono_codigo") {
        document.getElementById('icono_codigo').style = "background:url('./imagenes/botones_consultas/buscar_codigo/codigo.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "cedula") {
        document.getElementById('cedula').style = "background:url('./imagenes/botones_consultas/buscar_cedula/cedula.png'); background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Rango Area Terreno") {
        document.getElementById('Rango Area Terreno').style = "background:url('./imagenes/botones_consultas/rango_area_terreno/rango_area_terreno.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo Construccion") {
        document.getElementById('Tipo Construccion').style = "background:url('./imagenes/botones_consultas/propiedad_horizontal/propiedad_horizontal.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Distrito vs Prestadores AAA") {

        /*document.getElementById('Distrito vs Prestadores AAA').style = "background:url('./imagenes/botones_consultas/base_distrito_prestadores/base_distrito_prestadores.png'); background-color:#008E30; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";*/
    } else if (id === "metrotel") {
        document.getElementById('metrotel').style = "background:url('./imagenes/estratificacion_metrotel.png'); background-color:#008E30; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo de Contribuyente") {
        document.getElementById('Tipo de Contribuyente').style = "background:url('./imagenes/botones_consultas/tipo_contribuyente/tipo_contribuyente.png'); background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "predios_exentos_2016") {
        document.getElementById('predios_exentos_2016').style = "background:url('./imagenes/predios_exentos.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "estratificacion_oficial") {
        document.getElementById('estratificacion_oficial').style = "background:url('./imagenes/botones_consultas/estratificacion_oficial/estratificacion_oficial.png'); background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "predios_construidos") {
        document.getElementById('predios_construidos').style = "background:url('./imagenes/botones_consultas/lotes_no_construidos/lotes_no_construidos.png'); background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "oficial_vs_AAA") {
        if (document.getElementById("oficial_vs_AAA").value === "Acueducto") {
            document.getElementById('oficial_vs_AAA').style = "background-color:#00AD41; min-height: 40px; border:0px; font-size:small;";
        } else if (document.getElementById("oficial_vs_AAA").value === "Alcantarillado") {
            document.getElementById('oficial_vs_AAA').style = "background-color:#00AD41; min-height: 40px; border:0px; font-size:small;";
        } else if (document.getElementById("oficial_vs_AAA").value === "Aseo") {
            document.getElementById('oficial_vs_AAA').style = "background-color:#00AD41; min-height: 40px; border:0px; font-size:small;";
        } else {
            document.getElementById('oficial_vs_AAA').style = "background:url('./imagenes/icono_diferencia_estratificacion.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        }
    } else if (id === "oficial_vs_AAA_uso") {
        if (document.getElementById("oficial_vs_AAA_uso").value === "Acueducto") {
            document.getElementById('oficial_vs_AAA_uso').style = "background-color:#a6a6a6; min-height: 40px; border:0px; font-size:small;";
        } else if (document.getElementById("oficial_vs_AAA_uso").value === "Alcantarillado") {
            document.getElementById('oficial_vs_AAA_uso').style = "background-color:#a6a6a6; min-height: 40px; border:0px; font-size:small;";
        } else if (document.getElementById("oficial_vs_AAA_uso").value === "Aseo") {
            document.getElementById('oficial_vs_AAA_uso').style = "background-color:#a6a6a6; min-height: 40px; border:0px; font-size:small;";
        } else {
            document.getElementById('oficial_vs_AAA_uso').style = "background:url('./imagenes/oficial_vs_AAA_destino.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        }
    } else if (id === "uso_electricaribe") {
        document.getElementById('uso_electricaribe').style = "background:url('./imagenes/botones_consultas/uso_electricaribe/uso_electricaribe.png'); background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "disponibilidad_AAA") {
        if (document.getElementById("disponibilidad_AAA").value === "Acueducto") {
            document.getElementById('disponibilidad_AAA').style = "background-color:#008E30; min-height: 40px; border:0px;";
        } else if (document.getElementById("disponibilidad_AAA").value === "Alcantarillado") {
            document.getElementById('disponibilidad_AAA').style = "background-color:#008E30; min-height: 40px; border:0px; font-size:small;";
        } else if (document.getElementById("disponibilidad_AAA").value === "Aseo") {
            document.getElementById('disponibilidad_AAA').style = "background-color:#008E30; min-height: 40px; border:0px; font-size:small;";
        } else {
            document.getElementById('disponibilidad_AAA').style = "background:url('./imagenes/icono_disponibilidad.png'); background-color:#008E30; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        }
    } else if (id === "transmetro") {
        document.getElementById('transmetro').style = "background:url('./imagenes/botones_consultas/transmetro/transmetro.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "espacio_publico") {
        document.getElementById('espacio_publico').style = "background:url('./imagenes/botones_consultas/espacio_publico/espacio_publico.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Nomenclatura Domiciliaria") {
        document.getElementById('Nomenclatura Domiciliaria').style = "background:url('./imagenes/icono_nomenclatura_estandarizada.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Calidad Construcciones") {
        document.getElementById('Calidad Construcciones').style = "background:url('./imagenes/botones_consultas/calidad_construccion/calidad_construccion.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Rango Area Construccion") {
        document.getElementById('Rango Area Construccion').style = "background:url('./imagenes/botones_consultas/rango_area_construccion/rango_area_construccion.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Avaluo Catastral") {
        document.getElementById('Avaluo Catastral').style = "background:url('./imagenes/botones_consultas/avaluo_catastral/avaluo_catastral.png'); background-color:#008E30; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo Propietario") {
        document.getElementById('Tipo Propietario').style = "background:url('./imagenes/botones_consultas/tipo_propietario/tipo_propietario.png'); background-color:#a6a6a6; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Conflicto Uso del Suelo") {
        document.getElementById('Conflicto Uso del Suelo').style = "background:url('./imagenes/icono_uso_actual.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Area Proteccion Urbanistica") {
        document.getElementById('Area Proteccion Urbanistica').style = "background:url('./imagenes/icono_proteccion_urbanistica.png'); background-color:#a6a6a6; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo de Zona") {
        document.getElementById('Tipo de Zona').style = "background:url('./imagenes/icono_zona_urbana.png');background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Tipo de Amenaza") {
        if (document.getElementById("Tipo de Amenaza").value === "Inundacion") {
            document.getElementById('Tipo de Amenaza').style = "background-color:#86B12D; min-height: 40px; border:0px; font-size:small;";
        } else if (document.getElementById("Tipo de Amenaza").value === "Remosion") {
            document.getElementById('Tipo de Amenaza').style = "background-color:#86B12D; min-height: 40px; border:0px; font-size:small;";
        } else {
            document.getElementById('Tipo de Amenaza').style = "background:url('./imagenes/botones_consultas/tipo_amenaza/tipo_amenaza.png');background-color:#008E30; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
        }
    } else if (id === "Estructura Ecologica Principal") {
        document.getElementById('Estructura Ecologica Principal').style = "background:url('./imagenes/icono_estructura_ecologica.png'); background-color:#a6a6a6; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "alineamiento") {
        document.getElementById('alineamiento').style = "background:url('./imagenes/botones_consultas/alineamiento/alineamiento.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Usos_Permitidos") {
        document.getElementById('Usos_Permitidos').style = "background:url('./imagenes/botones_consultas/usos_permitidos/usos_permitidos.png'); background-color:#86B12D; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "plusvalia") {
        document.getElementById('plusvalia').style = "background:url('./imagenes/botones_consultas/plusvalia/plusvalia.png'); background-color:#a6a6a6; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Incremento Avaluo") {
        document.getElementById('Incremento Avaluo').style = "background:url('./imagenes/botones_consultas/incremento_avaluo/incremento_avaluo.png'); background-color:#a6a6a6; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Clasificacion_Uso") {
        document.getElementById('Clasificacion_Uso').style = "background:url('./imagenes/botones_consultas/clasificacion_uso/clasificacion_uso.png'); background-color:#00AD41; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "predios_actualizacion") {
        document.getElementById('predios_actualizacion').style = "background:url('./imagenes/botones_consultas/conservacion/conservacion.png'); background-color:#006D1B; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "propietario") {
        document.getElementById('propietario').style = "background:url('./imagenes/botones_consultas/buscar_propietario/propietario.png'); background-color:#008E30; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    } else if (id === "Impuesto Camara") {
        document.getElementById('Impuesto Camara').style = "background:url('./imagenes/botones_consultas/industria_y_comercio/industria_y_comercio.png'); background-color:#a6a6a6; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 35px;";
    }
}

function comparacion_imagenes() {
    window.open(
            'http://104.197.185.151/calidad/control/comparacion_imagenes/map.control.swipe.html',
            '_blank' // <- This is what makes it open in a new window.
            );
}
function ocultarstreetview() {
    document.getElementById("marco").style.display = "none";
    document.getElementById("botoncerrarstreetview").style.display = "none";
    document.getElementById("botonmostrarstreetview").style.display = "block";
}
function mostrarstreetview() {
    document.getElementById("marco").style.display = "block";
    document.getElementById("botoncerrarstreetview").style.display = "block";
    document.getElementById("botonmostrarstreetview").style.display = "none";
    //document.getElementById('map').style.width = '70%';
}
function ocultarstatistics() {
    document.getElementById("botonmostrarstatistics").style.display = "block";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("statistics").style.display = "none";
}
function mostrarstatistics() {
    document.getElementById("statistics").style.display = "block";
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "block";
    document.getElementById('mensaje').style.display = 'none';
}
function ocultarpanelatributos() {
    document.getElementById("panel_atr").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "block";
    document.getElementById("botonocultarpanelatributos").style.display = "none";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
}
function mostrarpanelatributos() {
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("botonmaximizar").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    //document.getElementById("panel_atributos").style.display = "block";
    document.getElementById("tablaatributos").style.display = "block";
    document.getElementById("botonmostrarpanelatributos").style.display = "none";
    //document.getElementById("botonocultarpanelatributos").style.display = "block";
}

function mapposi(coord, giro) {
    var coo = coord.toString(function () {
        return(this.lat(), this.lng());
    });
    var res = coo.substr(1, coo.length - 2).split(",");
    var a = res[0];
    res[0] = +res[1];
    res[1] = +a;
    var feat = new ol.Feature({
        geometry: new ol.geom.Point(res)
    });
    feat.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    var geom = feat.getGeometry();
    var view = map.getView();
    view.setCenter(geom.getFirstCoordinate());
    view.setZoom(19);
    var markerSource = highlight.getSource();
    markerSource.clear();
    if (giro >= 348.75 && giro <= 11.25) {
        highlight.setStyle(street1);
    } else if (giro >= 11.25 && giro <= 33.75) {
        highlight.setStyle(street2);
    } else if (giro >= 33.75 && giro <= 56.25) {
        highlight.setStyle(street3);
    } else if (giro >= 56.25 && giro <= 78.75) {
        highlight.setStyle(street4);
    } else if (giro >= 78.75 && giro <= 101.25) {
        highlight.setStyle(street5);
    } else if (giro >= 101.25 && giro <= 123.75) {
        highlight.setStyle(street6);
    } else if (giro >= 123.75 && giro <= 146.25) {
        highlight.setStyle(street7);
    } else if (giro >= 146.25 && giro <= 168.75) {
        highlight.setStyle(street8);
    } else if (giro >= 168.75 && giro <= 191.25) {
        highlight.setStyle(street9);
    } else if (giro >= 191.25 && giro <= 213.75) {
        highlight.setStyle(street10);
    } else if (giro >= 213.75 && giro <= 236.25) {
        highlight.setStyle(street11);
    } else if (giro >= 236.25 && giro <= 258.75) {
        highlight.setStyle(street12);
    } else if (giro >= 258.75 && giro <= 281.25) {
        highlight.setStyle(street13);
    } else if (giro >= 281.25 && giro <= 303.75) {
        highlight.setStyle(street14);
    } else if (giro >= 303.75 && giro <= 326.25) {
        highlight.setStyle(street15);
    } else if (giro >= 326.25 && giro <= 348.75) {
        highlight.setStyle(street16);
    }
    markerSource.addFeature(feat);
}
function cerrarbarrasconsultas() {
    document.getElementById("barra_alineamiento").style.display = "none";
    document.getElementById("barra_predioshasusos").style.display = "none";
}
function upd(validac) {
    var urlphp = 'http://35.184.79.25/charge.php?ref=' + validac;
    $.ajax({
        url: urlphp,
        dataType: 'jsonp',
        type: "GET",
        async: false,
        success: function () {}
    });
    $('#myModalC').modal('hide');
    alert("Solicitud aceptada, mañana se veran reflejados sus cambios");
}
function alertDGC(mensaje) {
    var dgcTiempo = 500
    var ventanaCS = '<div class="dgcAlert"><div class="dgcVentana"><div class="dgcCerrar"></div><div class="dgcMensaje">' + mensaje + '<img id="avat2" src="./avatar/avatar_02.gif">' + '<br><div class="dgcAceptar">Aceptar</div></div></div></div></div>';
    $('body').append(ventanaCS);
    var alVentana = $('.dgcVentana').height();
    var alNav = $(window).height();
    var supNav = $(window).scrollTop();
    $('.dgcAlert').css('height', $(document).height());
    $('.dgcVentana').css('top', ((alNav - alVentana) / 2 + supNav - 100) + 'px');
    $('.dgcAlert').css('display', 'block');
    $('.dgcAlert').animate({opacity: 1}, dgcTiempo);
    $('.dgcCerrar,.dgcAceptar').click(function (e) {
        $('.dgcAlert').animate({opacity: 0}, dgcTiempo);
        setTimeout("$('.dgcAlert').remove()", dgcTiempo);
    });
}
window.alert = function (message) {
    alertDGC(message);
};
function habilitar(value)
{
    if (document.getElementById("checkconstruccion").checked == true)
    {
        document.getElementById("botonlicconstruc").style.display = "block";
    } else {
        document.getElementById("botonlicconstruc").style.display = "none";
    }
    if (document.getElementById("checkservpublico").checked == true)
    {
        document.getElementById("botonservpublico").style.display = "block";
    } else {
        document.getElementById("botonservpublico").style.display = "none";
    }
    if (document.getElementById("checkfotografia").checked == true)
    {
        document.getElementById("botonfotografia").style.display = "block";
    } else {
        document.getElementById("botonfotografia").style.display = "none";
    }
    if (document.getElementById("checkdoc").checked == true)
    {
        document.getElementById("botondoc").style.display = "block";
    } else {
        document.getElementById("botondoc").style.display = "none";
    }
}
function enviargesstor()
{
    alert("GESSTOR INFORMA:</br></br>La solicitud ###### fue radicada exitosamente");
}
function comparacion()
{
    window.open('./control/comp/comp.html', '_blank');
}
function cerrardirec()
{
    document.getElementById("consultas_totem").style.display = "none";
    document.getElementById("exp1").style.display = "none";
}
function existeUrl(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
}
function listaprediototem() {
    document.getElementById("inputdirecciontotemp").value = "";
    document.getElementById("inputrefcatotemp").value = "";
    var x = document.getElementById("sel1").value;
    if (x === 'Busqueda por Dirección') {
        document.getElementById("buscar_ref").style.display = "block";
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("products").style.display = "none";
        document.getElementById("inputdirecciontotemp").style.display = "block";
        document.getElementById("inputrefcatotemp").style.display = "none";
        document.getElementById("inputrefcatotemp").style.display = "none";
    } else if (x === 'Busqueda por Referencia Catastral') {
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputdirecciontotemp").style.display = "none";
        document.getElementById("products").style.display = "none";
        document.getElementById("inputrefcatotemp").style.display = "block";
        document.getElementById("inputmatriculatotemp").style.display = "none";
    } else if (x === 'Busqueda por Matricula Inmobiliaria') {
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputdirecciontotemp").style.display = "none";
        document.getElementById("products").style.display = "none";
        document.getElementById("inputrefcatotemp").style.display = "none";
        document.getElementById("inputmatriculatotemp").style.display = "block";
    }
}
function cambiocatastro() {
    document.getElementById("pestp").style.backgroundColor = "#a6a6a6";
    document.getElementById("pesth").style.backgroundColor = "#a6a6a6";
    document.getElementById("pestc").style.backgroundColor = "#639BB3";
    document.getElementById("panel_atr_totem").style.display = "none";
    document.getElementById("panel_atr_totem_planeacion").style.display = "none";
    document.getElementById("panel_atr_totem_catastro").style.display = "block";
}
function cambiohacienda() {
    document.getElementById("pestp").style.backgroundColor = "#a6a6a6";
    document.getElementById("pesth").style.backgroundColor = "#639BB3";
    document.getElementById("pestc").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem").style.display = "block";
    document.getElementById("panel_atr_totem_catastro").style.display = "none";
    document.getElementById("panel_atr_totem_planeacion").style.display = "none";
}
function cambioplaneacion() {
    document.getElementById("pestp").style.backgroundColor = "#639BB3";
    document.getElementById("pesth").style.backgroundColor = "#a6a6a6";
    document.getElementById("pestc").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem").style.display = "none";
    document.getElementById("panel_atr_totem_catastro").style.display = "none";
    document.getElementById("panel_atr_totem_planeacion").style.display = "block";
}
function menutotem() {
    document.getElementById("pestp").style.backgroundColor = "#a6a6a6";
    document.getElementById("pesth").style.backgroundColor = "#639BB3";
    document.getElementById("pestc").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem").style.display = "block";
    document.getElementById("panel_atr_totem_catastro").style.display = "none";
    document.getElementById("inputdirecciontotemp").value = "";
    document.getElementById("volvertotem").style.display = "none";
    document.getElementById("menu_totemp").style.display = "block";
}
function enviarcorreo(ref) {
    //console.log(ref);
    //var dat = enviarRef(ref);
    //console.log(dat);
    document.getElementById("inputemail").value;
    var urls = "./mail/envio_mail.php";
    var req = new ajaxRequest();
    var url = urls + "?c=" + document.getElementById("inputemail").value + "&ref=" + ref;
    req.open("GET", url, false);
    req.send();
    alert("<br>La información fue enviada al correo electrónico:<br><br>" + document.getElementById("inputemail").value + "<br><br><br><br>");
}
function volvertotemboton() {
    document.getElementById("volver").style.display = "none";
    document.getElementById("menu_predio").style.display = "none";
    document.getElementById("menumanzanatotem").style.display = "none";
    document.getElementById("menu_totemp").style.display = "block";
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