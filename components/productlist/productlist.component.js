angular.module('myapp')
.component('productlist', {
    bindings: {
        items: '<'
    },
    templateUrl: 'components/productlist/productlist.component.html'
});