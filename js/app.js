angular.module('my', ['ui.router', 'my.controllers', 'my.filters','my.services'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('HomeWeather', {
            url: '/HomeWeather',
            templateUrl: 'templates/HomeWeather.html',
            controller: 'test'
        })
            .state('position', {
                url: '/position',
                templateUrl: 'templates/position.html',
                controller: 'position',
            })
            .state('city', {
                url: '/city',
                templateUrl: 'templates/city.html',
                controller: 'city',
            });
        $urlRouterProvider.otherwise('/HomeWeather');
    });