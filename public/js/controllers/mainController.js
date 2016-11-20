/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Example user';
    this.helloText = 'Grismar';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};

function ProdByClasificacionCtrl($scope, $filter, $timeout, APIServices){
    $scope.prodItems =[
        {id:1, description:'Clasificación'},
        {id:2, description:'Marcas'},
        {id:3, description:'Lineas'}
    ];

    $scope.prodItem = {
        id:1, description:'Clasificación'
    };


    $scope.variable = {};

    /*CallBack Services */
    $scope.callBackService = function(){
        $timeout(function(){
            APIServices.getVentas_ProdByClasif().then (function(dataResult){
                $scope.variable = dataResult;
            });
        });
    };

    $scope.callBackService();
}



angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('ProdByClasificacionCtrl', ProdByClasificacionCtrl)