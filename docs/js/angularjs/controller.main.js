(function() {
    'use strict';

    app.controller('mainCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $window) {

        $scope.navbarToggleColor

        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 600) {
                $scope.navbarToggleColor = true;
            } else {
                $scope.navbarToggleColor = false;
            }
            $scope.$apply();
        });

    }

}());