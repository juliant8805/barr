var BarrioStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    /*fill : new ol.style.Fill({
     color : "rgba(0,0,255,0.7)"
     })*/
    text: new ol.style.Text({
        font: '12px helvetica,sans-serif',
        scale: 1.5,
        fill: new ol.style.Fill({
            color: '#000000'
        }),
        stroke: new ol.style.Stroke({
            color: '#FFFFFF',
            width: 3.5
        })
    })
});

var PredioStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    fill: new ol.style.Fill({
        color: "rgba(0,255,255,0.3)"
    })
});

var PuntoStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",

    }),
    fill: new ol.style.Fill({
        color: "rgba(0,255,255,0.3)"
    })
});
// A point marker style using a flag image as the icon.
var flagStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.2, 0.9],
        opacity: 0.75,
        scale: 0.25,
        src: './imagenes/flag.png'
    })
});
var street1 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/1.png'
    })
});
var street2 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/2.png'
    })
});
var street3 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/3.png'
    })
});
var street4 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/4.png'
    })
});
var street5 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/5.png'
    })
});
var street6 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],

        scale: 1,
        src: './imagenes/street/6.png'
    })
});
var street7 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/7.png'
    })
});
var street8 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/8.png'
    })
});
var street9 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/9.png'
    })
});
var street10 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/10.png'
    })
});
var street11 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/11.png'
    })
});
var street12 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/12.png'
    })
});
var street13 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/13.png'
    })
});
var street14 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/14.png'
    })
});
var street15 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/15.png'
    })
});
var street16 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/16.png'
    })
});
var ubicacion = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        opacity: 1,
        scale: 0.3,
        src: './imagenes/ubicacion.png'
    })
});
//AUTOCOMPLETE INITIAL
$(".direccion").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#address1").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#inputmanzanatotem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#inputbarriototem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#inputsitiototem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#inputsitiostotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#inputlocalidadtotem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#direccion_gestor").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#cedul").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#barrio").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#comuna").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#localidad").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#manzana").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#inputmanzanatotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#inputbarriototemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#codigo").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#matricula").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#inputmatriculatotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#inputrefcatotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#propietarios").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#input_ladomanzana").autocomplete({
    minLength: 1,
    source: addressSource,
    select: ladomanzanaSelect
});
$("#input_predioshasusos").autocomplete({
    minLength: 1,
    source: addressSource,
    select: predioshasusosSelect
});
function addressSource(requestString, responseFunc) {
    //console.log(requestString);
    //globalstyle = "sinconsulta";
    predio.setVisible(true);
    //console.log(requestString);
    // Strip crazy (non-alpha) characters from the input string.
    var querystr = requestString.term;
    //console.log(querystr);
    // If there's nothing left after stripping, just return null.
    if (querystr.length === 0) {
        response([]);
        return;
    }
    // Form the input parameters into a standard viewparams
    // object string.
    var viewParamsStr = viewparamsToStr({
        query: querystr
    });
    // Set up the parameters for our WFS call to the address_autocomplete
    // web service.
    //busqueda direccion y codigo en reg
    if (requestString.val === "direccion") {
        //console.log(4);
        var tempname = "preproduccion:codigo_autocompletar";
        var temp = "codigo";
    } else if ($("#direccion")["0"].value !== "" || $("#inputdirecciontotem")["0"].value !== "" || $("#inputdirecciontotemp")["0"].value !== "") {
        var tempname = "preproduccion:buscar_direccion_registro1";
        var temp = "direccion";
    }
    //busqueda cod en reg 
    else if ($("#codigo")["0"].value !== "") {
        var tempname = "preproduccion:buscar_cod_reg";
        var temp = "cod";//no significa que este buscando por direccion; busqueda por codigo
    } else if ($("#propietarios")["0"].value !== "") {
        var tempname = "preproduccion:buscar_propietario_reg";
        var temp = "propietario";
    } else if ($("#cedul")["0"].value !== "") {
        var tempname = "preproduccion:buscar_cedula_reg";
        var temp = "cedula";
    } else if ($("#inputmanzanatotemp")["0"].value !== "") {
        var tempname = "preproduccion:buscar_manzana";
        var temp = "codigo";
    }  else if ($("#inputrefcatotemp")["0"].value !== "") {
        var tempname = "preproduccion:buscar_referencia_reg";
        var temp = "referencia_cat";
    } else if ($("#matricula")["0"].value !== "" || $("#inputmatriculatotemp")["0"].value !== "") {
        var tempname = "preproduccion:buscar_matricula_reg";
        var temp = "matricula";
    } else if ($("#address1")["0"].value !== "" || $("#inputsitiototem")["0"].value !== "" || $("#inputsitiostotemp")["0"].value !== "") {
        var tempname = "preproduccion:sitios_autocompletar";
        var temp = "address1";
    } else if ($("#direccion_gestor")["0"].value !== "") {
        var tempname = "preproduccion:buscar_dir_gestor";
        var temp = "direcci";
    } else if ($("#barrio")["0"].value !== "" || $("#inputbarriototem")["0"].value !== "" || $("#inputbarriototemp")["0"].value !== "") {
        var tempname = "preproduccion:buscar_barrio";
        var temp = "nombre";
    } else if ($("#comuna")["0"].value !== "") {
        var tempname = "preproduccion:buscar_comuna";
        var temp = "nombre";
    } else if ($("#localidad")["0"].value !== "" || $("#inputlocalidadtotem")["0"].value !== "") {
        var tempname = "preproduccion:buscar_localidad";
        var temp = "nombre";
    } else if ($("#manzana")["0"].value !== "" || $("#inputmanzanatotem")["0"].value !== "") {
        var tempname = "preproduccion:buscar_manzana";
        var temp = "codigo";
    }   
    else if ($("#input_ladomanzana")["0"].value !== "") {
        var tempname = "preproduccion:ladomanzana_autocompletar";
        var temp = "lado_manzanas";
    } else if ($("#input_predioshasusos")["0"].value !== "") {
        var tempname = "preproduccion:predioshasusos_autocompletar";
        var temp = "referencia";
    }
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: tempname,
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
            var geojson = new ol.source.GeoJSON({
                object: data
            });
            var arr = [];

            if (temp === "direccion") {
                //console.log(data.features);
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        //label: data.features[i].properties.direccion,
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.direccion,
                        feature: data
                    });
                }
            } else if (temp === "cod") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.codigo,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "matricula") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.matricula,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "propietario") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.propietario,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "cedula") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.cedula,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "referencia_cat") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.ref_catastral,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else {
                geojson.forEachFeature(function (feat) {
                    arr.push({
                        label: feat.get(temp),
                        value: feat.get(temp),
                        feature: feat,
                        direccionoriginal: requestString.direccionoriginal
                    });
                });
            }
            //console.log(arr);
            if (arr.length !== 0) {
                //console.log(requestString.val);
                if (requestString.val === "direccion") {
                    //console.log(requestString);
                    var arreglado = {};
                    for (var i = 0; i < arr.length; ++i) {
                        arreglado[i] = arr[i];
                    }
                    arreglado.item = arreglado["0"];
                    //console.log(arreglado);
                    addressSelect(1, arreglado);
                }
                try {
                    responseFunc(arr);
                } catch (err) {
                    var arreglado = {};
                    arreglado.item = arr["0"];
                    try {
                        addressSelect(1, arreglado);
                    } catch (err) {
                        alert("GESSTOR INFORMA:</br></br>La información se encuentra en la base de datos alfanumérica y no en la base de datos geográfica, este caso se presenta por diferencia de vigencias de  información</br>");
                    }
                }
            } else {
                if (temp === 'direcci') {
                    codeAddress(viewParamsStr);
                } else {
                    if ((tempname == "preproduccion:buscar_direccion_registro1") && (modulo !== 'totem')) {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a la consulta en la base de datos Catastral. Por favor intente lo siguiente:</br> 1). Ingrese la dirección mediante abreviaturas, ejemplo: (calle) C 45 25 07 ó (Carrera) K 35 48 31</br> 2). Obtenga una ubicación aproximada mediante el Georeferenciador:</br> <input type='image' id='indicadorgeo' name='boton_geocoder' src='imagenes/geocoder.png' onclick='busqueda(name)'></br>");
                        document.getElementById("direccion").value = "";
                    } else if (tempname == "preproduccion:buscar_barrio") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el nombre de Barrio Ingresado, por favor verifique que el nombre ingresado sea correcto. Ejemplo:</br></br> La Concepcion</br>Paseo de La Castella</br>Zona Franca</br>etc.</br>");
                        document.getElementById("barrio").value = "";
                    } else if (tempname == "preproduccion:buscar_localidad") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el nombre de Localidad Ingresado, por favor verifique que el nombre ingresado corresponda a una de las 5 Localidades Existentes:</br></br>Riomar</br>Centro Historico</br>Suroccidente</br>Suroriente</br>Metropolitana</br>");
                        document.getElementById("localidad").value = "";
                    } else if (tempname == "preproduccion:buscar_manzana") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código de manzana ingresado, tenga en cuenta que todos los códigos comienzan por 08001... Ejemplo:</br></br>08001010100000198</br>08001010300000334</br>08001010600000646</br>etc.</br>");
                        document.getElementById("manzana").value = "";
                    } else if (tempname == "preproduccion:sitios_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el sitio de interés ingresado, por favor verifique que el nombre ingresado sea correcto. Ejemplo:</br></br>Gerencia de Gestion Catastral</br>Hospital General</br>Tienda Los Robles</br>etc.</br>");
                        document.getElementById("address1").value = "";
                    } else if (tempname == "preproduccion:buscar_matricula_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código de matricula ingresado, por favor verifique que el código de matricula inmobiliario ingresado sea correcto. Ejemplo:</br></br>040-86998</br>");
                        document.getElementById("matricula").value = "";
                    } else if (tempname == "preproduccion:buscar_cod_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código catastral ingresado, por favor verifique que el código ingresado sea correcto. Ejemplo:</br></br>080010104000005340004000000000</br>");
                        document.getElementById("codigo").value = "";
                    } else if (tempname == "preproduccion:buscar_propietario_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el nombre de propietario ingresado, por favor verifique que el nombre ingresado sea correcto.</br>");
                        document.getElementById("propietarios").value = "";
                    } else if (tempname == "preproduccion:buscar_cedula_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el ID de propietario ingresado, por favor verifique que el ID (Cédula, Nit etc.) ingresado sea correcto.</br>");
                        document.getElementById("cedul").value = "";
                    } else if (tempname == "preproduccion:ladomanzana_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información de Alineamiento Urbano con este Código Catastral, por favor verifique que el Código Catastral ingresado sea correcto. Ejemplo: </br></br>0800101010021B</br>");
                        document.getElementById("input_ladomanzana").value = "";
                    } else if (tempname == "preproduccion:predioshasusos_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información de Usos Permitidos con esta referencia Catastral, por favor verifique que la referencia catastral ingresada sea correcta. Ejemplo: </br></br>010101710004000</br>");
                        document.getElementById("input_predioshasusos").value = "";
                    } else {
                        if (modulo !== 'totem') {
                            alert("GESSTOR INFORMA:</br></br>La información se encuentra en la base de datos alfanumérica y no en la base de datos geográfica, este caso se presenta por diferencia de vigencias de  información</br>");
                            document.getElementById("direccion").value = "";
                            document.getElementById("codigo").value = "";
                            document.getElementById("propietarios").value = "";
                            document.getElementById("cedul").value = "";
                            document.getElementById("barrio").value = "";
                            document.getElementById("matricula").value = "";
                            document.getElementById("address1").value = "";
                            document.getElementById("localidad").value = "";
                            document.getElementById("manzana").value = "";
                            document.getElementById("input_ladomanzana").value = "";
                            document.getElementById("input_predioshasusos").value = "";
                        }
                    }
                }
            }
        },
        error: function () {
            console.log("error");
        }
    });
}

function addressSelect(event, ui) {
    //console.log(ui);
    document.getElementById("exp1").style.display = "none";
    document.getElementById("direccion").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("propietarios").value = "";
    document.getElementById("cedul").value = "";
    document.getElementById("barrio").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("manzana").value = "";
    document.getElementById("input_ladomanzana").value = "";
    document.getElementById("input_predioshasusos").value = "";
    //var select = validacionusuarios();
    var consultaregistro = new Object();
    consultaregistro.term = ui.item.codigo;
    consultaregistro.val = "direccion";
    //consultaregistro.direccionoriginal = ui.item.value;
    //consultaregistro.direccion = ui.item.direccion;
    if (ui.item.direccion) {
        consultaregistro.direccionoriginal = ui.item.direccion;
        dataprop = ui.item.feature.features["0"].properties.propietario;
    } else {
        consultaregistro.direccionoriginal = ui.item.value;
    }
    try {
        if (!ui.item.feature.features["0"].geometry) {
            //console.log(1);
            addressSource(consultaregistro);
            return;
        }
    } catch (err) {
        // console.log(2);
    }
    var feat = ui.item.feature;
    globalstyle = "sinconsulta";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    values = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSourceAlineamiento.clear();
    markerSourceAlineamiento.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    //var select = validacionusuarios();
    //console.log(modulo);
    if (modulo === 'planeacion') {
        predio.setVisible(true);
        /*document.getElementById("panel_atributos").style.display = "block";
         document.getElementById("tablaatributos").style.display = "block";
         document.getElementById("botonocultarpanelatributos").style.display = "block";*/
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                //console.log(format[0]);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codfoto = values.codigo_ant.substring(0, 17);
                    select[0] = "<b>Codigo Manzana</b>";
                    select[1] = "<b>Codigo Catastral Nuevo</b>";
                    select[2] = "<b>Codigo Catastral Anterior</b>";
                    select[3] = "<b>Dirección</b>";
                    select[4] = "<b>Estratificación Oficial</b>";
                    select[5] = "<b>Remoción en Masa</b>";
                    select[6] = "<b>Amenaza de Inundación</b>";
                    select[7] = "<b>Fotografias</b>";
                    //select[8] = "<b>Street View</b>";
                    sel[0] = values.manzana_co;
                    sel[1] = values.codigo;
                    sel[2] = values.codigo_ant;
                    sel[3] = ui.item.direccionoriginal;
                    sel[4] = values.estratific;
                    sel[5] = values.remosion;
                    sel[6] = values.inundacion;
                    sel[7] = document.createElement("a");
                    sel[7].id = "img1";
                    sel[7].style = "width: 30px; height: 50px;";
                    sel[7].target = "marco";
                    sel[7].setAttribute("onclick", "open_streetview()");
                    //sel[7].onclick = "open_streetview()";
                    sel[7].href = "https://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    imag[7] = document.createElement("img");
                    imag[7].id = "im1";
                    imag[7].className = "pequeña";
                    imag[7].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    stv[7] = document.createElement("a");
                    stv[7].id = "imgstreet1";
                    stv[7].target = "marco";
                    stv[7].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[7].setAttribute("onclick", "open_streetview()");
                    ig[7] = document.createElement("img");
                    ig[7].src = "./imagenes/streetview.png";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 7) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'catastro') {
        predio.setVisible(true);
        $.ajax({
            url: url,
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    if (typeof dataprop != 'undefined') {
                        var cantprop = search("preproduccion:CantidadPropietarios", dataprop);
                        var propval = cantprop.length;
                    } else {
                        var propval = 0;
                    }
                    if (propval > 1) {
                        //console.log(cantprop["0"]["0"]);
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>PROPIETARIO</b>";
                        var select = [];
                        var sel = [];
                        for (i = 0; i < cantprop.length; i++) {
                            var tablaph = ("<table max-width=20 border=1>");
                            for (i = 0; i < cantprop.length; i++) {
                                tablaph += ("<tr>");
                                tablaph += ("<td><b>" + cantprop[i]["0"] + "</b></td>");
                                tablaph += ("</tr>");
                            }
                            tablaph += ("</table>");
                        }
                        select[0] = "<b>Propietario</b>";
                        select[1] = "<b>Cantidad de Predios</b>";
                        select[2] = "<b>Direcciones</b>";
                        sel[0] = dataprop;
                        sel[1] = cantprop.length;
                        sel[2] = tablaph;
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.innerHTML = select[i];
                            if (i === 3) {
                                cell2.appendChild(stv[i]);
                                stv[i].appendChild(ig[i]);
                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        }
                    } else {
                        var feature = features[0];
                        var values = feature.getProperties();
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        var codfoto = values.codigo_ant.substring(0, 17);
                        var direccion = ui.item.direccionoriginal;
                        if (values.ph_calc == 1) {
                            var datoshaciendaph = search("preproduccion:ConsultaHaciendaPh", direccion);
                            var areaterreno = datoshaciendaph["0"][0];
                            var areaconstruida = datoshaciendaph["0"][1];
                            var impuestopredial = datoshaciendaph["0"][2];
                            var avaluohacienda = datoshaciendaph["0"][3];
                        } else {
                            var areaterreno = values.area_terreno_hacienda;
                            var areaconstruida = values.area_construida_hacienda;
                            var impuestopredial = values.impuesto_hacienda;
                            var avaluohacienda = values.avaluo_hacienda;
                        }
                        var propietario = search("preproduccion:ConsultaPropietario", ui.item.direccionoriginal);
                        for (i = 0; i < propietario.length; i++) {
                            var tablaprop = ("<table max-width=20 border=1>");
                            for (i = 0; i < propietario.length; i++) {
                                tablaprop += ("<tr>");
                                tablaprop += ("<td><b>" + propietario[i] + "</b></td>");
                                tablaprop += ("</tr>");
                            }
                            tablaprop += ("</table>");
                        }
                        select[0] = "<b>Codigo Manzana</b>";
                        select[1] = "<b>Codigo Catastral Nuevo</b>";
                        select[2] = "<b>Codigo Catastral Anterior</b>";
                        select[3] = "<b>Dirección</b>";
                        select[4] = "<b>Código ZHG</b>";
                        select[5] = "<b>Valor m2 ZHG</b>";
                        select[6] = "<b>Código ZHF</b>";
                        select[7] = "<b>Destino</b>";
                        select[8] = "<b>Avalúo Catastral 2017</b>";
                        select[9] = "<b>Impuesto Predial 2017</b>";
                        select[10] = "<b>Uso Permitido</b>";
                        select[11] = "<b>Uso Actual</b>";
                        select[12] = "<b>Área de Terreno</b>";
                        select[13] = "<b>Área Construida</b>";
                        select[14] = "<b>Propietario(s)</b>";
                        select[15] = "<b>Fotografias</b>";
                        sel[0] = values.manzana_co;
                        sel[1] = values.codigo;
                        sel[2] = values.codigo_ant;
                        sel[3] = ui.item.direccionoriginal;
                        sel[4] = values.zhg;
                        sel[5] = values.valor_m2_zhg;
                        sel[6] = values.zhf;
                        sel[7] = values.destino_hacienda;
                        sel[8] = avaluohacienda;
                        sel[9] = impuestopredial;
                        sel[10] = values.norma_uso;
                        sel[11] = values.uso_actual_zhf;
                        sel[12] = areaterreno;
                        sel[13] = areaconstruida;
                        sel[14] = tablaprop;
                        sel[15] = document.createElement("a");
                        sel[15].id = "img1";
                        sel[15].style = "width: 30px; height: 50px;";
                        sel[15].target = "marco";
                        sel[15].setAttribute("onclick", "open_streetview()");
                        sel[15].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                        imag[15] = document.createElement("img");
                        imag[15].id = "im1";
                        imag[15].className = "pequeña";
                        imag[15].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                        stv[15] = document.createElement("a");
                        stv[15].id = "imgstreet1";
                        stv[15].target = "marco";
                        stv[15].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[15].setAttribute("onclick", "open_streetview()");
                        ig[15] = document.createElement("img");
                        ig[15].src = "./imagenes/streetview.png";
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.innerHTML = select[i];
                            if (i === 15) {
                                cell2.appendChild(sel[i]);
                                //cell2.appendChild(imag[i]);
                                sel[i].appendChild(imag[i]);
                                cell2.appendChild(stv[i]);
                                //cell2.appendChild(ig[i]);
                                stv[i].appendChild(ig[i]);

                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        }
                    }
                    delete dataprop;
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'hacienda') {
        predio.setVisible(true);
        $.ajax({
            url: url,
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    if (typeof dataprop != 'undefined') {
                        var cantprop = search("preproduccion:CantidadPropietarios", dataprop);
                        var propval = cantprop.length;
                    } else {
                        var propval = 0;
                    }
                    if (propval > 1) {
                        //console.log(cantprop["0"]["0"]);
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>PROPIETARIO</b>";
                        var select = [];
                        var sel = [];
                        for (i = 0; i < cantprop.length; i++) {
                            var tablaph = ("<table max-width=20 border=1>");
                            for (i = 0; i < cantprop.length; i++) {
                                tablaph += ("<tr>");
                                tablaph += ("<td><b>" + cantprop[i]["0"] + "</b></td>");
                                tablaph += ("</tr>");
                            }
                            tablaph += ("</table>");
                        }
                        select[0] = "<b>Propietario</b>";
                        select[1] = "<b>Cantidad de Predios</b>";
                        select[2] = "<b>Direcciones</b>";
                        sel[0] = dataprop;
                        sel[1] = cantprop.length;
                        sel[2] = tablaph;
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.innerHTML = select[i];
                            if (i === 3) {
                                cell2.appendChild(stv[i]);
                                stv[i].appendChild(ig[i]);
                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        }

                    } else {
                        var feature = features[0];
                        var values = feature.getProperties();
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        var codfoto = values.codigo_ant.substring(0, 17);
                        var direccion = ui.item.direccionoriginal;
                        if (values.ph_calc == 1) {
                            var datoshaciendaph = search("preproduccion:ConsultaHaciendaPh", direccion);
                            var areaterreno = datoshaciendaph["0"][0];
                            var areaconstruida = datoshaciendaph["0"][1];
                            var impuestopredial = datoshaciendaph["0"][2];
                            var avaluohacienda = datoshaciendaph["0"][3];
                        } else {
                            var areaterreno = values.area_terreno_hacienda;
                            var areaconstruida = values.area_construida_hacienda;
                            var impuestopredial = values.impuesto_hacienda;
                            var avaluohacienda = values.avaluo_hacienda;
                        }
                        var propietario = search("preproduccion:ConsultaPropietario", ui.item.direccionoriginal);
                        for (i = 0; i < propietario.length; i++) {
                            var tablaprop = ("<table max-width=20 border=1>");
                            for (i = 0; i < propietario.length; i++) {
                                tablaprop += ("<tr>");
                                tablaprop += ("<td><b>" + propietario[i] + "</b></td>");
                                tablaprop += ("</tr>");
                            }
                            tablaprop += ("</table>");
                        }
                        var estacueducto = values.estrato_acueducto;
                        var estalcantarillado = values.estrato_alcantarillado;
                        var estaseo = values.estrato_aseo;
                        if (estacueducto == 11) {
                            estacueducto = 'Industria (11)';
                        }
                        if (estacueducto == 12) {
                            estacueducto = 'Comercial (12)';
                        }
                        if (estacueducto == 13) {
                            estacueducto = 'Especial (13)';
                        }
                        if (estacueducto == 14) {
                            estacueducto = 'Oficial (14)';
                        }
                        if (estalcantarillado == 11) {
                            estalcantarillado = 'Industria (11)';
                        }
                        if (estalcantarillado == 12) {
                            estalcantarillado = 'Comercial (12)';
                        }
                        if (estalcantarillado == 13) {
                            estalcantarillado = 'Especial (13)';
                        }
                        if (estalcantarillado == 14) {
                            estalcantarillado = 'Oficial (14)';
                        }
                        if (estaseo == 11) {
                            estaseo = 'Industria (11)';
                        }
                        if (estaseo == 12) {
                            estaseo = 'Comercial (12)';
                        }
                        if (estaseo == 13) {
                            estaseo = 'Especial (13)';
                        }
                        if (estaseo == 14) {
                            estaseo = 'Oficial (14)';
                        }
                        select[0] = "<b>Codigo Manzana</b>";
                        select[1] = "<b>Codigo Catastral Nuevo</b>";
                        select[2] = "<b>Codigo Catastral Anterior</b>";
                        select[3] = "<b>Dirección</b>";
                        select[4] = "<b>Código ZHG</b>";
                        select[5] = "<b>Valor m2 ZHG</b>";
                        select[6] = "<b>Código ZHF</b>";
                        select[7] = "<b>Destino Económico</b>";
                        select[8] = "<b>Estratificación Acueducto</b>";
                        select[9] = "<b>Estratificación Alcantarillado</b>";
                        select[10] = "<b>Estratificación Aseo</b>";
                        select[11] = "<b>Uso Electricaribe</b>";
                        select[12] = "<b>Avalúo Catastral 2017</b>";
                        select[13] = "<b>Impuesto Predial 2017</b>";
                        select[14] = "<b>Uso Permitido</b>";
                        select[15] = "<b>Uso Actual</b>";
                        select[16] = "<b>Área de Terreno</b>";
                        select[17] = "<b>Área Construida</b>";
                        select[18] = "<b>Propietario(s)</b>";
                        select[19] = "<b>Fotografias</b>";
                        sel[0] = values.manzana_co;
                        sel[1] = values.codigo;
                        sel[2] = values.codigo_ant;
                        sel[3] = ui.item.direccionoriginal;
                        sel[4] = values.zhg;
                        sel[5] = values.valor_m2_zhg;
                        sel[6] = values.zhf;
                        sel[7] = values.destino_hacienda;
                        sel[8] = estacueducto;
                        sel[9] = estalcantarillado;
                        sel[10] = estaseo;
                        sel[11] = values.uso_elect;
                        sel[12] = avaluohacienda;
                        sel[13] = impuestopredial;
                        sel[14] = values.norma_uso;
                        sel[15] = values.uso_actual_zhf;
                        sel[16] = areaterreno;
                        sel[17] = areaconstruida;
                        sel[18] = tablaprop;
                        sel[19] = document.createElement("a");
                        sel[19].id = "img1";
                        sel[19].style = "width: 30px; height: 50px;";
                        sel[19].target = "marco";
                        sel[19].setAttribute("onclick", "open_streetview()");
                        sel[19].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                        imag[19] = document.createElement("img");
                        imag[19].id = "im1";
                        imag[19].className = "pequeña";
                        imag[19].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                        stv[19] = document.createElement("a");
                        stv[19].id = "imgstreet1";
                        stv[19].target = "marco";
                        stv[19].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[19].setAttribute("onclick", "open_streetview()");
                        ig[19] = document.createElement("img");
                        ig[19].src = "./imagenes/streetview.png";
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.innerHTML = select[i];
                            if (i === 19) {
                                cell2.appendChild(sel[i]);
                                //cell2.appendChild(imag[i]);
                                sel[i].appendChild(imag[i]);
                                cell2.appendChild(stv[i]);
                                //cell2.appendChild(ig[i]);
                                stv[i].appendChild(ig[i]);

                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        }
                    }
                    delete dataprop;
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'sui') {
        predio.setVisible(true);
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var estacueducto = values.estrato_acueducto;
                    var estalcantarillado = values.estrato_alcantarillado;
                    var estaseo = values.estrato_aseo;
                    if (estacueducto == 11) {
                        estacueducto = 'Industria (11)';
                    }
                    if (estacueducto == 12) {
                        estacueducto = 'Comercial (12)';
                    }
                    if (estacueducto == 13) {
                        estacueducto = 'Especial (13)';
                    }
                    if (estacueducto == 14) {
                        estacueducto = 'Oficial (14)';
                    }
                    if (estalcantarillado == 11) {
                        estalcantarillado = 'Industria (11)';
                    }
                    if (estalcantarillado == 12) {
                        estalcantarillado = 'Comercial (12)';
                    }
                    if (estalcantarillado == 13) {
                        estalcantarillado = 'Especial (13)';
                    }
                    if (estalcantarillado == 14) {
                        estalcantarillado = 'Oficial (14)';
                    }
                    if (estaseo == 11) {
                        estaseo = 'Industria (11)';
                    }
                    if (estaseo == 12) {
                        estaseo = 'Comercial (12)';
                    }
                    if (estaseo == 13) {
                        estaseo = 'Especial (13)';
                    }
                    if (estaseo == 14) {
                        estaseo = 'Oficial (14)';
                    }
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codfoto = values.codigo_ant.substring(0, 17);
                    select[0] = "<b>Codigo Manzana</b>";
                    select[1] = "<b>Codigo Catastral Nuevo</b>";
                    select[2] = "<b>Codigo Catastral Anterior</b>";
                    select[3] = "<b>Dirección</b>";
                    select[4] = "<b>Estratificación Hacienda</b>";
                    select[5] = "<b>Estratificación Acueducto</b>";
                    select[6] = "<b>Estratificación Alcantarillado</b>";
                    select[7] = "<b>Estratificación Aseo</b>";
                    select[8] = "<b>Estratificación Electricaribe</b>";
                    select[9] = "<b>Uso Electricaribe</b>";
                    select[10] = "<b>Destino Económico</b>";
                    select[11] = "<b>Uso Permitido</b>";
                    select[12] = "<b>Uso Actual</b>";
                    select[13] = "<b>Unidades Acueducto</b>";
                    select[14] = "<b>Unidades Alcantarillado</b>";
                    select[15] = "<b>Unidades Aseo</b>";
                    select[16] = "<b>Tipo de Propiedad Prestadores</b>";
                    select[17] = "<b>Fotografias</b>";
                    sel[0] = values.manzana_co;
                    sel[1] = values.codigo;
                    sel[2] = values.codigo_ant;
                    sel[3] = ui.item.direccionoriginal;
                    sel[4] = values.estrato_hacienda;
                    sel[5] = estacueducto;
                    sel[6] = estalcantarillado;
                    sel[7] = estaseo;
                    sel[8] = values.estrato_elect;
                    sel[9] = values.uso_elect;
                    sel[10] = values.destino_hacienda;
                    sel[11] = values.norma_uso;
                    sel[12] = values.uso_actual_zhf;
                    sel[13] = values.unid_acu;
                    sel[14] = values.unid_alc;
                    sel[15] = values.unid_aseo;
                    sel[16] = values.tipo_prop_prest;
                    sel[17] = document.createElement("a");
                    sel[17].id = "img1";
                    sel[17].style = "width: 30px; height: 50px;";
                    sel[17].target = "marco";
                    sel[17].setAttribute("onclick", "open_streetview()");
                    sel[17].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    imag[17] = document.createElement("img");
                    imag[17].id = "im1";
                    imag[17].className = "pequeña";
                    imag[17].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    stv[17] = document.createElement("a");
                    stv[17].id = "imgstreet1";
                    stv[17].target = "marco";
                    stv[17].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[17].setAttribute("onclick", "open_streetview()");
                    ig[17] = document.createElement("img");
                    ig[17].src = "./imagenes/streetview.png";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 17) {
                            cell2.appendChild(sel[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            stv[i].appendChild(ig[i]);
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'totem') {
        predio.setVisible(true);
        document.getElementById("consultas_totem").style.display = "none";
        //document.getElementById("consultas_totemp").style.display = "none";
        document.getElementById("menu_predio").style.display = "none";
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codfoto = values.codigo_ant.substring(0, 17);
                    var ph = values.ph;
                    if (ph >= 800) {
                        var ref_cat = search("preproduccion:RefCatastral", ui.item.direccionoriginal);
                        //console.log(ui.item.direccionoriginal);
                        ref_cat = ref_cat["0"]["0"];
                    } else {
                        var ref_cat = values.ref_catastral;
                    }
                    ref_cat = "'" + ref_cat + "'";
                    var arregloDeSubCadenas = enviarRef(eval(ref_cat));
                    select[0] = "<b>Dirección</b>";
                    select[1] = "<b>Referencia Catastral</b>";
                    sel[0] = ui.item.direccionoriginal;
                    sel[1] = arregloDeSubCadenas[0];
                    for (i = 0; i < arregloDeSubCadenas.length - 1; i = i + 6) {
                        select[i + 2] = "<b></b>";
                        select[i + 3] = "<b>Destino Económico (" + arregloDeSubCadenas[i + 5] + ")</b>";
                        select[i + 4] = "<b>Estrato (" + arregloDeSubCadenas[i + 5] + ")</b>";
                        select[i + 5] = "<b>Valor Capital Impuesto Predial (" + arregloDeSubCadenas[i + 5] + ")</b>";
                        select[i + 6] = "<b>Valor Intereses Impuesto Predial (" + arregloDeSubCadenas[i + 5] + ")</b>";
                        select[i + 7] = "<b></b>";
                        sel[i + 2] = "";
                        sel[i + 3] = arregloDeSubCadenas[i + 1];
                        sel[i + 4] = arregloDeSubCadenas[i + 2];
                        sel[i + 5] = arregloDeSubCadenas[i + 3];
                        sel[i + 6] = arregloDeSubCadenas[i + 4];
                        sel[i + 7] = "";
                    }
                    var p = sel.length;
                    select[p] = "<b>Fotografias</b>";
                    sel[p] = document.createElement("a");
                    sel[p].id = "img1";
                    sel[p].style = "width: 30px; height: 50px;";
                    sel[p].target = "marco";
                    sel[p].setAttribute("onclick", "open_streetview()");
                    sel[p].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    imag[p] = document.createElement("img");
                    imag[p].id = "im1";
                    imag[p].className = "pequeña";
                    imag[p].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    stv[p] = document.createElement("a");
                    stv[p].id = "imgstreet1";
                    stv[p].target = "marco";
                    stv[p].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[p].setAttribute("onclick", "open_streetview()");
                    ig[p] = document.createElement("img");
                    ig[p].src = "./imagenes/streetview.png";
                    var campos = sel.length - 1;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === campos) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                    document.getElementById("panel_atr").style.maxHeight = "40em";
                }
            }
        });
    } else if (modulo === 'totempruebas') {
        predio.setVisible(true);
        document.getElementById("inputsitiostotemp").value = "";
        document.getElementById("inputmanzanatotemp").value = "";
        document.getElementById("inputbarriototemp").value = "";
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputmatriculatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";  
        document.getElementById("consultas_totem").style.display = "none";
        document.getElementById("menu_totemp").style.display = "none";
        document.getElementById("volver").style.display = "none";
        //document.getElementById("consultas_totemp").style.display = "none"; 
        document.getElementById("menu_predio").style.display = "none";
        document.getElementById("pestanastotem").style.display = "block";
        document.getElementById("volvertotem").style.display = "block";
        $.ajax({
            url: url,
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var table = document.getElementById("tblatt_totem_general");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.style.background = "#639BB3";
                    cell1.style.color = "white";
                    cell1.style.fontSize = "18px";
                    cell1.innerHTML = "<b>DATOS BÁSICOS DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codfoto = values.codigo_ant.substring(0, 17);
                    var ph = values.ph;
                    if (ph >= 800) {
                        var ref_cat = search("preproduccion:RefCatastral", ui.item.direccionoriginal);
                        var ref_c = ref_cat["0"]["0"];
                    } else {
                        var ref_c = values.ref_catastral;
                    }
                    var ref_c = "'" + ref_c + "'";
                    var arregloDeSubCadenas = enviarRef(eval(ref_c));
                    var men = arregloDeSubCadenas.join(",");
                    men = men.replace(/ /g, "?");
                    var referencia = arregloDeSubCadenas[0];
                    if (values.ph_calc == 1) {
                        var datoshaciendaph = search("preproduccion:ConsultaHaciendaPh", referencia);
                        var areaterreno = datoshaciendaph["0"][0];
                        var areaconstruida = datoshaciendaph["0"][1];
                        var impuestopredial = datoshaciendaph["0"][2];
                        var avaluohacienda = datoshaciendaph["0"][3];
                    } else {
                        var areaterreno = values.area_terreno_hacienda;
                        var areaconstruida = values.area_construida_hacienda;
                        var impuestopredial = values.impuesto_hacienda;
                        var avaluohacienda = values.avaluo_hacienda;
                    }
                    areaterreno = formatNumber(areaterreno);
                    select[0] = "<b>Dirección</b>";
                    select[1] = "<b>Referencia Catastral</b>";
                    select[2] = "<b>Área de Terreno</b>";
                    sel[0] = ui.item.direccionoriginal;
                    sel[1] = arregloDeSubCadenas[0];
                    sel[2] = areaterreno + " metros cuadrados";
                    var campos = 3;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === campos) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }                 
                    //Tabla Hacienda
                    var table = document.getElementById("tblatt_totem_hacienda");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    //cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codfoto = values.codigo_ant.substring(0, 17);
                    var direccion = ui.item.direccionoriginal;
                    var codigo = values.codigo;
                    var referencia = arregloDeSubCadenas[0];
                    var matricula = search("preproduccion:ConsultaMatriculaTotem", referencia);
                    select[0] = "<b>Impuesto Predial</b>";
                    select[1] = "<br><b>Enviar Reporte por email</b>";
                    select[2] = "<b>Fotografias</b>";
                    if (arregloDeSubCadenas[3] === '0') {
                        var estado = "SIN DEUDA";
                        sel[0] = estado + "&nbsp;&nbsp;<img src='./imagenes/sin_deuda.png'>";
                    } else {
                        var estado = "DEUDOR";
                        sel[0] = estado + "&nbsp;&nbsp;<img src='./imagenes/debe.png'>";
                    }
                    sel[1] = "<div><br><input type='email' style='width:100%;' id='inputemail' placeholder='Ejemplo: pepitoperez@gmail.com'><br><br><input type='button' class='btn btn-primary' onclick='enviarcorreo(this.id)' id=" + men + " value='Enviar'></div>";
                    sel[2] = document.createElement("a");
                    sel[2].id = "img1";
                    sel[2].style = "width: 30px; height: 50px;";
                    sel[2].target = "marco";
                    sel[2].setAttribute("onclick", "open_streetview()");
                    sel[2].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    imag[2] = document.createElement("img");
                    imag[2].id = "im1";
                    imag[2].className = "pequeña";
                    imag[2].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    stv[2] = document.createElement("a");
                    stv[2].id = "imgstreet1";
                    stv[2].target = "marco";
                    stv[2].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[2].setAttribute("onclick", "open_streetview()");
                    ig[2] = document.createElement("img");
                    ig[2].src = "./imagenes/streetview.png";                                     
                    var campos = 2;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === campos) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }                   
                    //Tabla Catastro      
                    var table = document.getElementById("tblatt_totem_catastro");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    //cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codigo = values.codigo;
                    avaluohacienda = formatNumber(avaluohacienda);
                    var matricula = search("preproduccion:ConsultaMatriculaTotem", referencia); 
                    select[0] = "<b>Avalúo Catastral</b>";
                    select[1] = "<b>Área Construida</b>";
                    select[2] = "<b>Matricula Inmobiliaria</b>";
                    select[3] = "<b>Fotografias</b>";
                    sel[0] = "$" + avaluohacienda;
                    sel[1] = areaconstruida + " metros cuadrados";
                    sel[2] = matricula;
                    sel[3] = document.createElement("a");
                    sel[3].id = "img1";
                    sel[3].style = "width: 30px; height: 50px;";
                    sel[3].target = "marco";
                    sel[3].setAttribute("onclick", "open_streetview()");
                    sel[3].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    imag[3] = document.createElement("img");
                    imag[3].id = "im1";
                    imag[3].className = "pequeña";
                    imag[3].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    stv[3] = document.createElement("a");
                    stv[3].id = "imgstreet1";
                    stv[3].target = "marco";
                    stv[3].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[3].setAttribute("onclick", "open_streetview()");
                    ig[3] = document.createElement("img");
                    ig[3].src = "./imagenes/streetview.png";
                    var campos = 3;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === campos) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    //Tabla Planeacion    
                    var table = document.getElementById("tblatt_totem_planeacion");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    //cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    select[0] = "<b>Uso de Suelo</b>";
                    select[1] = "<b>Código Postal</b>";
                    select[2] = "<b>Bien Patrimonial</b>";
                    select[3] = "<b>Fotografias</b>";
                    sel[0] = values.norma_uso;
                    sel[1] = "Pendiente";
                    sel[2] = "Pendiente";
                    sel[3] = document.createElement("a");
                    sel[3].id = "img1";
                    sel[3].style = "width: 30px; height: 50px;";
                    sel[3].target = "marco";
                    sel[3].setAttribute("onclick", "open_streetview()");
                    sel[3].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    imag[3] = document.createElement("img");
                    imag[3].id = "im1";
                    imag[3].className = "pequeña";
                    imag[3].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                    stv[3] = document.createElement("a");
                    stv[3].id = "imgstreet1";
                    stv[3].target = "marco";
                    stv[3].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[3].setAttribute("onclick", "open_streetview()");
                    ig[3] = document.createElement("img");
                    ig[3].src = "./imagenes/streetview.png";
                    var campos = 3;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === campos) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                }
            }

        });
    }
    document.getElementById("panel_atr_totem").style.display = "block";
    try {
        if (globalstyle) {
            rangoarea(globalstyle);
        }
    } catch (err) {
        sinconsulta();
    }
}

function PlaceSelect(event, ui) {
    vias.setVisible(true);
    document.getElementById('menusitiostotem').style.display = 'none';
    document.getElementById('volver').style.display = 'none';
    document.getElementById("volvertotem").style.display = "block";
    document.getElementById("exp1").style.display = "none";
    document.getElementById("consultas_totem").style.display = "none";
    var view = map.getView();
    var feat = ui.item.feature;
    var values = feat.values_;
    var geom = feat.getGeometry();
    var coord = values.geometry.flatCoordinates;
    //console.log(coord);
    var transf = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
    //console.log(transf);
    var transf1 = (transf[1]);
    var transf2 = (transf[0]);
    var transf = [transf[1], transf[0], 0];
    view.setCenter(geom.getFirstCoordinate());
    view.setZoom(18);
    highlight.setStyle(flagStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    var table = document.getElementById("tblatt");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.colSpan = 2;
    cell1.innerHTML = "<b>INFORMACION SITIO</b>";
    var select = [];
    var sel = [];
    var imag = [];
    var stv = [];
    var ig = [];
    select[0] = "<b>Nombre</b>";
    select[1] = "<b>Tipo</b>";
    select[2] = "<b>Street View</b>";
    sel[0] = values.address1;
    sel[1] = values.tipo;
    stv[2] = document.createElement("a");
    stv[2].id = "imgstreetsitio";
    stv[2].target = "marco";
    stv[2].href = "street_view.html?coordenadas=" + transf;
    //console.log(transf);
    stv[2].setAttribute("onclick", "open_streetview()");
    ig[2] = document.createElement("img");
    ig[2].src = "./imagenes/streetview.png";
    for (i = 0; i < select.length; i++) {
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = select[i];
        if (i === 2) {
            cell2.appendChild(stv[i]);
            stv[i].appendChild(ig[i]);
        } else {
            cell2.innerHTML = sel[i];
        }
    }
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("botonminimizar").style.display = "block";
}
function PoligonSelect(event, ui) {
    document.getElementById("exp1").style.display = "none";
    document.getElementById("consultas_totem").style.display = "none";
    var view = map.getView();
    var feat = ui.item.feature;
    values = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 200;
    ppExtent[2] = ppExtent[2] + 200;
    ppExtent[1] = ppExtent[1] - 200;
    ppExtent[3] = ppExtent[3] + 200;
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    //view.setZoom(16);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[2].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (globalstyle === "sinconsulta") {
        sinconsulta();
    } else {
        rangoarea(globalstyle);
    }
}
function manzanaSelect(event, ui) {
    document.getElementById("exp1").style.display = "none";
    document.getElementById("consultas_totem").style.display = "none";
    var view = map.getView();
    var feat = ui.item.feature;
    //console.log(feat);
    values = feat.values_.codigo;
    BarrioStyle.text_.scale_ = 1;
    BarrioStyle.text_.text_ = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (globalstyle === "sinconsulta") {
        sinconsulta();
    } else {
        rangoarea(globalstyle);
    }
}

function ladomanzanaSelect(event, ui) {
    document.getElementById("direccion").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("propietarios").value = "";
    document.getElementById("cedul").value = "";
    document.getElementById("barrio").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("manzana").value = "";
    document.getElementById("input_ladomanzana").value = "";
    document.getElementById("panel_atributos_predioshasusos").style.display = "none";
    document.getElementById("tablaatributospredioshasusos").style.display = "none";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    //document.getElementById("panel_atributos_alineamiento").style.display = "block";
    //document.getElementById("tablaatributosalineamiento").style.display = "block";
    //document.getElementById("botonminimizar").style.display = "block";  
    //document.getElementById("botonmaximizarhasusos").style.display = "none";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSourceAlineamiento.clear();
    markerSourceAlineamiento.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var ladoman = feat.values_.lado_manzanas;
    predio.setVisible(true);
    $.ajax({
        success: function (data) {
            var table = document.getElementById("tblatt");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.colSpan = 2;
            cell1.innerHTML = "<b>LADO DE MANZANA</b>";
            var select = [];
            var sel = [];
            select[0] = "<b>Codigo Manzana</b>";
            select[1] = "<b>Lado de Manzana</b>";
            select[2] = "<b>Perfil</b>";
            select[3] = "<b>Nombre de Perfil</b>";
            select[4] = "<b>Lb_Lc</b>";
            sel[0] = feat.values_.codigo;
            sel[1] = feat.values_.lado_manzanas;
            sel[2] = feat.values_.perfil;
            sel[3] = feat.values_.nom_perfil;
            sel[4] = feat.values_.lb_lc;
            for (i = 0; i < select.length; i++) {
                row = table.insertRow(i + 1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = select[i];
                if (i === 6) {
                    cell2.appendChild(sel[i]);
                    cell2.appendChild(stv[i]);
                    ;
                    stv[i].appendChild(ig[i]);
                } else {
                    cell2.innerHTML = sel[i];
                }
            }
            document.getElementById("panel_atr").style.display = "block";
            document.getElementById("botonminimizar").style.display = "block";
        }
    });

}

function predioshasusosSelect(event, ui) {
    document.getElementById("direccion").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("propietarios").value = "";
    document.getElementById("cedul").value = "";
    document.getElementById("barrio").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("manzana").value = "";
    document.getElementById("input_ladomanzana").value = "";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "none";
    document.getElementById("tablaatributosalineamiento").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "none";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourcehasusos = highlightfeatures.getSource();
    markerSourcehasusos.clear();
    markerSourcehasusos.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url5 = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (url5) {
        predio.setVisible(true);
        $.ajax({
            url: url5,
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var referencia = values.referencia;
                    var grupo = search("preproduccion:PrediosHasUsosReferencia", referencia);
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION USOS</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var tablahasusos = ("<table max-width=20 border=1>");
                    for (i = 0; i < grupo.length; i++) {
                        tablahasusos += ("<tr>");
                        tablahasusos += ("<td><b>" + grupo[i] + "</b></td>");
                        tablahasusos += ("</tr>");
                    }
                    tablahasusos += ("</table>");
                    select[0] = "<b>Referencia Catastral</b>";
                    select[1] = "<b>Usos Permitidos</b>";
                    select[2] = "<b>Street View</b>";
                    sel[0] = values.referencia;
                    sel[1] = tablahasusos;
                    stv[2] = document.createElement("a");
                    stv[2].id = "imgstreet1";
                    stv[2].target = "marco";
                    stv[2].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[2].setAttribute("onclick", "open_streetview()");
                    ig[2] = document.createElement("img");
                    ig[2].src = "./imagenes/streetview.png";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 2) {
                            cell2.appendChild(stv[i]);
                            stv[i].appendChild(ig[i]);
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    }
}

function propietariosSelect(event, ui) {
    dataprop = ui.item.feature.features["0"].properties.propietario;
    var cantprop = search("preproduccion:CantidadPropietarios", dataprop);
    if (cantprop.length > 1) {
        alert("mas de uno");
    } else {
        addressSelect();
    }
}