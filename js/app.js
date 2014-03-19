'use strict';

var app = angular.module('myApp', ['ngRoute', 'firebase', 'notifications']);

    app.config(['$routeProvider', function($routeProvider) {

        //event
        $routeProvider.when('/login', {templateUrl: 'js/modules/user/login.html', controller: LoginCtrl});
        $routeProvider.when('/appointment/', {templateUrl: 'js/modules/appointment/list.html', controller: ListAppointmentCtrl});
        $routeProvider.when('/appointment/create', {templateUrl: 'js/modules/appointment/create.html', controller: CreateAppointmentCtrl});

        // default route
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);



