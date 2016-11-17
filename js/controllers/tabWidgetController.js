angular.module("tabWidget", []).controller("tabWidgetCtrl", function($scope, $http){
    $scope.visibility = true;
    $scope.visibleTab = null;
    $scope.open = function(id){
        $scope.visibleTab = id;
    }
    $http.get("resources/data.json")
        .then(function(res){
            var tabGroups = res.data.tabGroups;
            $scope.tabGroups = tabGroups;
        })
});