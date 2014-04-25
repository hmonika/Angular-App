var busApp = angular.module('busApp', []);

busApp.controller('BusRouteCtrl', function ($scope) {


$scope.busroutes = [
{'no': '210',
'Start_point':'Majestic',
'End_point':'Uttarahalli',
'route': 'Chamrajpet Lalbagh NR Colony'},

{'no': '3',
'Start_point':'Majestic',
'End_point':'Uttarahalli',
'route': 'Chamrajpet Lalbagh NR Colony'},

{'no': '77',
'Start_point':'Majestuc',
'End_point':'Uttarahalli',
'route': 'Chamrajpet Lalbagh NR Colony'}
];
});
