// ========= config section ================================================
var url = 'http://35.184.53.233:8081/geoserver/ows?';
var featurePrefix = 'preproduccion';
var featureType = ['u_terreno', 'estacionestransmetro', 'puntos_aaa', 'consolidado_campo'];
var featureNS = 'http://barranquilla.co';
var srsName = 'EPSG:4326';
var geometryName = 'geom';
var geometryType = 'MultiPolygon';
var fields = ['*'];
var infoFormat = 'application/vnd.ogc.gml/3.1.1';
var center = [-8327000, 1230000];
var zoom = 13;
// =========================================================================
var proj = new ol.proj.Projection({
    code: 'http://www.opengis.net/gml/srs/epsg.xml#4326',
    axis: 'enu'
});
var format = [];
var wmsSource = [];
for (var i = 0; i <= featureType.length - 1; i++)
{
    format[i] = new ol.format.GML({featureNS: featureNS, featureType: featureType[i]});
    wmsSource[i] = new ol.source.TileWMS({
        url: url,
        params: {
            'LAYERS': featurePrefix + ':' + featureType[i],
            'TILED': true
        },
        serverType: 'geoserver'
    });
}
;
var popup = new app.Popup({
    element: document.getElementById('popup'),
    closeBox: true,
    autoPan: true
});
var highlight = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FFFF',
            width: 3
        })
    }),
    source: new ol.source.Vector()
});
var highlightt = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FFFF',
            width: 3
        })
    }),
    source: new ol.source.Vector()
});
var measuring = false;
measureControl = function (opt_options) {
    var options = opt_options || {};
    var button = document.createElement('button');
    button.innerHTML = '<img src="../barranquilla/imagenes/measure-control.png" />';
    var this_ = this;
    var handleMeasure = function (e) {
        if (!measuring) {
            this_.getMap().addInteraction(draw);
            measuring = true;
        } else {
            this_.getMap().removeInteraction(draw);
            measuring = false;
        }
    };
    button.addEventListener('click', handleMeasure, false);
    button.addEventListener('touchstart', handleMeasure, false);
    var element = document.createElement('div');
    element.className = 'measure-control ol-unselectable ol-control';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};
ol.inherits(measureControl, ol.control.Control);
var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map = new ol.Map({
    controls: ol.control.defaults().extend([new ol.control.ScaleLine(), new ol.control.ZoomToExtent({
            extent: [-8360194.483519, 1214264.520807, -8302594.687951, 1245861.102880]
        }), new measureControl(),
        new ol.control.OverviewMap({
            className: 'ol-overviewmap ol-custom-overviewmap',
            layers: [new ol.layer.Tile({
                    source: new ol.source.OSM({
                        'url': 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
                    })
                })],
            collapseLabel: '\u00BB',
            label: '\u00AB',
            collapsed: true
        })
    ]).extend([mousePositionControl]),
    // add the popup as a map overlay
    overlays: [popup],
    // render the map in the 'map' div
    target: document.getElementById('map'),
    // use the Canvas renderer
    renderer: 'canvas',
    layers: [layerBase, layerPot, /*layerPuntosFotocontrol,*/ layerCartobasica, /*layerEstratificacionOficial, layerprediosexentos2016, layermetrotel, layerindustriaycomercio, layerSUI,*/ layerCatastro, layerOrtofoto, layerSitios, highlight, highlightt],
    view: new ol.View({
        center: center,
        zoom: zoom,
        extent: [-8335000.251688, 1222940.382305, -8319098.961148, 1244200.340471],
        maxZoom: 21, minZoom: 12
    })
});

map.getLayerGroup().set('name', 'CAPAS');
// register a single click listener on the map and show a popup
// based on WMS GetFeatureInfo
map.on('singleclick', function (evt) {
    if (modulo !== "totempruebas") {
        document.getElementById("panel_atr").style.display = "none";
        document.getElementById("tablaatributos").style.display = "none";
        document.getElementById("panel_atributos_alineamiento").style.display = "none";
        document.getElementById("botonocultarpanelatributos").style.display = "none";
        var viewResolution = map.getView().getResolution();
        var url = wmsSource[0].getGetFeatureInfoUrl(
                evt.coordinate, viewResolution, map.getView().getProjection(),
                {'INFO_FORMAT': infoFormat}
        );
        var url2 = wmsSource[1].getGetFeatureInfoUrl(
                evt.coordinate, viewResolution, map.getView().getProjection(),
                {'INFO_FORMAT': infoFormat}
        );
        var url3 = wmsSource[2].getGetFeatureInfoUrl(
                evt.coordinate, viewResolution, map.getView().getProjection(),
                {'INFO_FORMAT': infoFormat}
        );
        var url1 = wmsSource[3].getGetFeatureInfoUrl(
                evt.coordinate, viewResolution, map.getView().getProjection(),
                {'INFO_FORMAT': infoFormat}
        );

        var tamañopantalla = screen.width > 800;
        if (url1 && consolidado.values_.visible == true) {
            $.ajax({
                url: url1,
                beforeSend: function () {
                    if (tamañopantalla == true) {
                        putgif();
                    } else {
                        document.getElementById("carga3").style.display = "block";
                    }
                },
                success: function (data) {
                    var features = format[3].readFeatures(data);
                    if (features && features.length >= 1 && features[0]) {
                        var feature = features[0];
                        //var html = '<br/><table class="table table-striped table-bordered table-condensed"><tr><td colspan="2"><b>TRANSMETRO</b></td></tr>';
                        var values = feature.getProperties();
                        //console.log(values);
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        //var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%'");
                        //console.log(select);
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        //var cell2 = row.insertCell(1);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>INFORMACION LOTE</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        select[0] = "<b>Direccion</b>";
                        select[1] = "<b>Propietario</b>";
                        select[2] = "<b>Tipo de Predio</b>";
                        select[3] = "<b>Destino Economico</b>";
                        select[4] = "<b>Via de Acceso</b>";
                        select[5] = "<b>Foco de Contaminacion</b>";
                        select[6] = "<b>Fecha de Captura</b>";
                        select[7] = "<b>Fotografias</b>";
                        sel[0] = values.direccion;
                        sel[1] = values.propietari;
                        sel[2] = values.tipo_predi;
                        sel[3] = values.destino_ec;
                        sel[4] = values.via_acceso;
                        sel[5] = values.foco_conta;
                        sel[6] = values.fecha_capt;
                        sel[7] = document.createElement("a");
                        sel[7].id = "img1";
                        sel[7].style = "width: 30px; height: 50px;";
                        sel[7].target = "marco";
                        sel[7].setAttribute("onclick", "open_streetview()");
                        sel[7].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + values.cod_predia + "/1.jpg";
                        imag[7] = document.createElement("img");
                        imag[7].id = "im1";
                        imag[7].className = "pequeña";
                        imag[7].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + values.cod_predia + "/1.jpg";
                        stv[7] = document.createElement("a");
                        stv[7].id = "imgstreet";
                        stv[7].target = "marco";
                        stv[7].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        console.log(values.geom.flatCoordinates);
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
                                sel[i].appendChild(imag[i]);
                                cell2.appendChild(stv[i]);
                                stv[i].appendChild(ig[i]);
                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        }
                        document.getElementById("panel_atr").style.display = "block";
                    }
                },
                complete: function () {
                    if (tamañopantalla == true) {
                        quitgif();
                    } else {
                        document.getElementById("carga3").style.display = "none";
                    }
                }
            });

        }

        if (url && predio.values_.visible == true && viewResolution < 2) {
            $.ajax({
                url: url,
                beforeSend: function () {
                    if (tamañopantalla == true) {
                        putgif();
                    } else {
                        document.getElementById("carga3").style.display = "block";
                    }
                },
                success: function (data) {
                    //var select = validacionusuarios();	
                    var features = format[0].readFeatures(data);
                    if (features && features.length >= 1 && features[0]) {
                        var feature = features[0];
                        var values = feature.getProperties();
                        var ph = values.ph;
                        //var codigo = "'" + values.codigo + "'";
                        //console.log(codigo);
                        //var direccio = select_query("select direccion from sec08001 where codigo = " + codigo + "");
                        //console.log(direccio);
                        var direccion = search("preproduccion:DireccionRegistro", values.codigo);
                        //console.log(direccion);
                        if (direccion === null) {
                            var direccion = [];
                            direccion[0] = "Sin Direccion";
                            //console.log(direccion);
                        }

                        if (ph >= 800) {
                            var table = document.getElementById("tblatt");
                            table.innerHTML = "";
                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            cell1.colSpan = 2;
                            cell1.innerHTML = "<b>PROPIEDAD HORIZONTAL</b>";
                            var select = [];
                            var sel = [];
                            var imag = [];
                            var stv = [];
                            var ig = [];
                            for (i = 0; i < direccion.length; i++) {
                                var tablaph = ("<table max-width=20 border=1>");
                                for (i = 0; i < direccion.length; i++) {
                                    tablaph += ("<tr>");
                                    tablaph += ("<td><b>" + direccion[i] + "</b></td>");
                                    tablaph += ("</tr>");
                                }
                                tablaph += ("</table>");
                            }
                            select[0] = "<b>Direcciones</b>";
                            select[1] = "<b>Street View</b>";
                            sel[0] = tablaph;
                            stv[1] = document.createElement("a");
                            stv[1].id = "imgstreet";
                            stv[1].target = "marco";
                            stv[1].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                            stv[1].setAttribute("onclick", "open_streetview()");
                            ig[1] = document.createElement("img");
                            ig[1].src = "./imagenes/streetview.png";
                            for (i = 0; i < select.length; i++) {
                                row = table.insertRow(i + 1);
                                cell1 = row.insertCell(0);
                                cell2 = row.insertCell(1);
                                cell1.innerHTML = select[i];
                                if (i === 1) {
                                    cell2.appendChild(stv[i]);
                                    stv[i].appendChild(ig[i]);
                                } else {
                                    cell2.innerHTML = sel[i];
                                }
                            }
                        } else if (ph < 800) {
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
                            if (modulo === 'planeacionmisional') {
                                select[0] = "<b>Codigo Manzana</b>";
                                select[1] = "<b>Codigo Catastral Nuevo</b>";
                                select[2] = "<b>Codigo Catastral Anterior</b>";
                                select[3] = "<b>Dirección</b>";
                                select[4] = "<b>Estratificación Oficial</b>";
                                select[5] = "<b>Remoción en Masa</b>";
                                select[6] = "<b>Amenaza de Inundación</b>";
                                select[7] = "<b>Fotografias</b>";
                                sel[0] = values.manzana_co;
                                sel[1] = values.codigo;
                                sel[2] = values.codigo_ant;
                                sel[3] = direccion[0];
                                sel[4] = values.estratific;
                                sel[5] = values.remosion;
                                sel[6] = values.inundacion;
                                sel[7] = document.createElement("a");
                                sel[7].id = "img1";
                                sel[7].style = "width: 30px; height: 50px;";
                                sel[7].target = "marco";
                                sel[7].setAttribute("onclick", "open_streetview()");
                                sel[7].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
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
                                var campos = 7;
                            } else if (modulo === 'sui') {
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
                                sel[3] = direccion[0];
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
                                sel[17].id = "img3";
                                sel[17].style = "width: 30px; height: 50px;";
                                sel[17].target = "marco";
                                sel[17].setAttribute("onclick", "open_streetview()");
                                sel[17].href = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                                imag[17] = document.createElement("img");
                                imag[17].id = "im3";
                                imag[17].className = "pequeña";
                                imag[17].src = "http://www.gesstorbarranquilla.com/barranquilla/fotografias/" + codfoto + "/1.jpg";
                                stv[17] = document.createElement("a");
                                stv[17].id = "imgstreet1";
                                stv[17].target = "marco";
                                stv[17].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                                stv[17].setAttribute("onclick", "open_streetview()");
                                ig[17] = document.createElement("img");
                                ig[17].src = "./imagenes/streetview.png";
                                var campos = 17;
                            } else if (modulo === 'catastro') {
                                var propietario = search("preproduccion:ConsultaPropietario", direccion[0]);
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
                                sel[3] = direccion[0];
                                sel[4] = values.zhg;
                                sel[5] = values.valor_m2_zhg;
                                sel[6] = values.zhf;
                                sel[7] = values.destino_hacienda;
                                sel[8] = values.avaluo_hacienda;
                                sel[9] = values.impuesto_hacienda;
                                sel[10] = values.norma_uso;
                                sel[11] = values.uso_actual_zhf;
                                sel[12] = values.area_terreno_hacienda;
                                sel[13] = values.area_construida_hacienda;
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
                                var campos = 15;
                            } else if (modulo === 'hacienda') {
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
                                var propietario = search("preproduccion:ConsultaPropietario", direccion[0]);
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
                                sel[3] = direccion[0];
                                sel[4] = values.zhg;
                                sel[5] = values.valor_m2_zhg;
                                sel[6] = values.zhf;
                                sel[7] = values.destino_hacienda;
                                sel[8] = estacueducto;
                                sel[9] = estalcantarillado;
                                sel[10] = estaseo;
                                sel[11] = values.uso_elect;
                                sel[12] = values.avaluo_hacienda;
                                sel[13] = values.impuesto_hacienda;
                                sel[14] = values.norma_uso;
                                sel[15] = values.uso_actual_zhf;
                                sel[16] = values.area_terreno_hacienda;
                                sel[17] = values.area_construida_hacienda;
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
                                var campos = 19;
                            } else if (modulo == 'totem') {
                                var ref_cat = values.ref_catastral;
                                ref_cat = "'" + ref_cat + "'";
                                var arregloDeSubCadenas = enviarRef(eval(ref_cat));
                                select[0] = "<b>Dirección</b>";
                                select[1] = "<b>Referencia Catastral</b>";
                                sel[0] = direccion[0];
                                sel[1] = arregloDeSubCadenas[0];
                                for (i = 0; i < arregloDeSubCadenas.length - 1; i = i + 6) {
                                    select[i + 2] = "<b></b>";
                                    select[i + 3] = "<b>Destino Económico (" + arregloDeSubCadenas[i + 5] + ")</b>"
                                    select[i + 4] = "<b>Estrato (" + arregloDeSubCadenas[i + 5] + ")</b>";
                                    select[i + 5] = "<b>Valor Capital (" + arregloDeSubCadenas[i + 5] + ")</b>";
                                    select[i + 6] = "<b>Valor Intereses (" + arregloDeSubCadenas[i + 5] + ")</b>";
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
                            } else if (modulo == 'totempruebas') {

                            }

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
                        if (modulo != 'totempruebas') {
                            document.getElementById("panel_atr").style.display = "block";
                        }
                        document.getElementById("botonminimizar").style.display = "block";
                        document.getElementById("panel_atr").style.maxHeight = "40em";

                        var c = feature.values_.geom.flatCoordinates.length - 1;
                        for (var i = 0; i <= c; i = i + 3) {
                            var a = feature.values_.geom.flatCoordinates[i];
                            feature.values_.geom.flatCoordinates[i] = feature.values_.geom.flatCoordinates[i + 1];
                            feature.values_.geom.flatCoordinates[i + 1] = a;
                        }
                        feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                        highlightfeatures.setStyle(PredioStyle);
                        var markerSourcenoph = highlightfeatures.getSource();
                        markerSourcenoph.clear();
                        markerSourcenoph.addFeature(feature);

                    }
                },
                complete: function () {
                    if (tamañopantalla == true) {
                        quitgif();
                    } else {
                        document.getElementById("carga3").style.display = "none";
                    }
                }

            });
        }

        if (url2 && estacionestransmetro.values_.visible == true) {
            if (infoFormat === 'text/html') {
                popup.setPosition(evt.coordinate);
                popup.setContent('<iframe seamless frameborder="0" src="' + url2 + '"></iframe>');
                popup.show();
            } else {
                $.ajax({
                    url: url2,
                    beforeSend: function () {
                        if (tamañopantalla == true) {
                            putgif();
                        } else {
                            document.getElementById("carga3").style.display = "block";
                        }
                    },
                    success: function (data) {
                        var features = format[1].readFeatures(data);
                        if (features && features.length >= 1 && features[0]) {
                            var feature = features[0];
                            //console.log(feature);
                            var html = '<br/><table class="table table-striped table-bordered table-condensed"><tr><td colspan="2"><b>TRANSMETRO</b></td></tr>';
                            var values = feature.getProperties();
                            var hasContent = false;
                            html += '<tr><td><b>Nombre</b></td><td>' + values.nombre + '</td></tr>';
                            html += '<tr><td><b>Información</b></td><td>' + '<a href="http://www.transmetro.gov.co/estaciones/' + values.link + '" target="_blank"><img src="./imagenes/rutastransmetro.png" >' + '</td></tr>';
                            html += '<tr><td><b>Ver en:</b></td><td>' + '<a href="street_view.html?coordenadas=' + values.geom.flatCoordinates + '" target="marco" onclick="open_streetview()"><img src="./imagenes/streetview.png">' + '</td></tr></table>';
                            hasContent = true;
                            for (var key in values) {
                                if (key !== 'the_geom' && key !== 'boundedBy') {
                                    //html += '<tr><td>' + key + '</td><td>' + values[key] + '</td></tr>';
                                    hasContent = true;
                                }
                            }
                            if (hasContent === true) {
                                popup.setPosition(evt.coordinate);
                                popup.setContent(html);
                                popup.show();
                            }
                            //feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                            highlight.getSource().addFeature(feature);
                        }
                    },
                    complete: function () {
                        if (tamañopantalla == true) {
                            quitgif();
                        } else {
                            document.getElementById("carga3").style.display = "none";
                        }
                    }
                });
            }
        }
        if (url3 && puntos_aaa.values_.visible == true) {

            $.ajax({
                url: url3,
                beforeSend: function () {
                    if (tamañopantalla == true) {
                        putgif();
                    } else {
                        document.getElementById("carga3").style.display = "block";
                    }
                },
                success: function (data) {
                    var features = format[2].readFeatures(data);
                    if (features && features.length >= 1 && features[0]) {
                        var feature = features[0];
                        //console.log("url3= " + feature);
                        var values = feature.getProperties();
                        document.getElementById("botonminimizarpuntosaaa").style.display = "block";
                        document.getElementById("botonmaximizarpuntosaaa").style.display = "none";
                        document.getElementById("statistics").style.display = "none";
                        document.getElementById("botonocultarstatistics").style.display = "none";
                        document.getElementById('coddireccionpuntosaaa').innerHTML = values.dir_origin;
                        document.getElementById('imgstreetpuntosaaa').href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        document.getElementById("panel_atributos_puntos_aaa").style.display = "block";
                        document.getElementById("tablaatributospuntosaaa").style.display = "block";
                        //document.getElementById("botonocultarpanelatributospuntosaaa").style.display = "block";
                        var c = feature.values_.geom.flatCoordinates.length - 1;
                        for (var i = 0; i <= c; i = i + 3) {
                            var a = feature.values_.geom.flatCoordinates[i];
                            feature.values_.geom.flatCoordinates[i] = feature.values_.geom.flatCoordinates[i + 1];
                            feature.values_.geom.flatCoordinates[i + 1] = a;
                        }
                        feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                        highlight.setStyle(PuntoStyle);
                        var markerSourcepuntosaaa = highlight.getSource();
                        markerSourcepuntosaaa.clear();
                        markerSourcepuntosaaa.addFeature(feature);
                    }
                },
                complete: function () {
                    if (tamañopantalla == true) {
                        quitgif();
                    } else {
                        document.getElementById("carga3").style.display = "none";
                    }
                }
            });
        }
    }
});
/*map.getView().on('propertychange', function(e) {
 switch (e.key) {
 case 'resolution':
 //console.log(map.getView().getZoom());
 if (map.getView().getZoom()>=12){
 ortofotourbana.setVisible(true);            
 }else{
 ortofotourbana.setVisible(false);
 }
 //.get["[[Scopes]]"]["0"].zoom
 break;
 }
 });*/

//herramienta medir
var sketch;
var helpTooltipElement;
var helpTooltip;
var measureTooltipElement;
var measureTooltip;
var continueLineMsg = 'Click to continue drawing the line';
var source = new ol.source.Vector();
var draw; // global so we can remove it later
function addInteraction() {
    var type = 'LineString';
    draw = new ol.interaction.Draw({
        source: source,
        type: /** @type {ol.geom.GeometryType} */ (type),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)'
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                })
            })
        })
    });
    //map.addInteraction(draw);
    createMeasureTooltip();
    createHelpTooltip();
    var listener;
    draw.on('drawstart',
            function (evt) {
                // set sketch
                sketch = evt.feature;
                /** @type {ol.Coordinate|undefined} */
                var tooltipCoord = evt.coordinate;
                listener = sketch.getGeometry().on('change', function (evt) {
                    var geom = evt.target;
                    var output;
                    output = formatLength(/** @type {ol.geom.LineString} */ (geom));
                    tooltipCoord = geom.getLastCoordinate();
                    measureTooltipElement.innerHTML = output;
                    measureTooltip.setPosition(tooltipCoord);
                });
            }, this);
    draw.on('drawend',
            function (evt) {
                measureTooltipElement.className = 'tooltip tooltip-static';
                measureTooltip.setOffset([0, -7]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                measureTooltipElement = null;
                createMeasureTooltip();
                ol.Observable.unByKey(listener);
            }, this);
}

/**
 * Creates a new help tooltip
 */
function createHelpTooltip() {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip hidden';
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left'
    });
    map.addOverlay(helpTooltip);
}

/**
 * Creates a new measure tooltip
 */
function createMeasureTooltip() {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
    });
    map.addOverlay(measureTooltip);
}

var wgs84Sphere = new ol.Sphere(6378137);
/**
 * format length output
 * @param {ol.geom.LineString} line
 * @return {string}
 */
var formatLength = function (line) {
    var length;
    length = Math.round(line.getLength() * 100) / 100;
    var output;
    if (length > 100) {
        output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
    } else {
        output = (Math.round(length * 100) / 100) + ' ' + 'm';
    }
    return output;
};
addInteraction();

