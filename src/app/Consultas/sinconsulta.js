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
    
   else if(document.getElementById("inputmanzanatotemp").value !== ''){
        document.getElementById("inputsitiostotemp").value = "";
        document.getElementById("inputmanzanatotemp").value = "";
        document.getElementById("inputbarriototemp").value = "";
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputmatriculatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";        
        var valor = "'" + values + "'";
        var filtro='"manzana_co='+valor+'"';
        predio.getSource().updateParams({'STYLES': 'predios_sin_consulta', 'CQL_FILTER':eval(filtro)});  
        var totalprediosmanzana = search("preproduccion:TotalPrediosSinConsulta", values);
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
        document.getElementById("menumanzanatotem").style.display = "none";
        document.getElementById("pestanastotem").style.display = "block";
        document.getElementById("volvertotem").style.display = "block";
        $.ajax({
            url: url,
            success: function (data) {
                    var table = document.getElementById("tblatt_totem_hacienda");
                    var totalprediosmanzana = search("preproduccion:TotalPrediosSinConsulta", values);
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DE LA MANZANA CATASTRAL</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Código Catastral</b>";
                    select[1] = "<b>Número de Predios</b>";
                    select[2] = "<b>Liquidación de la Manzana</b>";
                    select[3] = "<b>Porcentaje de Recaudo (Vigencia 2017)</b>";
                    sel[0] = values;
                    sel[1] = totalprediosmanzana;
                    sel[2] = "Pendiente VPN";  
                    sel[3] = "Pendiente VPN";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        cell2.innerHTML = sel[i];
                    }
                    document.getElementById("panel_atr_totem").style.display = "block";
                    //Tabla Catastro  
                    var destino = search("preproduccion:DestinoManzana", values);  
                    var areamanzana = search("preproduccion:AreaManzana", values);  
                    var table = document.getElementById("tblatt_totem_catastro");
                    for (i = 0; i < destino.length; i++) {
                    var tabladest = ("<table max-width=20 border=1>");
                    tabladest += ("<tr><th style='text-align:center; background-color:#639BB3;'>DESTINO</th><th style='text-align:center;background-color:#639BB3;'># PREDIOS</th></tr>");    
                    for (i = 0; i < destino.length; i++) {
                                tabladest += ("<tr>");
                                tabladest += ("<td>" + destino[i]["0"] + "</td>");
                                tabladest += ("<td>" + destino[i][1] + "</td>");
                                tabladest += ("</tr>");
                        }
                    tabladest += ("</table>");
                    }
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DE LA MANZANA CATASTRAL</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Código Catastral</b>";
                    select[1] = "<b>Número de Predios</b>";
                    select[2] = "<b>Destino Económico</b>";
                    select[3] = "<b>Área de la Manzana</b>";
                    sel[0] = values;
                    sel[1] = totalprediosmanzana;
                    sel[2] = tabladest;  
                    sel[3] = areamanzana["0"] + "&nbsp&nbspMetros Cuadrados";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                    //Tabla Planeacion   
                    var destino = search("preproduccion:DestinoManzana", values);  
                    var areamanzana = search("preproduccion:AreaManzana", values);  
                    var table = document.getElementById("tblatt_totem_planeacion");
                    var estratomanzana = search("preproduccion:EstratoManzana", values);
                    var tratamientomanzana = search("preproduccion:TratamientoManzana", values); 
                    var totalarbolesmanzana = search("preproduccion:TotalArbolesManzana", values); 
                    var totalgrupoarbolesmanzana = search("preproduccion:TotalGrupoArbolesManzana", values); 
                    for (i = 0; i < tratamientomanzana.length; i++) {
                    var tablatrat = ("<table max-width=20 border=1>");
                    tablatrat += ("<tr><th style='text-align:center; background-color:#639BB3;'>TRATAMIENTO</th><th style='text-align:center;background-color:#639BB3;'># PREDIOS</th></tr>");    
                    for (i = 0; i < tratamientomanzana.length; i++) {
                        tablatrat += ("<tr>");
                        tablatrat += ("<td>" + tratamientomanzana[i]["0"] + "</td>");
                        tablatrat += ("<td>" + tratamientomanzana[i][1] + "</td>");
                        tablatrat += ("</tr>");
                        }
                    tablatrat += ("</table>");
                    }
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DE LA MANZANA CATASTRAL</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Código Catastral</b>";
                    select[1] = "<b>Número de Predios</b>";
                    select[2] = "<b>Estrato Predominante</b>";
                    select[3] = "<b>Uso POT</b>";
                    select[4] = "<b>Tratamiento Urbanístico</b>";
                    select[5] = "<b>Número de Parques</b>";
                    select[6] = "<b>Número de Arboles</b>";
                    select[7] = "<b>Grupo de Arboles (Matorral)</b>";
                    select[8] = "<b>Área de Espacio Público</b>";
                    sel[0] = values;
                    sel[1] = totalprediosmanzana;
                    sel[2] = estratomanzana["0"]["0"];  
                    sel[3] = "Pendiente";
                    sel[4] = tablatrat;
                    sel[5] = "0";
                    sel[6] = totalarbolesmanzana["0"];
                    sel[7] = totalgrupoarbolesmanzana["0"];
                    sel[8] = "Pendiente";
                    
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        cell2.innerHTML = sel[i];
                    }          
            }
        });
    } 
     
    else if(document.getElementById("inputbarriototemp").value !== ''){
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
        document.getElementById("menumanzanatotem").style.display = "none";
        document.getElementById("pestanastotem").style.display = "none";
        document.getElementById("menubarriototem").style.display = "none";
        document.getElementById("volvertotem").style.display = "block";
        var valor = "'" + values + "'";
        var filtro='"cod_barrio='+valor+'"';
        predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});
        arbol.setVisible(true);
        arbol.getSource().updateParams({'STYLES': '', 'CQL_FILTER':eval(filtro)});
        arroyos.setVisible(true);
        arroyos.getSource().updateParams({'STYLES': '', 'CQL_FILTER':eval(filtro)});
        sitios.setVisible(true);
        sitios.getSource().updateParams({'STYLES': 'sitios_consulta', 'CQL_FILTER':eval(filtro)});
        var totalprediosbarrio = search("preproduccion:TotalPrediosSinConsulta", values);
        var areabarrios = search("preproduccion:AreaBarrio", values);  
        var numeroparques = search("preproduccion:NumeroParquesBarrio", values);
        var numerocolegios = search("preproduccion:TotalColegiosBarrio", values);
        var saludbarrio = search("preproduccion:TotalSaludBarrio", values);
        var cultura = search("preproduccion:TotalCulturaBarrio", values);
        var deportivo = search("preproduccion:TotalDeportivosBarrio", values);
        var numeroarroyos = search("preproduccion:TotalArroyosBarrio", values);
        var tratamientobarrio = search("preproduccion:TratamientoBarrio", values);
        var estratosbarrio = search("preproduccion:EstratosBarrio", values);
        var arbolesbarrio = search("preproduccion:TotalArbolesBarrio", values);
        var grupodearboles = search("preproduccion:TotalGrupoArbolesBarrio", values);
        var numeromanzanas = search("preproduccion:TotalManzanasBarrio", values);
        var viasbarrios = search("preproduccion:LongitudViasBarrios", values);
        var manzanasbarrio = search("preproduccion:TotalManzanasBarrio", values);
        var kmvias = (viasbarrios/100)*4;
        for (i = 0; i < tratamientobarrio.length; i++) {
                    var tablatrat = ("<table max-width=20 border=1>");
                    tablatrat += ("<tr><th style='text-align:center; background-color:#639BB3;'>TRATAMIENTO</th><th style='text-align:center;background-color:#639BB3;'># PREDIOS</th></tr>");    
                    for (i = 0; i < tratamientobarrio.length; i++) {
                        tablatrat += ("<tr>");
                        tablatrat += ("<td>" + tratamientobarrio[i]["0"] + "</td>");
                        tablatrat += ("<td>" + tratamientobarrio[i][1] + "</td>");
                        tablatrat += ("</tr>");
                        }
                    tablatrat += ("</table>");
        }
        for (i = 0; i < estratosbarrio.length; i++) {
                    var tablaest = ("<table max-width=20 border=1>");
                    tablaest += ("<tr><th style='text-align:center; background-color:#639BB3;'>ESTRATO</th><th style='text-align:center;background-color:#639BB3;'># PREDIOS</th></tr>");    
                    for (i = 0; i < estratosbarrio.length; i++) {
                        tablaest += ("<tr>");
                        tablaest += ("<td>" + estratosbarrio[i]["0"] + "</td>");
                        tablaest += ("<td>" + estratosbarrio[i][1] + "</td>");
                        tablaest += ("</tr>");
                        }
                    tablaest += ("</table>");
        }
                    var table = document.getElementById("tblatt_totemp_barrio");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION DEL BARRIO</b>";
                    var select = [];
                    var sel = [];
                    select[0] = "<b>Nombre del Barrio</b>";
                    select[1] = "<b>Área</b>";
                    select[2] = "<b>Uso POT</b>";
                    select[3] = "<b>Número de Parques</b>";
                    select[4] = "<b>Número de Colegios</b>";
                    select[5] = "<b>Número de Centros de Salud</b>";
                    select[6] = "<b>Número de CDI</b>";
                    select[7] = "<b>Número de Casas de Adulto Mayor</b>";
                    select[8] = "<b>Número de Casas de la Cultura</b>";
                    select[9] = "<b>Número de Escenarios Deportivos</b>";
                    select[10] = "<b>Número de Arroyos</b>";
                    select[11] = "<b>Tratamientos POT</b>";
                    select[12] = "<b>Estratos</b>";
                    select[13] = "<b>Número de Arboles</b>";
                    select[14] = "<b>Grupo de Arboles (Matorral)</b>";
                    select[15] = "<b>Número de Manzanas</b>";
                    select[16] = "<b>Número de Predios</b>";
                    select[17] = "<b>Kilómetros de Vías</b>";
                    sel[0] = values;
                    sel[1] = areabarrios + "&nbsp;&nbsp;Metros Cuadrados";
                    sel[2] = "Pendiente";
                    sel[3] = numeroparques;
                    sel[4] = numerocolegios;
                    sel[5] = saludbarrio;
                    sel[6] = "0";
                    sel[7] = "0";
                    sel[8] = cultura;
                    sel[9] = deportivo;
                    sel[10] = numeroarroyos;
                    sel[11] = tablatrat;
                    sel[12] = tablaest;
                    sel[13] = arbolesbarrio;
                    sel[14] = grupodearboles;
                    sel[15] = manzanasbarrio.length;
                    sel[16] = totalprediosbarrio;
                    sel[17] = kmvias;
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                         cell2.innerHTML = sel[i];
                    }
                document.getElementById("panel_atr_totempbarrio").style.display = "block";
         
    }
        document.getElementById('leyenda_transmetro').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
       
 }



