(function() {
  angular.module('userModule', [])
    .factory('userFact', userFact)

    function userFact($http){
      var uFactory = {}
      //SEND A REQUEST TO OUR SERVER AND RETURN A PROMISE
      uFactory.create = function(user){
        return $http.post('/api/v1/users', user)
      }

      uFactory.all = function(){
        return $http.get('/api/v1/users')
      }

      uFactory.login = function(user){
        console.log('login function in the factory')
        return $http.post('/api/v1/users/:id', user)
      }

      return uFactory
    }

}())
