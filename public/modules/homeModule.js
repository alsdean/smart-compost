//IIFE FOR VARIABLE ENCAPSULATION
(function() {
  angular.module('homeModule', [])
    .controller('homeCtrl', homeController)

    homeController.$inject = ['userFact', '$state', '$http']

    function homeController(userFact, $state, $http){
      var hCtrl = this
      hCtrl.loggedInUser = ''

      hCtrl.logout = function (user) {
        userFact.logout(user)
          .then(function (response) {
            hCtrl.loggedInUser = ''
            console.log('username: ', hCtrl.loggedInUser)
          }, function(error){
            console.log('err in logout method', error)
            hCtrl.logout.message = 'Logout error'
          })
      }

      hCtrl.findAll = function(){
        userFact.all()
          .then(function(response){
            console.log("Data coming from our API all method: ",response)
            hCtrl.users = response.data
          })
          .catch(function(error){
            console.log("you had a server side error:", error)
          })
      }

      // SUBMIT METHOD FOR ANGULAR SIGNUP FORM
      hCtrl.createUser = function(user){
        //MAKE THE API CALL FROM YOUR FACTORY OBJECT
        userFact.create(user)
          .then(function (response) {
            $state.go('welcome')
            hCtrl.loggedInUser = response.data.username
            // console.log("response from server create method",response)
          }, function(error){
            console.log("err in create method", error)
            hCtrl.createUser.message = 'Sign-up error'
          })
      }

      // SUBMIT METHOD FOR ANGULAR LOGIN FORM
      hCtrl.login = function(user){
        userFact.login(user)
        .then(function (response) {
          console.log('response from server login method', response)
          $state.go('tracker')
          hCtrl.loggedInUser = response.data.username
          console.log(hCtrl)
        }, function(error){
          console.log('err in login method', error)
          hCtrl.login.message = 'Login error'
        })
      }

      hCtrl.parallaxCall = function () {
        // AJAX call for parallax function
        $('.parallax').parallax()
      }
    }

  }())
