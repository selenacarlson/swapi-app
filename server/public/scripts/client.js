const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/search.html',
        controller: 'StarController as sc',
    }).when('/storage', {
        templateUrl: 'views/favorites.html',
        controller: 'StarController as sc'
    }).when('/search', {
        redirectTo: '/'
    }).otherwise({template: '<h1>404 Page Not Found</h1>'})
})