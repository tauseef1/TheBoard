(function (angular) {
    theModule.controller("notesViewController", ["$scope"], function ($scope) {
        $scope.notes = [{
            note: "Hello World",
            color: "yellow",
            author: "Cameron VanHouzen"
            }];
        });

    })(window.angular);