'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$window', '$anchorScroll', '$location', '$timeout', '$uibModal',
        function ($scope, $window, $anchorScroll, $location, $timeout, $uibModal) {
            var winElement = angular.element($window);
            var screenWidth = winElement.width();
            var breakpointStart_lg = 992;
            var isLargeResolution = false;
            updateResolutionStatus();
            winElement.bind('resize', function () {
                screenWidth = winElement.width();
                updateResolutionStatus();
            });
            function updateResolutionStatus() {
                if (screenWidth >= breakpointStart_lg) {
                    isLargeResolution = true;
                } else {
                    isLargeResolution = false;
                }
            }
            //'undpData' is object with side data defined inside 'allcontentdata.js' file
            var siteData = undpData;
            ///####################################################################################
            /* #region COUNTRIES RELATED CODE */
            //object with currently selected country data
            $scope.selectedCountry = {};
            //we are defining list of active countries (this 'listOfActiveCountries' is also defined inside 'index-controller.js' file)
            var listOfActiveCountries = [
              { "id": "AL", "title": "Albania" },
              { "id": "AM", "title": "Armenia" },
              { "id": "AZ", "title": "Azerbaijan" },
              { "id": "BY", "title": "Belarus" },
              { "id": "BA", "title": "Bosnia and Herzegovina" },
              { "id": "MK", "title": "FYR Macedonia" },
              { "id": "GE", "title": "Georgia" },
              { "id": "KZ", "title": "Kazakhstan" },
              { "id": "XK", "title": "Kosovo" },
              { "id": "KG", "title": "Kyrgyz Republic" },
              { "id": "MD", "title": "Moldova" },
              { "id": "ME", "title": "Montenegro" },
              { "id": "RS", "title": "Serbia" },
              { "id": "TJ", "title": "Tajikistan" },
              { "id": "TR", "title": "Turkey" },
              { "id": "TM", "title": "Turkmenistan" },
              { "id": "UA", "title": "Ukraine" },
              { "id": "UZ", "title": "Uzbekistan" }
            ];
            /* #region On country map click */
            //we are calling 'countryClickedFunc' from external file 'index-controller.js' and passing name of country that has been clicked
            $scope.countryClickedFunc = function (countryOfInterestId) {
                for (var i = 0; i < siteData.countries.length; i++) {
                    if (siteData.countries[i].id == countryOfInterestId) {
                        $scope.selectedCountry = siteData.countries[i];
                        $scope.dataBindBAC = $scope.selectedCountry.backgroundData;
                        $scope.dataBindStatement = $scope.selectedCountry.statement;
                        //console.log('$scope.selectedCountry: ' + $scope.selectedCountry.keyResults[2].text);
                        $scope.ctrlVars.isInterestCountryClicked = true;
                        $scope.$apply();
                    }
                }
            }
            /* #endregion On country map click */
            /* #region Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            $scope.dataBindBAC = {};
            $scope.dataBindStatement = {};
            $scope.currentBACindex = 0;
            $scope.enumBAC = {
                backgroundData: 0,
                assistanceData: 1,
                challengesData: 2
            }
            $scope.changeCountryBACData = function (buttonIndex) {
                if (buttonIndex == $scope.enumBAC.backgroundData) {
                    $scope.dataBindBAC = $scope.selectedCountry.backgroundData;
                    $scope.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.currentBACindex = buttonIndex;
                } else if (buttonIndex == $scope.enumBAC.assistanceData) {
                    $scope.dataBindBAC = $scope.selectedCountry.assistanceData;
                    $scope.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.currentBACindex = buttonIndex;
                } else if (buttonIndex == $scope.enumBAC.challengesData) {
                    $scope.dataBindBAC = $scope.selectedCountry.challengesData;
                    $scope.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.currentBACindex = buttonIndex;
                }
            }
            /* #endregion Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            /* #endregion COUNTRIES RELATED CODE */

            /* #region Content Visibility */
            $scope.ctrlVars = {                
                isInterestCountryClicked: false,
                //Key Result (Baskcground, Assistance.. Challanges..) = BAC
                isOpenCountryBACdata_lg: false,
                isOpenCountryBACdata_xs: false,
                //Focus Areas (Overview, Key trends, What we..) = OKW
                isOpenCountryOKWdata: false,
                //keeps visibility for Infographics SVG
                areInfographicsReady: false
            }
            $scope.toggleKeyContent = function (callerName) {
                if (callerName == 'closeInterestCountry') {
                    $scope.ctrlVars.isInterestCountryClicked = false;
                    if ($scope.ctrlVars.isOpenCountryBACdata_lg == true) {
                        $scope.ctrlVars.isOpenCountryBACdata_lg = false;
                    }
                    if ($scope.ctrlVars.isOpenCountryBACdata_xs == true) {
                        $scope.ctrlVars.isOpenCountryBACdata_xs = false;
                    }
                } else if (callerName == 'isOpenCountryBACdata_lg') {
                    $scope.ctrlVars.isOpenCountryBACdata_lg = !$scope.ctrlVars.isOpenCountryBACdata_lg;
                } else if (callerName == 'isOpenCountryBACdata_xs') {
                    $scope.ctrlVars.isOpenCountryBACdata_xs = !$scope.ctrlVars.isOpenCountryBACdata_xs;
                }
            }
            /* #endregion Content Visibility */

            /* #region FOCUS AREAS RELATED CODE */
            //keeps data of all Focus Areas
            $scope.focusData = siteData.focusAreas;
            //object with currently selected Focus Area data
            $scope.selectedFocusArea = {};
            //object with Overview, Key trends, What we do
            $scope.dataBindOKW = {};
            //keeep index of currently visible OKW text
            $scope.currentOKWindex = 0;
            //keeps index of currently clicked Focus Area button
            $scope.currentFocusAreaIndex = null;
            //keeps visibility status of clicked Focus Area
            $scope.toggleFocusAreaVisibility = function (focusAreaIndex) {
                //find index match of Focus Area button clicked
                for (var i = 0; i < $scope.focusData.length; i++) {
                    //if index matched
                    if (i == focusAreaIndex) {
                        //if this button not already opened
                        if ($scope.focusData[i].activeInView == false) {
                            $scope.focusData[i].activeInView = true;
                            $scope.selectedFocusArea = $scope.focusData[i];
                            $scope.changeCountryOKWData(0);
                            $scope.ctrlVars.isOpenCountryOKWdata = true;
                            $scope.currentFocusAreaIndex = focusAreaIndex;
                            if (isLargeResolution == false) {
                                $timeout(function () {
                                    $location.hash('cid-anchor-OKW-content');
                                    $anchorScroll();
                                }, 100);
                            }
                        //if button is already open then close everything
                        } else {
                            $scope.ctrlVars.isOpenCountryOKWdata = false;
                            $scope.currentFocusAreaIndex = null;
                            $scope.focusData[i].activeInView = false;
                        }
                    //if index not matched we will set status to false for all other buttons
                    } else {
                        $scope.focusData[i].activeInView = false;
                    }
                }
            }
            $scope.enumOKW = {
                overviewData: 0,
                keyTrendsData: 1,
                whatWeDoData: 2
            }
            $scope.changeCountryOKWData = function (buttonIndex) {
                console.log('changeCountryOKWData: ' + buttonIndex);
                if (buttonIndex == $scope.enumOKW.overviewData) {
                    $scope.dataBindOKW = $scope.selectedFocusArea.overviewData;
                    $scope.currentOKWindex = buttonIndex;
                } else if (buttonIndex == $scope.enumOKW.keyTrendsData) {
                    $scope.dataBindOKW = $scope.selectedFocusArea.keyTrendsData;
                    $scope.currentOKWindex = buttonIndex;
                } else if (buttonIndex == $scope.enumOKW.whatWeDoData) {
                    $scope.dataBindOKW = $scope.selectedFocusArea.whatWeDoData;
                    $scope.currentOKWindex = buttonIndex;
                }
            }

            /* #region Modal for Gender Equality + Peace, Justice and Strong Institutions */
            $scope.genderPeaceDataToShow = null;
            $scope.openGenderPeaceModal = function (buttonName) {
                if (buttonName == 'gender') {
                    for (var i = 0; i < siteData.genderPeace.genderEquality.length; i++) {
                        if (i == $scope.currentFocusAreaIndex) {
                            console.log('gender + $scope.currentFocusAreaIndex: ' + i);
                            $scope.genderPeaceDataToShow = siteData.genderPeace.genderEquality[i].modalText;
                            openModalInstance();
                        }
                    }
                } else if (buttonName == 'peace') {
                    for (var i = 0; i < siteData.genderPeace.peaceAndJustice.length; i++) {
                        if (i == $scope.currentFocusAreaIndex) {
                            console.log('peace + $scope.currentFocusAreaIndex: ' + i);
                            $scope.genderPeaceDataToShow = siteData.genderPeace.peaceAndJustice[i].modalText;
                            openModalInstance();
                        }
                    }
                }
            }
            function openModalInstance() {
                console.log('open modal');
                var modalInstance = $uibModal.open({
                    templateUrl: 'modules/home/views/modals/gender-peace-modal.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'lg',
                    windowClass: 'c-custom-modal-wrapper',
                    backdrop: 'static',
                    resolve: {
                        passedData: function () {
                            return {
                                text: $scope.genderPeaceDataToShow
                            }
                        }
                    }
                });
                modalInstance.result.then(function (response) {
                    if (response) {

                    }
                });
            }
            /* #endregion Modal for Gender Equality + Peace, Justice and Strong Institutions */
            /* #endregion FOCUS AREAS RELATED CODE */
        }
    ]
);