<?php
$ref = $_POST['ref']; //referencia catastral enviada
$ano = $_POST['ano'];
//$ref = '010601560009000';
//$servicio = "http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$servicio="http://190.248.57.43:8090/WS_CatastroWeb/ProcesosCatastro?wsdl"; //url del servicio
$parametros = array(); //parametros de la llamada
$parametros['referenciaCatastral'] = $ref;
$parametros['vigencia'] = $ano;
$client = new SoapClient($servicio, $parametros);
$result = $client->getGenerarFactura($parametros); //llamamos al métdo que nos interesa con los parámetros 
$result = obj2array($result);
//echo $result;
$wservice = $result['return'];
$n=count($wservice);
//echo $wservice;
//$wservice=$wservice['codEstado'];
while ($nombre_fruta = current($wservice)) {
    echo key($wservice).'<br />';
    next($wservice);
}
$servicio = $wservice['datosFacturaPredial'];
while ($nombre_fruta = current($servicio)) {
    echo key($servicio).'<br />';
    next($servicio);
}
$servici = $servicio['codEstado'];
$servic = $servicio['msgEstado'];
echo $servici.'<br />';
echo $servic;

$fichero = $_SERVER["DOCUMENT_ROOT"] . '/barr/facturas/' . $ref . 'factura.pdf';
file_put_contents($fichero, $servicio['archivoPdf']);
header("Content-Disposition: attachment; filename=" . urlencode('factura.pdf'));
header("Content-type: application/octet-stream");
header("Content-type: application/download");
header("Content-Description: File Transfer");
header("Content-Length: " . $servicio['archivoPdf']);
exit($servicio['archivoPdf']);
 

function obj2array($obj) {
    $out = array();
    foreach ($obj as $key => $val) {
        switch (true) {
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