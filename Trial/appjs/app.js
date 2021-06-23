var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/home", {
    templateUrl : "views/home.html"
  })
  .when("/index", {
    templateUrl : "views/index.html"
  })
  .when("/secondpage", {
    templateUrl : "views/secondpage.html"
  })
  .otherwise({
    redirectTo: 'index.html'
});
});