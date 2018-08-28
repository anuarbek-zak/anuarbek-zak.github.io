angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('direction', {
                url: '/direction',
                templateUrl: 'direction/direction.html',
                controller:'directionCtrl',
                controllerAs:'vm',
                access:true
            });
        $urlRouterProvider.otherwise('/direction');
    });
