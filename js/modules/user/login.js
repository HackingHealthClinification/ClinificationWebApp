/**
 * Created by damien on 2/22/2014.
 */

function LoginCtrl ($scope, $firebaseSimpleLogin, $location) {
  var dataRef = new Firebase("https://clinification.firebaseio.com/");
  $scope.loginObj = $firebaseSimpleLogin(dataRef);

$scope.clickLogin = function(){
  console.log( ' clic login');

  $scope.loginObj.$login('password', {
    email: $scope.login,
    password: $scope.password
  }).then(function(user) {
    console.log('Logged in as: ', user.uid);

    $location.path('/appointment/')
  }, function(error) {
    console.error('Login failed: ', error);
  });
}
}