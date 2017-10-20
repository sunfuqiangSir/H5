app.factory("tabServer",["$http","$q",function($http,$q){
    var obj={
        ajax:function(){
            var defer = $q.defer();
            $http({
                url:"Data/tab.json",
                method:"get"
            }).then(function(res){
                defer.resolve(res);
            },function(err){
                defer.reject(err);
            });
            return defer.promise;
        }
    };
    return obj;
}]);
