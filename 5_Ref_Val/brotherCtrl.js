module.controller("brotherCtrl", BrotherCtrl)


// DI dependency injection - IOC
function BrotherCtrl($scope, $rootScope) {

    $scope.myX = $rootScope.objNumber

}
