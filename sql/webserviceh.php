<?php
$ref = $_POST['ref'];//referencia catastral enviada
//$servicio="http://190.248.57.43:8090/WS_CatastroWeb/ProcesosCatastro?wsdl"; //url del servicio
$servicio="http://10.10.0.3:8080/WS_CatastroWeb/ProcesosCatastro?wsdl";
$parametros=array(); //parametros de la llamada
$parametros['referenciaCatastral']=$ref;
$client = new SoapClient($servicio, $parametros);
$result = $client->getVerCarteraPredio($parametros);//llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice=$result['return'];
$n=count($wservice);
for($i=$n; $i>1; $i--){
    $servicio=$wservice[$i-1];
    $referencia=$servicio['referenciaCat'];
    $destino=$servicio['destino'];
    $estrato=$servicio['estrato'];
    $vcapital=$servicio['valorCapital'];
    $vinteres=$servicio['valorIntereses'];
    $vigencia=$servicio['vigencia'];
    
    echo $referencia;
    echo "%%".$destino;
    echo "%%".$estrato; 
    echo "%%".$vcapital;
    echo "%%".$vinteres;
    echo "%%".$vigencia."%%";
}
function obj2array($obj) {
  $out = array();
  foreach ($obj as $key => $val) {
    switch(true) {
        case is_object($val):
         $out[$key] = obj2array($val);
         break;
      case is_array($val):
         $out[$key] = obj2array($val);
         break;
      default:
        $out[$key] = $val;
    }   
  }
  return $out; 
}
?>