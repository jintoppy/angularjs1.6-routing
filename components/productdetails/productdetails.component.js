angular.module('myapp')
    .component('productdetails', {
        bindings: {
            product: '<'
        },
        templateUrl: 'components/productdetails/productdetails.component.html'
    });