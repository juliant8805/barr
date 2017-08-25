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
    document.getElementById('CZonaDeclaradaCentro').addEventListener('click', showtable, false);
};
function showtable(capas) {
    document.getElementById('draggable').style.display = "block";
    document.getElementById('titletable').innerHTML = capas.target.innerHTML;

    if (capas.target.innerHTML === "Barrios") {

    } else if (capas.target.innerHTML === "Localidades") {

    } else if (capas.target.innerHTML === "Amenaza Inundación") {
        var colum = search("preproduccion:NameColumns", 'amenazainundacion');
        var sel = search("preproduccion:selallamenazainundacion");
        console.log(colum);
        var table = document.getElementById("dintab");
        table.innerHTML = "";
            var row = table.insertRow(0);
            for (j = 0; j < colum.length; j++) {
                cell1 = row.insertCell(j);
                //cell2 = row.insertCell(1);
                cell1.innerHTML = colum[j];
            }
            for (j = 0; j < sel.length; j++) {
                var row = table.insertRow(j+1);
                cell1 = row.insertCell(j);
                //cell2 = row.insertCell(1);
                cell1.innerHTML = sel[j];
            }

    } else if (capas.target.innerHTML === "Remoción en Masa") {

    } else if (capas.target.innerHTML === "Area Reserva Acueducto") {

    } else if (capas.target.innerHTML === "Area Reserva Alcantarillado") {

    } else if (capas.target.innerHTML === "Arroyos") {

    } else if (capas.target.innerHTML === "Ciclorutas Propuestas") {

    } else if (capas.target.innerHTML === "Cienaga Mallorquin") {

    } else if (capas.target.innerHTML === "Clasificación Suelo") {

    } else if (capas.target.innerHTML === "Estaciones Transmetro") {

    } else if (capas.target.innerHTML === "Espacio Público") {

    } else if (capas.target.innerHTML === "Limites Distrital") {

    } else if (capas.target.innerHTML === "Malecon Avenida Río") {

    } else if (capas.target.innerHTML === "Perfil Vias Urbanas Propuestas") {

    } else if (capas.target.innerHTML === "Parques Propuestos") {

    } else if (capas.target.innerHTML === "Parques Propuestos Rural") {

    } else if (capas.target.innerHTML === "Perimetro Urbano") {

    } else if (capas.target.innerHTML === "Instrumentos Planificación") {

    } else if (capas.target.innerHTML === "Normativos Uso") {

    } else if (capas.target.innerHTML === "Protección Litoral Mar Caribe") {

    } else if (capas.target.innerHTML === "Protección Conservación Rural") {

    } else if (capas.target.innerHTML === "Red Acueducto Primaria") {

    } else if (capas.target.innerHTML === "Red Alcantarillado") {

    } else if (capas.target.innerHTML === "Red Energia Alta Tensión") {

    } else if (capas.target.innerHTML === "Ronda Arroyos 15m") {

    } else if (capas.target.innerHTML === "Ronda Arroyos 30m") {

    } else if (capas.target.innerHTML === "Ronda Río Magdalena") {

    } else if (capas.target.innerHTML === "Tratamientos Urbanisticos") {

    } else if (capas.target.innerHTML === "Vias Rural Propuesta") {

    } else if (capas.target.innerHTML === "Vias Transmasivo") {

    } else if (capas.target.innerHTML === "Zampa Ríos 50m") {

    } else if (capas.target.innerHTML === "Zampa Arroyos 30m") {

    } else if (capas.target.innerHTML === "Zampa Cienaga Mallorquin 50m") {

    } else if (capas.target.innerHTML === "Zampa Río Magdalena 50m") {

    } else if (capas.target.innerHTML === "Zona Declarada Prado") {

    } else if (capas.target.innerHTML === "Zona Declarada Centro") {

    }
}