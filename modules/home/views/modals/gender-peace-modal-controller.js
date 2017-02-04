'use strict';

angular.module('Home')

.controller('ModalInstanceCtrl',
    ['$scope', '$uibModalInstance', 'passedData',
        function ($scope, $uibModalInstance, passedData) {
            console.log('modal opened!');
            $scope.dataToBind = {
                text: ''
            }
            $scope.closeModal = function () {
                $uibModalInstance.close(false);
            };

            activate();
            function activate() {
                $scope.dataToBind.text = passedData.text;
            }

        }
    ]
);