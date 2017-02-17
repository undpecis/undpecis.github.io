'use strict';

angular.module('Home')

.controller('ModalInstanceCtrl',
    ['$scope', '$uibModalInstance', 'passedData', '$sce',
        function ($scope, $uibModalInstance, passedData, $sce) {
            console.log('modal opened!');
            $scope.dataToBind = {
                title: '',
                text: ''
            }
            $scope.closeModal = function () {
                $uibModalInstance.close(false);
            };

            $scope.to_trustedModalText = function (html_code) {
                return $sce.trustAsHtml(html_code);
            }

            activate();
            function activate() {
                console.log('passed: ' + passedData);
                $scope.dataToBind.title = passedData.content.title;
                $scope.dataToBind.text = passedData.content.text;
            }

        }
    ]
);