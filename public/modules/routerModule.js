//IIFE FOR VARIABLE ENCAPSULATION
(function() {
  angular.module('routerModule', ['ui.router'])
    .config(configRouter)
    configRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function configRouter($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
        url: '/',
        templateUrl: 'home.html'
        })
        .state('compost-this',{
          url: '/compost-this',
          templateUrl: 'partials/compost-this.html',
          controller: 'listCtrl as lCtrl'
        })
        .state('resources',{
          url: '/resources',
          templateUrl: 'partials/resources.html'
        })
        .state('tracker',{
          url: '/tracker',
          templateUrl: 'partials/tracker.html',
          controller: 'chartCtrl as c'
        })
        .state('welcome',{
          url: '/welcome',
          templateUrl: 'partials/welcome.html'
        })
      $urlRouterProvider.otherwise('/')
    }
}())
