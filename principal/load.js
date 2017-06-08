function resetpass() {
    //console.log(document.getElementById("email").value);
    var select = search("preproduccion:mailUser", document.getElementById("email").value);
    if (select){
        //console.log(select[0][0]);
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
        var contraseña = "";
        for (i=0; i<6; i++){
            contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        }
        var cont = hex_md5(contraseña);
        var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.3.4:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="user:usuario">\
                        <Property>\
                            <Name>contrasena</Name>\
                            <Value>' + cont + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + select[0][0] + '"/>\
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
            },
            error: function (xml) {
                console.log('error');
            }
        });
    }
    var urls = "./mail/envio_mail.php";
    var req = new ajaxRequest();
    var url = urls + "?c=" + document.getElementById('email').value + "&u=" + select[0][1] + "&p=" + contraseña + "&ch=si";
    req.open("GET", url, false);
    req.send();
}
function onload() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {
        deleteCookie(cookies[i].split("=")[0]);
    }
    var val = document.location.href;
    var validar = val.split("?");
    if (validar[1] === "ig=error")
    {
        document.getElementById('er').style.display = 'block';
    } else
    {
        document.getElementById('er').style.display = 'none';
    }
    if (validar[1] === "ig=navegador")
    {
        document.getElementById('er1').style.display = 'block';
    } else
    {
        document.getElementById('er1').style.display = 'none';
    }
}
function setC(name, value, expirydays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirydays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    //console.log(name + "=" + value + "; " + expires+";path=/");
    document.cookie = name + "=" + value + "; " + expires + ";path=/";
}
function deleteCookie(name) {
    setC(name, "", -1);
}
function setCookie(cname, cvalue, exdays) {
    if (document.getElementById("u").value !== "" && document.getElementById("p").value !== "")
    {
        var pw = hex_md5(document.getElementById("p").value);
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 36000;
        now.setTime(expireTime);
        //console.log(document.getElementById("u").value + "=" + pw + ";expires="+now.toGMTString()+";path=/");
        document.cookie = document.getElementById("u").value + "=" + pw + ";expires=" + now.toGMTString() + ";path=/";
    }
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