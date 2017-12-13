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

        this.getProductById = function(id) {
            var defer = $q.defer();
            $http.get('/products.json')
                .then(function(response){
                    var currentProduct = response.data
                                            .find(function(item){
                                                return item.id == id;
                                            });
                    defer.resolve(currentProduct);
                });
            return defer.promise;
        };

    });