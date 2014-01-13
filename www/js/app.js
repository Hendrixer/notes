angular.module('Notes', ['ngRoute', 'ngAnimate', 'Notes.services', 'Notes.controllers'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        .when('/notes', {
            controller: 'NotesCtrl',
            templateUrl: 'partials/notes.html'
        })
        .otherwise({redirectTo: '/'});
    });
