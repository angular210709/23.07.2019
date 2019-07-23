
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $rootScope.objNumber = { x : 15 }

    $scope.change = function() {
        $rootScope.objNumber.x++
    }
    
}
