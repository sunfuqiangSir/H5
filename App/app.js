var app = angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tabAll",{
            url:"/all",
            templateUrl:"App/view/tab.html",
            controller:"tabController"
        });
    $urlRouterProvider.otherwise("/all")
});