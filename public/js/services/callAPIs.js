var urlBase = 'http://192.168.0.10/DWH.Grismar/v1/Dashboard/';

function APIServices($http){
    var objAPI =
    {
        getVentas_ProdByClasif: function (anio)
        {
            return $http.get(urlBase + 'GetVentas_ProdByClasif' + anio).sucess(function(dataResult){
                return dataResult;
            }).error(function(err){
                console.log(error);
            });
        },
        otroMetodo: function()
        {

        }
    }
    return objAPI;
}

angular
    .module('inspinia')
    .factory('APIServices', APIServices);