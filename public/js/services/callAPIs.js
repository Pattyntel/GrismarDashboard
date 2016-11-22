var urlBase = 'http://192.168.0.101/DWH.Grismar/v1/Dashboard/';

function APIServices($http){
    var objAPI =
    {
        getVentasByCategory: function (anio)
        {
            return $http.get(urlBase + 'GetVentasByCategory' + anio).success(function(dataResult){
                return dataResult;
            }).error(function(err){
                console.log(MediaStreamError);
            });
        },
        getVentas_AgentesByCentro: function()
        {
            return $http.get(urlBase + 'GetVentas_AgentesByCentro').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_ClientesByClasif: function()
        {
            return $http.get(urlBase + 'GetVentas_ClientesByClasif').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_ClientesByCateg: function()
        {
            return $http.get(urlBase + 'GetVentas_ClientesByCateg').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_PeriodosByAnio: function()
        {
            return $http.get(urlBase + 'GetVentas_PeriodosByAnio').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },        
        getVentas_PeriodosByMes: function()
        {
            return $http.get(urlBase + 'GetVentas_PeriodosByMes').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_PeriodosByBimestre: function()
        {
            return $http.get(urlBase + 'GetVentas_PeriodosByBimestre').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_ProdByClasif: function()
        {
            return $http.get(urlBase + 'GetVentas_ProdByClasif').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_ProdByMarca: function()
        {
            return $http.get(urlBase + 'GetVentas_ProdByMarca').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_ProdByLinea: function()
        {
            return $http.get(urlBase + 'GetVentas_ProdByLinea').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_RegionesByPais: function()
        {
            return $http.get(urlBase + 'GetVentas_RegionesByPais').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_RegionesByEstado: function()
        {
            return $http.get(urlBase + 'GetVentas_RegionesByEstado').success(function(dataResult){         
                return dataResult;
            }).error(function(err){
                console.log(err);
            });
        },
        getVentas_RegionesByCiudad: function()
        {
            return $http.get(urlBase + 'GetVentas_RegionesByCiudad').success(function(dataResult){         
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