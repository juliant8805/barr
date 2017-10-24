$(function () {
    $("#draggable").draggable();
});
window.onload = function () {
    document.getElementById('CBarrios').addEventListener('click', showtable, false);
    document.getElementById('CLocalidades').addEventListener('click', showtable, false);
    document.getElementById('CAmenazaInundación').addEventListener('click', showtable, false);
    document.getElementById('CRemociónenMasa').addEventListener('click', showtable, false);
    document.getElementById('CAreaReservaAcueducto').addEventListener('click', showtable, false);
    document.getElementById('CAreaReservaAlcantarillado').addEventListener('click', showtable, false);
    document.getElementById('CArroyos').addEventListener('click', showtable, false);
    document.getElementById('CCiclorutasPropuestas').addEventListener('click', showtable, false);
    document.getElementById('CCienagaMallorquin').addEventListener('click', showtable, false);
    document.getElementById('CClasificaciónSuelo').addEventListener('click', showtable, false);
    document.getElementById('CEstacionesTransmetro').addEventListener('click', showtable, false);
    document.getElementById('CEspacioPúblico').addEventListener('click', showtable, false);
    document.getElementById('CIntercambiadoresTransporte').addEventListener('click', showtable, false);
    document.getElementById('CLimitesDistrital').addEventListener('click', showtable, false);
    document.getElementById('CMaleconAvenidaRío').addEventListener('click', showtable, false);
    document.getElementById('CPerfilViasUrbanasPropuestas').addEventListener('click', showtable, false);
    document.getElementById('CParquesPropuestos').addEventListener('click', showtable, false);
    document.getElementById('CParquesPropuestosRural').addEventListener('click', showtable, false);
    document.getElementById('CPerimetroUrbano').addEventListener('click', showtable, false);
    document.getElementById('CInstrumentosPlanificación').addEventListener('click', showtable, false);
    document.getElementById('CNormativosUso').addEventListener('click', showtable, false);
    document.getElementById('CProtecciónLitoralMarCaribe').addEventListener('click', showtable, false);
    document.getElementById('CProtecciónConservaciónRural').addEventListener('click', showtable, false);
    document.getElementById('CRedAcueductoPrimaria').addEventListener('click', showtable, false);
    document.getElementById('CRedAlcantarillado').addEventListener('click', showtable, false);
    document.getElementById('CRedEnergiaAltaTensión').addEventListener('click', showtable, false);
    document.getElementById('CRondaArroyos15m').addEventListener('click', showtable, false);
    document.getElementById('CRondaArroyos30m').addEventListener('click', showtable, false);
    document.getElementById('CRondaRíoMagdalena').addEventListener('click', showtable, false);
    document.getElementById('CTratamientosUrbanisticos').addEventListener('click', showtable, false);
    document.getElementById('CViasRuralPropuesta').addEventListener('click', showtable, false);
    document.getElementById('CViasTransmasivo').addEventListener('click', showtable, false);
    document.getElementById('CZampaRíos50m').addEventListener('click', showtable, false);
    document.getElementById('CZampaArroyos30m').addEventListener('click', showtable, false);
    document.getElementById('CZampaCienagaMallorquin50m').addEventListener('click', showtable, false);
    document.getElementById('CZampaRíoMagdalena50m').addEventListener('click', showtable, false);
    document.getElementById('CZonaDeclaradaPrado').addEventListener('click', showtable, false);
    //document.getElementById('CZonaDeclaradaCentro').addEventListener('click', showtable, false);
    document.getElementById('notify').addEventListener('click', showtable, false);
};
function hideMe() {
    document.getElementById('draggable').style.display = "none";
}
function filtro() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("inpfil");
    filter = input.value.toUpperCase();
    table = document.getElementById("dintab");
    tr = table.getElementsByTagName("tr");
    var index = document.getElementById("selcolum").selectedIndex;
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[index];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function showtable(capas) {
    document.getElementById("inpfil").value = "";
    document.getElementById('draggable').style.display = "block";
    document.getElementById('titletable').innerHTML = capas.target.innerHTML;
    var table = document.getElementById("dintab");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var x = document.getElementById("selcolum");
    x.innerHTML = "";
    if (capas.target.innerHTML === "Barrios") {
        var colum = search("preproduccion:NameColumns", 'barrios');
        var sel = search("preproduccion:selallbarrios");
    } else if (capas.target.innerHTML === "Localidades") {
        var colum = search("preproduccion:NameColumns", 'localidades');
        var sel = search("preproduccion:selalllocalidades");
    } else if (capas.target.innerHTML === "Amenaza Inundación") {
        var colum = search("preproduccion:NameColumns", 'amenazainundacion');
        var sel = search("preproduccion:selallamenazainundacion");
    } else if (capas.target.innerHTML === "Remoción en Masa") {
        var colum = search("preproduccion:NameColumns", 'amenazaremocionmasa');
        var sel = search("preproduccion:selallamenazaremocionmasa");
    } else if (capas.target.innerHTML === "Area Reserva Acueducto") {
        var colum = search("preproduccion:NameColumns", 'areas_reservaacueducto');
        var sel = search("preproduccion:selallareas_reservaacueducto");
    } else if (capas.target.innerHTML === "Area Reserva Alcantarillado") {
        var colum = search("preproduccion:NameColumns", 'areasreservaalcantarillado');
        var sel = search("preproduccion:selallareasreservaalcantarillado");
    } else if (capas.target.innerHTML === "Arroyos") {
        var colum = search("preproduccion:NameColumns", 'arroyos');
        var sel = search("preproduccion:selallarroyos");
    } else if (capas.target.innerHTML === "Ciclorutas Propuestas") {
        var colum = search("preproduccion:NameColumns", 'ciclorutas_propuestas');
        var sel = search("preproduccion:selallciclorutas_propuestas");
    } else if (capas.target.innerHTML === "Cienaga Mallorquin") {
        var colum = search("preproduccion:NameColumns", 'cienagamallorquin');
        var sel = search("preproduccion:selallcienagamallorquin");
    } else if (capas.target.innerHTML === "Clasificación Suelo") {
        var colum = search("preproduccion:NameColumns", 'clasificacionsuelo');
        var sel = search("preproduccion:selallclasificacionsuelo");
    } else if (capas.target.innerHTML === "Estaciones Transmetro") {
        var colum = search("preproduccion:NameColumns", 'estacionestransmetro');
        var sel = search("preproduccion:selallestacionestransmetro");
    } else if (capas.target.innerHTML === "Espacio Público") {
        var colum = search("preproduccion:NameColumns", 'espacio_publico');
        var sel = search("preproduccion:selallespacio_publico");
    } else if (capas.target.innerHTML === "Limites Distrital") {
        var colum = search("preproduccion:NameColumns", 'limitedistrital');
        var sel = search("preproduccion:selalllimitedistrital");
    } else if (capas.target.innerHTML === "Malecon Avenida Río") {
        var colum = search("preproduccion:NameColumns", 'maleconavenidario');
        var sel = search("preproduccion:selallmaleconavenidario");
    } else if (capas.target.innerHTML === "Perfil Vias Urbanas Propuestas") {
        var colum = search("preproduccion:NameColumns", 'maleconavenidario');
        var sel = search("preproduccion:selallmaleconavenidario");
    } else if (capas.target.innerHTML === "Parques Propuestos") {
        var colum = search("preproduccion:NameColumns", 'parquespropuestos');
        var sel = search("preproduccion:selallparquespropuestos");
    } else if (capas.target.innerHTML === "Parques Propuestos Rural") {
        var colum = search("preproduccion:NameColumns", 'parquespropuestosrural');
        var sel = search("preproduccion:selallparquespropuestosrural");
    } else if (capas.target.innerHTML === "Perimetro Urbano") {
        var colum = search("preproduccion:NameColumns", 'perimetrourbano');
        var sel = search("preproduccion:selallperimetrourbano");
    } else if (capas.target.innerHTML === "Instrumentos Planificación") {
        var colum = search("preproduccion:NameColumns", 'poligonosinstrumentosplanificacion');
        var sel = search("preproduccion:selallpoligonosinstrumentosplanificacion");
    } else if (capas.target.innerHTML === "Normativos Uso") {
        var colum = search("preproduccion:NameColumns", 'poligonosnormativos');
        var sel = search("preproduccion:selallpoligonosnormativos");
    } else if (capas.target.innerHTML === "Protección Litoral Mar Caribe") {
        var colum = search("preproduccion:NameColumns", 'proteccionlitoralmarcaribe');
        var sel = search("preproduccion:selallproteccionlitoralmarcaribe");
    } else if (capas.target.innerHTML === "Protección Conservación Rural") {
        var colum = search("preproduccion:NameColumns", 'proteccionconservacionrural');
        var sel = search("preproduccion:selallproteccionconservacionrural");
    } else if (capas.target.innerHTML === "Red Acueducto Primaria") {
        var colum = search("preproduccion:NameColumns", 'redacueductoprimaria');
        var sel = search("preproduccion:selallredacueductoprimaria");
    } else if (capas.target.innerHTML === "Red Alcantarillado") {
        var colum = search("preproduccion:NameColumns", 'redalcantarillado');
        var sel = search("preproduccion:selallredalcantarillado");
    } else if (capas.target.innerHTML === "Red Energia Alta Tensión") {
        var colum = search("preproduccion:NameColumns", 'redesenergiaaltatension');
        var sel = search("preproduccion:selallredesenergiaaltatension");
    } else if (capas.target.innerHTML === "Ronda Arroyos 15m") {
        var colum = search("preproduccion:NameColumns", 'rondasarroyossecundarios15m');
        var sel = search("preproduccion:selallrondasarroyossecundarios15m");
    } else if (capas.target.innerHTML === "Ronda Arroyos 30m") {
        var colum = search("preproduccion:NameColumns", 'rondaarroyosprincipales30m');
        var sel = search("preproduccion:selallrondaarroyosprincipales30m");
    } else if (capas.target.innerHTML === "Ronda Río Magdalena") {
        var colum = search("preproduccion:NameColumns", 'rondariomagdalena');
        var sel = search("preproduccion:selallrondariomagdalena");
    } else if (capas.target.innerHTML === "Tratamientos Urbanisticos") {
        var colum = search("preproduccion:NameColumns", 'tratamientosurbanisticos');
        var sel = search("preproduccion:selalltratamientosurbanisticos");
    } else if (capas.target.innerHTML === "Vias Rural Propuesta") {
        var colum = search("preproduccion:NameColumns", 'viasruralpropuesta');
        var sel = search("preproduccion:selallviasruralpropuesta");
    } else if (capas.target.innerHTML === "Vias Transmasivo") {
        var colum = search("preproduccion:NameColumns", 'vias_transmasivo');
        var sel = search("preproduccion:selallvias_transmasivo");
    } else if (capas.target.innerHTML === "Zampa Ríos 50m") {
        var colum = search("preproduccion:NameColumns", 'zampa_arroyos_principales_50m');
        var sel = search("preproduccion:selallzampa_arroyos_principales_50m");
    } else if (capas.target.innerHTML === "Zampa Arroyos 30m") {
        var colum = search("preproduccion:NameColumns", 'zampa_arroyos_secundarios_30m');
        var sel = search("preproduccion:selallzampa_arroyos_secundarios_30m");
    } else if (capas.target.innerHTML === "Zampa Cienaga Mallorquin 50m") {
        var colum = search("preproduccion:NameColumns", 'zampa_cienaga_mallorquin_50m');
        var sel = search("preproduccion:selallzampa_cienaga_mallorquin_50m");
    } else if (capas.target.innerHTML === "Zampa Río Magdalena 50m") {
        var colum = search("preproduccion:NameColumns", 'zampa_rio_magdalena_50m');
        var sel = search("preproduccion:selallzampa_rio_magdalena_50m");
    } else if (capas.target.innerHTML === "Zona Declarada Prado") {
        var colum = search("preproduccion:NameColumns", 'zonadeclaradaprado');
        var sel = search("preproduccion:selallzonadeclaradaprado");
    } /*else if (capas.target.innerHTML === "Zona Declarada Centro") {}*/
    else if (capas.target.innerHTML === "Radicaciones") {
        var colum = search("preproduccion:NameColumns", 'gestor');
        var sel = search("preproduccion:selgestor");
        var co = 1;
        //var slc = search("preproduccion:selgestor");
    }
    var option = [];
    if (modulo === 'catastro') {
        for (i = 0; i < colum.length - 4; i++) {
            option[i] = document.createElement("option");
            cell1 = row.insertCell(i);
            if (i === 9) {
                option[i].text = colum[i + 2];
                cell1.innerHTML = colum[i + 2];
            } else {
                option[i].text = colum[i];
                cell1.innerHTML = colum[i];
            }
            x.add(option[i], i);
        }
    } else if (modulo === 'planeacionmisional' && co === 1) {
        for (i = 0; i < colum.length - 4; i++) {
            option[i] = document.createElement("option");
            cell1 = row.insertCell(i);
            if (i === 8) {
                option[i].text = colum[i + 1];
                cell1.innerHTML = colum[i + 1];
            } else if (i === 9) {
                option[i].text = colum[i + 3];
                cell1.innerHTML = colum[i + 3];
            } else {
                option[i].text = colum[i];
                cell1.innerHTML = colum[i];
            }
            x.add(option[i], i);
        }
        for (j = 0; j < sel.length; j++) {
            var row = table.insertRow(j + 1);
            for (k = 0; k < sel[0].length - 4; k++) {
                cell1 = row.insertCell(k);
                if (k === 8) {
                    cell1.innerHTML = sel[j][k+1];
                } else if (k === 9) {
                    cell1.innerHTML = sel[j][k+3];
                }else{
                    cell1.innerHTML = sel[j][k];
                }
            }
        }
    } else if (modulo === 'hacienda') {
        for (i = 0; i < colum.length - 4; i++) {
            option[i] = document.createElement("option");
            cell1 = row.insertCell(i);
            if (i === 8) {
                option[i].text = colum[i + 2];
                cell1.innerHTML = colum[i + 2];
            } else if (i === 9) {
                option[i].text = colum[i + 4];
                cell1.innerHTML = colum[i + 4];
            } else {
                option[i].text = colum[i];
                cell1.innerHTML = colum[i];
            }
            x.add(option[i], i);
        }
    } else {
        for (i = 0; i < colum.length; i++) {
            option[i] = document.createElement("option");
            option[i].text = colum[i];
            x.add(option[i], i);
            cell1 = row.insertCell(i);
            cell1.innerHTML = colum[i];
        }
        for (j = 0; j < sel.length; j++) {
            var row = table.insertRow(j + 1);
            for (k = 0; k < sel[0].length; k++) {
                cell1 = row.insertCell(k);
                cell1.innerHTML = sel[j][k];
            }
        }
    }
    /*for (j = 0; j < colum.length; j++) {
     
     cell1 = row.insertCell(j);
     cell1.innerHTML = colum[j];
     }*/

}