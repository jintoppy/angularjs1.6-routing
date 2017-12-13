angular.module('myapp')
    .service('ProductService', function($http, $q){

        this.getProducts = function(){
            var defer = $q.defer();
            $http.get('/products.json')
                .then(function(response){
                    defer.resolve(response.data);
                });
            return defer.promise;
        };

    });