app.controller("tabController",["$scope","tabServer",function($scope,tabServer){
    tabServer.ajax().then(function(data){
        $scope.objs=data.data;
    })
}]);