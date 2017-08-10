
var customInterpolationApp = angular.module('MyApp', [])
  .controller("MyController", function($scope) {

  var playerContainer = angular.element( document.querySelector( '#playerContainer' ) );
  
  $scope.showname = "SoCal Television";

  $scope.site_title = "SoCalTelevision.com";
  $scope.baseURL = 'http://socaltelevision.com/';

  $scope.showList = [
        {name: "SoCal Television", showname: "SoCal Television"},
        {name: "NASA Public-Education", showname: "NASA Public-Education"},
        {name: "NASA ISS", showname: "NASA ISS"}
    ]

 
}).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  });
