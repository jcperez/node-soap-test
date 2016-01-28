var soap = require('soap');
var url = 'http://www.webservicex.net/ConvertTemperature.asmx?WSDL';

// Request for ConvertTemp resource
var req = {
    'Temperature': '17',
    'FromUnit': 'degreeCelsius',
    'ToUnit': 'degreeFahrenheit'
};

// Callback when WS responds
// err - Any errors?
// result - JSON with WS response
// raw - String with XML response representation
var convertTempCb = function(err, result, raw){
    if(err){
        console.log(err);
        return;
    }
    console.log('%s %s = %s %s', req.Temperature, req.FromUnit, result.ConvertTempResult, req.ToUnit);
}


var soapConvertTemp = function(wsdl, request, callback, options){
    // Create a client instance of the WSDL
    soap.createClient(wsdl, function(err, client){
        // Call specific resource.
        client.ConvertTemp(request, callback, options);
    });
};

soapConvertTemp(url, req, convertTempCb);



