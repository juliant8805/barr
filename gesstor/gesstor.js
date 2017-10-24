if (modulo == "gestor") {
    document.getElementById("barratransparencia").style.display = "none";
    ortofotourbana.setVisible(false);
    predio.setVisible(false);
//predio.getSource().updateParams({'STYLES': 'jlsd'});
    construcciones.getSource().updateParams({'STYLES': 'jlsd'});
}
function asigdir() {
    //console.log(document.getElementById('tblatt').rows[1].cells[1].innerHTML.split(",")[0]);
    document.getElementById('raddir').value = document.getElementById('tblatt').rows[1].cells[1].innerHTML.split(",")[0];
}
function busca_dir() {
    document.getElementById("menu_predio").style.display = "none";
    document.getElementById("volver").style.display = "none";
    document.getElementById("volvertotem").style.display = "block";
    var dir = document.getElementById('dir_g1').value + " " + document.getElementById('dir1').value + " " + document.getElementById('dir_g2').value + " " + document.getElementById('dir2').value;
    var sel = search("preproduccion:DireccionGesstor", dir);
    if (sel.length > 0) {
        var sele = search("preproduccion:DireccionGesstorSele", dir);
        if (document.getElementById('dir3').value > +sele[0][0]) {
            var placa = +sele[0][0];
        } else if (document.getElementById('dir3').value < 1) {
            var placa = 1;
        } else {
            var placa = document.getElementById('dir3').value;
        }
        var dirc = dir + " " + placa;
        var parametro = "preproduccion:dir_geo";
        var select = search(parametro, dirc);
        direncontrada = select[0][1];
        if (modulo == "gestor") {
            var table = document.getElementById("tblatt");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.colSpan = 2;
            cell1.innerHTML = "<b>GEOREFERENCIADOR</b>";
            var seleccion = [];
            var sel = [];
            var stv = [];
            var ig = [];
            seleccion[0] = "<b>Dirección Buscada</b>";
            seleccion[1] = "<b>Dirección Aproximada</b>";
            seleccion[2] = "<b>Fuente</b>";
            seleccion[3] = "<b>Radicar Solicitud</b>";
            sel[0] = dirc;
            sel[1] = direncontrada;
            sel[2] = "<img src='./imagenes/gesstor_atributos.png'/>";
            sel[3] = "<button type='button' class='btn btn-info btn-md' data-toggle='modal' data-target='#myModal1' onclick='asigdir()'>Radicar</button>";
        } else {
            var table = document.getElementById("tblatt");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.colSpan = 2;
            cell1.innerHTML = "<b>GEOREFERENCIADOR</b>";
            var seleccion = [];
            var sel = [];
            var stv = [];
            var ig = [];
            seleccion[0] = "<b>Dirección Buscada</b>";
            seleccion[1] = "<b>Dirección Aproximada</b>";
            seleccion[2] = "<b>Fuente</b>";

            sel[0] = dirc;
            sel[1] = direncontrada;
            sel[2] = "<img src='./imagenes/gesstor_atributos.png'/>";

        }
        for (i = 0; i < seleccion.length; i++) {
            row = table.insertRow(i + 1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell1.innerHTML = seleccion[i];
            if (i === 4) {
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
        //alert(select);
        if (select) {
            var coord = select[0][2].split("(")[1].split(")")[0].split(" ");
            addmarker(+coord[1], +coord[0]);
        } else {
            //console.log("mmm");
        }
    } else {
        var val = document.getElementById('dir_g1').value + " " + document.getElementById('dir1').value + " " + "# " + document.getElementById('dir2').value + " - " + document.getElementById('dir3').value;
        var val = val + ', Barranquilla, Atlántico, Colombia';
        var address = val;
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': address, componentRestrictions: {country: 'CO', locality: 'barranquilla'}}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var long = ((results[0].geometry.viewport.b.b + results[0].geometry.viewport.b.f) / 2);
                var lat = ((results[0].geometry.viewport.f.b + results[0].geometry.viewport.f.f) / 2);
                addmarker(lat, long);
            } else {
                alert("No podemos encontrar la direcci&oacute;n");
            }
            direncontrada = results["0"].formatted_address;
            if (modulo == "gestor") {
                var table = document.getElementById("tblatt");
                table.innerHTML = "";
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                cell1.colSpan = 2;
                cell1.innerHTML = "<b>GEOREFERENCIADOR</b>";
                var seleccion = [];
                var sel = [];
                var stv = [];
                var ig = [];
                seleccion[0] = "<b>Dirección Buscada</b>";
                seleccion[1] = "<b>Dirección Aproximada</b>";
                seleccion[2] = "<b>Fuente</b>";
                seleccion[3] = "<b>Radicar Solicitud</b>";
                sel[0] = val;
                sel[1] = direncontrada;
                sel[2] = "<img src='./imagenes/google.png'/>";
                sel[3] = "<button type='button' class='btn btn-info btn-md' data-toggle='modal' data-target='#myModal1' onclick='asigdir()'>Radicar</button>";
            } else {
                var table = document.getElementById("tblatt");
                table.innerHTML = "";
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                cell1.colSpan = 2;
                cell1.innerHTML = "<b>GEOREFERENCIADOR</b>";
                var seleccion = [];
                var sel = [];
                var stv = [];
                var ig = [];
                seleccion[0] = "<b>Dirección Buscada</b>";
                seleccion[1] = "<b>Dirección Aproximada</b>";
                seleccion[2] = "<b>Fuente</b>";
                sel[0] = val;
                sel[1] = direncontrada;
                sel[2] = "<img src='./imagenes/google.png'/>";
            }


            for (i = 0; i < seleccion.length; i++) {
                row = table.insertRow(i + 1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = seleccion[i];
                if (i === 4) {
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
            if (select) {
                var coord = select[0][2].split("(")[1].split(")")[0].split(" ");
                addmarker(+coord[1], +coord[0]);
            } else {
                //console.log("mmm");
            }
        });
    }
}


function addmarker(long, lat) {
    document.getElementById("radcoo").value = lat+";" +long;
    var vectorSource = new ol.source.Vector({});
    var thing = new ol.geom.Point(ol.proj.transform([lat, long], 'EPSG:4326', 'EPSG:3857'));
    var feat = new ol.Feature({
        name: "Thing",
        geometry: thing
    });
    var view = map.getView();
    view.setCenter(ol.proj.transform([lat, long], 'EPSG:4326', 'EPSG:3857'));
    view.setZoom(18);
    highlight.setStyle(flagStyle);
    vectorSource = new ol.source.Vector({
        features: [feat]
    });
    vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
}// END addmarkerr()