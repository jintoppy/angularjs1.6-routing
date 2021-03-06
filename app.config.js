angular.module('myapp')
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider.state({
            name: 'home',
            url: '/home',
            component: 'home'
        });

        $stateProvider.state({
            name: 'about',
            url: '/about',
            component: 'about'
        });

        $stateProvider.state({
            name: 'contactus',
            url: '/contactus',
            component: 'contact'
        });

        $stateProvider.state({
            name: 'details',
            url: '/productdetails/{productId}',
            component: 'productdetails',
            resolve: {
                product: function(ProductService, $transition$){
                    var currentProductId = $transition$.params().productId;
                    return ProductService.getProductById(currentProductId);
                }
            }
        });

        $stateProvider.state({
            name: 'products',
            url: '/products',
            component: 'productlist',
            resolve: {
                items: function(ProductService){
                    return ProductService.getProducts();
                }
            }
        });

        $urlRouterProvider.otherwise('home');

    });