module.controller("brotherCtrl", BrotherCtrl)


// DI dependency injection - IOC
function BrotherCtrl($scope, $rootScope) {

    /*
    first solution for auto run of code whenever x is modified
    $scope.everyTime = function() {
        alert("called me....")
        return 10
    }
    */

    $scope.ifIs3 = false;

    $rootScope.$on("Boom3" , function(event, data) {
        // 3 was reached
        console.log(event)
        console.log(data)
        $scope.ifIs3 = true;
    })

}
