
function MenuCtrl( $scope ){
    console.log("update menu funtion"  );
    var menu =[];
    function updateMenu(){
            menu.push({url:"#/logout/", name:"Logout"});
            menu.push({url:"#/appointment/create", name:"+ Create Appointment"});
            menu.push({url:"#/appointment", name:"# Appointment"});


        $scope.menu = menu ;
    }

    updateMenu();

    $scope.$on('menuBroadcast', function(){
        console.log("update menu broadcast");
        updateMenu();
    });

    $scope.doTheBack = function() {
        window.history.back();
        console.log("back");
    };
}