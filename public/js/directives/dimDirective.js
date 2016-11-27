function dropDown($filter){
    return{
        restrict:'E',
        scope:{
            itemsData: '=',
            item: '=',
            sizeStyle:'@',
            action:'&'            
        },
        templateUrl:'views/common/drop_down.html',
        controller: function($scope, $element, $filter){
            $scope.clickItem = function (selectedOption){
                //console.log ("selectOption:"+ selectedOption);
                $scope.item = $filter('filter')($scope.itemsData, {description:selectedOption})[0];
                //console.log($scope.item);               
              //  $scope.rowSelectedText = '';        
            };
        }
    }
}

function customDataTables(){
    return {
        restrict:'A',
        scope:{
            datos: '='        
        },
        template: '<table></table>',
        controller: function($scope, $element){

            $scope.$watch("datos",function() {
            console.log('Directiva de dataTable Custom');
            var elemTable = $element.find('table');
            
            //console.log(elemTable);
            console.log("$scope.datos");
            console.log($scope.datos);


//debugger;
            var table = elemTable.DataTable({
                
                ajax:$scope.datos,
//                 ajax:'data/region/gto.json',
                destroy: true,
                autoWidth: true,
                displayLength: 5,
                columns:[

                    
                    {dimProducto:"clasificacionProducto.Value", title:"Clasificación"},
 //                                      {data:"measures", title:"Clasificación"},
                    {measures:"indicadores.cantidadVentas",title: "Cantidad"},
                    {measures:"porcentajeCantidadVentas",title: "% Cantidad"},
                    {measures:"importeVentas",title: "Importe"},
                    {measures:"porcentajeImporteVentas",title: "% Importe "}   
 /*                   ,{data: function(source, type, val)
                        {
                            source.render = source.indicador;
 //                           source.render = source.porcentajeImporteVentas;
                            return source.render;
                        },
                        class: "text-center",
                        title: "Porcentaje Importe Ventas",
                        width: "20%"
                    },*/
                ]
            });
        //    debugger;
            });

        }
    }
}

angular
    .module('inspinia')
    .directive('customDataTables', customDataTables)
    .directive('dropDown', dropDown);