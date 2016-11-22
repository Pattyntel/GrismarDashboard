function AgentesCtrl($scope, $filter, $timeout, APIServices){
    
    $scope.agenteItems =[
        {id:1, description:'Centro'}
        //,{id:2, description:'Nombre'}
    ];

    $scope.agenteItem = {
        id:1, description:'Centro'
    };

    $scope.variable = [];

    /*CallBack Services */
    $scope.callBackService = function(){       
        $timeout(function(){       
            switch ($scope.agenteItem.description){
                case 'Centro':
                    APIServices.getVentas_AgentesByCentro().then (function(dataResult){
                        $scope.variable = JSON.stringify(dataResult.data);                        
                    });
                    break;

              /* case 'Categoría':
                    APIServices.getVentas_AgentesByCateg().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;*/
               
                default:
                    APIServices.getVentas_AgentesByCentro().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
            }            
        });
    };

    $scope.callBackService();
}

function ClientesCtrl($scope, $filter, $timeout, APIServices){
    
    $scope.clienteItems =[
        {id:1, description:'Clasificación'},
        {id:2, description:'Clategoría'}
    ];

    $scope.clienteItem = {
        id:1, description:'Clasificación'
    };

    $scope.variable = [];

    /*CallBack Services */
    $scope.callBackService = function(){       
        $timeout(function(){       
            switch ($scope.clienteItem.description){
                case 'Clasificación':
                    APIServices.getVentas_ClientesByClasif().then (function(dataResult){
                        $scope.variable = JSON.stringify(dataResult.data);                        
                    });
                    break;

                case 'Categoría':
                    APIServices.getVentas_ClientesByCateg().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
               
                default:
                    APIServices.getVentas_ClientesByClasif().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
            }            
        });
    };

    $scope.callBackService();
}

function PeriodosCtrl($scope, $filter, $timeout, APIServices){
    
    $scope.periodoItems =[
        {id:1, description:'Año'},
        {id:2, description:'Mes'},
        {id:3, description:'Bimestre'}
    ];

    $scope.periodoItem = {
        id:1, description:'Año'
    };

    $scope.variable = [];

    /*CallBack Services */
    $scope.callBackService = function(){       
        $timeout(function(){       
            switch ($scope.periodoItem.description){
                case 'Año':
                    APIServices.getVentas_PeriodosByAnio().then (function(dataResult){
                        $scope.variable = JSON.stringify(dataResult.data);                        
                    });
                    break;

                case 'Mes':
                    APIServices.getVentas_PeriodosByMes().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;

                case 'Bimestre':
                    APIServices.getVentas_PeriodosByBimestre().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
               
                default:
                    APIServices.getVentas_PeriodosByAnio().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
            }            
        });
    };

    $scope.callBackService();
}

function ProductosCtrl($scope, $filter, $timeout, APIServices){
    
    $scope.prodItems =[
        {id:1, description:'Clasificación'},
        {id:2, description:'Marcas'},
        {id:3, description:'Lineas'}
    ];

    $scope.prodItem = {
        id:1, description:'Clasificación'
    };

   //    $scope.variable = {};
     $scope.variable = [];

    /*CallBack Services */
    $scope.callBackService = function(){       
        $timeout(function(){           
           // debugger; 
            switch ($scope.prodItem.description){
                case 'Clasificación':
                    APIServices.getVentas_ProdByClasif().then (function(dataResult){
 //                       $scope.variable = dataResult;
 //                       $scope.variable = dataResult.data;
                        $scope.variable = JSON.stringify(dataResult.data);
                        console.log("$scope.variable");
                        console.log($scope.variable);

                      //  $scope.datosJson = dataResult.data.JSON;
                      //  console.log("datosJson");
                      //  console.log($scope.datosJson);
                        
                  /*      $scope.datosJson = JSON.stringify(dataResult.data);
                        console.log("datosJson2");
                        console.log($scope.datosJson);

                        $scope.datosJson = JSON.parse(dataResult.data);
                        console.log("datosJson3");
                        console.log($scope.datosJson);*/
                        
                    });
                    break;

                case 'Marcas':
                    APIServices.getVentas_ProdByMarca().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;

                case 'Lineas':
                
                     APIServices.getVentas_ProdByLinea().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                     break;

                default:
                    APIServices.getVentas_ProdByClasif().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
            }            
        });
    };

    $scope.callBackService();
}

function RegionesCtrl($scope, $filter, $timeout, APIServices){
    
    $scope.regionItems =[
        {id:1, description:'País'},
        {id:2, description:'Estado'},
        {id:3, description:'Ciudad'}
    ];

    $scope.regionItem = {
        id:1, description:'País'
    };

    $scope.variable = [];

    /*CallBack Services */
    $scope.callBackService = function(){       
        $timeout(function(){       
            switch ($scope.regionItem.description){
                case 'País':
                    APIServices.getVentas_RegionesByPais().then (function(dataResult){
                        $scope.variable = JSON.stringify(dataResult.data);                        
                    });
                    break;

                case 'Estado':
                    APIServices.getVentas_RegionesByEstado().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;

               case 'País':
                    APIServices.getVentas_RegionesByCiudad().then (function(dataResult){
                        $scope.variable = JSON.stringify(dataResult.data);                        
                    });
                    break;

                default:
                    APIServices.getVentas_RegionesByPais().then (function(dataResult){
                        $scope.variable = dataResult;
                     });
                    break;
            }            
        });
    };

    $scope.callBackService();
}

angular
    .module('inspinia')    
    .controller('AgentesCtrl', AgentesCtrl)
    .controller('ClientesCtrl', ClientesCtrl)
    .controller('PeriodosCtrl', PeriodosCtrl)
    .controller('ProductosCtrl', ProductosCtrl)
    .controller('RegionesCtrl', RegionesCtrl);