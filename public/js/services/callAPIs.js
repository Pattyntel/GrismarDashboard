var urlBase = 'http://192.168.0.101/DWH.Grismar/v1/Dashboard/';

function APIServices($http){
    var objAPI =
    {
        getVentasByCategory: function (anio)
        {
            return $http.get(urlBase + 'GetVentasByCategory' + anio).success(function(dataResult){
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_ProdByClasif: function()
        {

            var url2=urlBase + 'GetVentas_ProdByClasif';
            console.log(url2);

            return $http.get(url2).success(function(dataResult){
                debugger;
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        }
    }
    return objAPI;
}

angular
    .module('inspinia')
    .factory('APIServices', APIServices);