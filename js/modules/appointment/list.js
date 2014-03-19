/**
 * Created by damien on 2/22/2014.
 */
function ListAppointmentCtrl ($scope, $firebase, $http, $notification) {

  var FBURL = "https://clinification.firebaseio.com/appointment";
  $scope.listAppointments = $firebase(new Firebase(FBURL ));
  $scope.listAppointments.$bind($scope, 'listAppointments').then(function(unbind) {
   console.log('aaa');
  });

  $scope.listAppointments.$on("child_changed", function(e, a) {
    console.log(e.snapshot.value.firstName);
    if( e.snapshot.value.status == 'confirmed'){

      $notification.notify('images/info.png', 'New Confirmation', e.snapshot.value.firstName+' has Confirmed appointment');

    }
        else if( e.snapshot.value.status == 'declined'){

      $notification.notify('images/info.png', 'New Decline', e.snapshot.value.firstName+' has Declined appointment');

    }
    });



  $scope.sendConfirmation = function(){


  this.appointment.status = "waiting-answer";

  console.log(this.appointment);
  console.log($scope.listAppointments);

  $scope.listAppointments.$save();
  sendSMSConfirmation(this.appointment.phone);


  }

  $scope.changeSorting = function (){
    console.log("change sorting");

  }
  $scope.predicate = 'category';
  $scope.sort = {
    column: 'b',
    descending: false
  };

  function sendSMSConfirmation(phoneNumber){
    console.log("send sms confirmation : " +phoneNumber);


    $http({
      url: 'http://hhmtl.acadis.org/ask?phone='+phoneNumber,
      method: "GET"
    }).success(function (data, status, headers, config) {
      console.log(' successs send sms');
    }).error(function (data, status, headers, config) {

    });
  }
}
