/**
 * Created by damien on 2/22/2014.
 */
function CreateAppointmentCtrl ($scope, $firebase) {
  $scope.appointment = $firebase(new Firebase("https://clinification.firebaseio.com/appointment"));


  $scope.createAppointment = function(){
    console.log( " create appointment");

    $scope.appointment.$add({
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      phone: $scope.phone,
      date: $scope.sharedDate,
      category: $scope.category,
      description: $scope.description,
      address: 'CHU Sainte-Justine, Montreal, QC',
      doctor: 'doctor Blablabla',
      hospital: 'CHU Ste Justine',
      status: 'not-confirmed'
    });
//    alert("appointment created");
  }




}
