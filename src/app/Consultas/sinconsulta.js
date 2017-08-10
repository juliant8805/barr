var sinconsulta = async function (x) {
    await putgif();
    await general(x);
    await quitgif();
};
function general() {
    manzana.setVisible(false);
    construcciones.setVisible(false);
    unidades.setVisible(false);
    predio.setVisible(true);
    //document.getElementById('mensaje').style.display = 'block'; 
   if(document.getElementById("barrio").value !== ''){    
        var valor = "'" + values + "'";
        var filtro='"cod_barrio='+valor+'"';
        predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});  
        var totalprediosbarrio = search("preproduccion:TotalPrediosSinConsulta", values);
                var table = document.getElementById("tblatt");
                table.innerHTML = "";
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                 cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DEL BARRIO</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Nombre del Barrio</b>";
                    select[1] = "<b>Número de Predios</b>";
                    sel[0] = values;
                    sel[1] = totalprediosbarrio;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr").style.display = "block";  
                document.getElementById("botonminimizar").style.display = "block";          
   } 
   else if(document.getElementById("inputbarriototem").value !== ''){
    var valor = "'" + values + "'";
        var filtro='"cod_barrio='+valor+'"';
        predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});  
        var totalarbolesbarrio = search("preproduccion:TotalArbolesBarrio", values);
        var totalceducativos = search("preproduccion:TotalEducativosBarrio", values);
        var totalcsalud = search("preproduccion:TotalSaludBarrio", values);
        var totalcdeportivos = search("preproduccion:TotalDeportivosBarrio", values);
        var table = document.getElementById("tblatt");
                table.innerHTML = "";
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                 cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DEL BARRIO</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Nombre del Barrio</b>";
                    select[1] = "<b>Número de Arboles</b>";
                    select[2] = "<b>Número de Centros Educativos</b>";
                    select[3] = "<b>Número de Centros de Salud</b>";
                    select[4] = "<b>Número de Parques y/o Centros Deportivos</b>";
                    sel[0] = values;
                    sel[1] = totalarbolesbarrio;
                    sel[2] = totalceducativos;
                    sel[3] = totalcsalud;
                    sel[4] = totalcdeportivos;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr").style.display = "block";  
                document.getElementById("botonminimizar").style.display = "block";          
   }
   else if(document.getElementById("inputlocalidadtotem").value !== ''){
       var valor = "'" + values + "'";
       var filtro='"cod_loc='+valor+'"';
       predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});  
                var totalarboleslocalidad = search("preproduccion:TotalArbolesLocalidad", values);
                var totalceducativos = search("preproduccion:TotalEducativosLocalidad", values);
                var totalcsalud = search("preproduccion:TotalSaludLocalidad", values);
                var totalcdeportivos = search("preproduccion:TotalDeportivosLocalidad", values);
                var table = document.getElementById("tblatt");
                table.innerHTML = "";
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                 cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DE LA LOCALIDAD</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Código de la Localidad</b>";
                    select[1] = "<b>Número de Arboles</b>";
                    select[2] = "<b>Número de Centros Educativos</b>";
                    select[3] = "<b>Número de Centros de Salud</b>";
                    select[4] = "<b>Número de Parques y/o Centros Deportivos</b>";
                    sel[0] = values;
                    sel[1] = totalarboleslocalidad;
                    sel[2] = totalceducativos;
                    sel[3] = totalcsalud;
                    sel[4] = totalcdeportivos;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr").style.display = "block";  
                document.getElementById("botonminimizar").style.display = "block";    
   }
   else if(document.getElementById("localidad").value !== ''){
       var valor = "'" + values + "'";
       var filtro='"cod_loc='+valor+'"';
       predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});  
                var totalpredioslocalidad = search("preproduccion:TotalPrediosSinConsulta", values);
                var table = document.getElementById("tblatt");
                table.innerHTML = "";
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                 cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DE LA LOCALIDAD</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Código de la Localidad</b>";
                    select[1] = "<b>Número de Predios</b>";
                    sel[0] = values;
                    sel[1] = totalpredioslocalidad;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr").style.display = "block";  
                document.getElementById("botonminimizar").style.display = "block";    
   }
    else if(document.getElementById("manzana").value !== ''){
       var valor = "'" + values + "'";
       var filtro='"manzana_co='+valor+'"';
       predio.getSource().updateParams({'STYLES': 'predios_sin_consulta', 'CQL_FILTER':eval(filtro)});  
                var totalprediosmanzana = search("preproduccion:TotalPrediosSinConsulta", values);
                 var table = document.getElementById("tblatt");
                 table.innerHTML = "";
                 var row = table.insertRow(0);
                 var cell1 = row.insertCell(0);
                 cell1.colSpan = 2;
                 cell1.innerHTML = "<b>INFORMACION DE LA MANZANA</b>";
                 var select = [];
                 var sel = [];
                 select[0] = "<b>Código de la Manzana</b>";
                 select[1] = "<b>Número de Predios</b>";
                 sel[0] = values;
                 sel[1] = totalprediosmanzana;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr").style.display = "block";  
                document.getElementById("botonminimizar").style.display = "block";    
        
   }
    else if(document.getElementById("inputmanzanatotem").value !== ''){
       var valor = "'" + values + "'";
       var filtro='"manzana_co='+valor+'"';
       predio.getSource().updateParams({'STYLES': 'predios_sin_consulta', 'CQL_FILTER':eval(filtro)});  
                var totalprediosmanzana = search("preproduccion:TotalPrediosSinConsulta", values);
                 var table = document.getElementById("tblatt");
                 table.innerHTML = "";
                 var row = table.insertRow(0);
                 var cell1 = row.insertCell(0);
                 cell1.colSpan = 2;
                 cell1.innerHTML = "<b>INFORMACION DE LA MANZANA</b>";
                 var select = [];
                 var sel = [];
                 select[0] = "<b>Código de la Manzana</b>";
                 select[1] = "<b>Número de Predios</b>";
                 sel[0] = values;
                 sel[1] = totalprediosmanzana;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr").style.display = "block";  
                document.getElementById("botonminimizar").style.display = "block";    
        
   }
        document.getElementById('leyenda_transmetro').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'none';
 }



