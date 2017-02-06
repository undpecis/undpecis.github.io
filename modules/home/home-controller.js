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
                        $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.backgroundData;
                        $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                        //console.log('$scope.selectedCountry: ' + $scope.selectedCountry.keyResults[2].text);
                        $scope.ctrlVars.isInterestCountryClicked = true;
                        $scope.$apply();
                    }
                }
            }
            /* #endregion On country map click */
            /* #region Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            $scope.enumBAC = {
                backgroundData: 0,
                assistanceData: 1,
                challengesData: 2
            }
            $scope.changeCountryBACData = function (buttonIndex) {
                if (buttonIndex == $scope.enumBAC.backgroundData) {
                    $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.backgroundData;
                    $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.ctrlVars.currentBACindex = buttonIndex;
                    /* #region Check if text exceeded height */
                    checkHeightOfTextBAC();
                    /* #endregion Check if text exceeded height */
                } else if (buttonIndex == $scope.enumBAC.assistanceData) {
                    $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.assistanceData;
                    $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.ctrlVars.currentBACindex = buttonIndex;
                    /* #region Check if text exceeded height */
                    checkHeightOfTextBAC();
                    /* #endregion Check if text exceeded height */
                } else if (buttonIndex == $scope.enumBAC.challengesData) {
                    $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.challengesData;
                    $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.ctrlVars.currentBACindex = buttonIndex;
                    /* #region Check if text exceeded height */
                    checkHeightOfTextBAC();
                    /* #endregion Check if text exceeded height */
                }
            }
            /* #endregion Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            /* #region Check if text exceeded height */
            function checkHeightOfTextBAC() {
                var checkForElementInterval = setInterval(getTextBoxElement, 10);
                function getTextBoxElement() {
                    var htmlElement = document.getElementById('cid-expandable-bac-wrapper');
                    if (htmlElement != null && htmlElement != undefined) {
                        clearInterval(checkForElementInterval);
                        var textOuterBoxHeight = document.getElementById('cid-expandable-bac-wrapper').offsetHeight;
                        var textInnerBoxHeight = document.getElementById('cid-binded-bac-text').offsetHeight;
                        if (textInnerBoxHeight > textOuterBoxHeight) {
                            $scope.ctrlVars.dataBindBAC.isLargeText = true;
                            $scope.$apply();
                        } else {
                            $scope.ctrlVars.dataBindBAC.isLargeText = false;
                        }
                    }
                }
            }
            /* #endregion Check if text exceeded height */
            /* #endregion COUNTRIES RELATED CODE */

            /* #region Content Visibility */
            $scope.ctrlVars = {                
                isInterestCountryClicked: false,
                //Key Result (Baskcground, Assistance.. Challanges..) = BAC
                isOpenCountryBACdata_lg: false,
                isOpenCountryBACdata_xs: false,
                //keeps data for BAC text
                dataBindBAC: {},
                dataBindStatement: {},
                currentBACindex: 0,
                //Focus Areas (Overview, Key trends, What we..) = OKW
                isOpenCountryOKWdata: false,
                //keeps visibility for Infographics SVG
                areInfographicsReady: false,
                //keeps data of all Focus Areas
                focusData: null,
                //object with currently selected Focus Area data
                selectedFocusAreaData: {},
                //object with Overview, Key trends, What we do
                dataBindOKW: {},
                //object with exact part of text of Overview, Key trends, What we do
                textPartOKWtoBind: null,
                //keeep index of currently visible OKW text
                currentOKWindex: 0,
                //keeps index of currently clicked Focus Area button
                currentFocusAreaIndex: null,
                //keeps data for modal screen (Gender Equality, Peace, ...)
                genderPeaceDataToShow: null
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
            /* #region Toggle OKW full text visibility (see less see more) */
            $scope.toggleBACtextExpanded = function () {
                $scope.ctrlVars.dataBindBAC.isTextExpanded = !$scope.ctrlVars.dataBindBAC.isTextExpanded;
            }
            /* #endregion Toggle OKW full text visibility (see less see more) */

            /* #region FOCUS AREAS RELATED CODE */
            //keeps visibility status of clicked Focus Area
            $scope.toggleFocusAreaVisibility = function (focusAreaIndex) {
                //find index match of Focus Area button clicked
                for (var i = 0; i < $scope.ctrlVars.focusData.length; i++) {
                    //if index matched
                    if (i == focusAreaIndex) {
                        //if this button not already opened
                        if ($scope.ctrlVars.focusData[i].activeInView == false) {
                            $scope.ctrlVars.focusData[i].activeInView = true;
                            $scope.ctrlVars.selectedFocusAreaData = $scope.ctrlVars.focusData[i];                            
                            $scope.ctrlVars.isOpenCountryOKWdata = true;
                            $scope.ctrlVars.currentFocusAreaIndex = focusAreaIndex;
                            $scope.changeCountryOKWData(0);
                            if (isLargeResolution == false) {
                                $timeout(function () {
                                    $location.hash('cid-anchor-OKW-content');
                                    $anchorScroll();
                                }, 300);
                            }
                        //if button is already open then close everything
                        } else {
                            $scope.ctrlVars.isOpenCountryOKWdata = false;
                            $scope.ctrlVars.currentFocusAreaIndex = null;
                            $scope.ctrlVars.focusData[i].activeInView = false;
                        }
                    //if index not matched we will set status to false for all other buttons
                    } else {
                        $scope.ctrlVars.focusData[i].activeInView = false;
                    }
                }
            }
            $scope.enumOKW = {
                overviewData: 0,
                keyTrendsData: 1,
                whatWeDoData: 2
            }
            $scope.changeCountryOKWData = function (buttonIndex) {
                if (buttonIndex == $scope.enumOKW.overviewData) {
                    $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.overviewData;                    
                    $scope.ctrlVars.currentOKWindex = buttonIndex;
                    $scope.changeOKWpartText(0);
                } else if (buttonIndex == $scope.enumOKW.keyTrendsData) {
                    $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.keyTrendsData;
                    $scope.ctrlVars.currentOKWindex = buttonIndex;
                    $scope.changeOKWpartText(0);
                } else if (buttonIndex == $scope.enumOKW.whatWeDoData) {
                    $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.whatWeDoData;
                    $scope.ctrlVars.currentOKWindex = buttonIndex;
                    $scope.changeOKWpartText(0);

                }
            }
            $scope.changeOKWpartText = function (newPartIndex) {
                console.log('clicked changeOKWpartText: ' + newPartIndex);
                for (var i = 0; i < $scope.ctrlVars.dataBindOKW.textParts.length; i++) {
                    if (i == newPartIndex) {
                        $scope.ctrlVars.textPartOKWtoBind = $scope.ctrlVars.dataBindOKW.textParts[i].text;
                        /* #region Check if text exceeded height */
                        checkHeightOfTextOKW();
                        /* #endregion Check if text exceeded height */
                    }
                }
            }

            /* #region Check if text exceeded height */
            function checkHeightOfTextOKW() {
                var checkForElementInterval = setInterval(getTextBoxElement, 10);
                function getTextBoxElement() {
                    var htmlElement = document.getElementById('cid-expandable-okw-wrapper');
                    if (htmlElement != null && htmlElement != undefined) {
                        clearInterval(checkForElementInterval);
                        var textOuterBoxHeight = document.getElementById('cid-expandable-okw-wrapper').offsetHeight;
                        var textInnerBoxHeight = document.getElementById('cid-binded-okw-text').offsetHeight;
                        if (textInnerBoxHeight > textOuterBoxHeight) {
                            $scope.ctrlVars.dataBindOKW.isLargeText = true;
                            $scope.$apply();
                        } else {
                            $scope.ctrlVars.dataBindOKW.isLargeText = false;
                        }
                    }
                }
            }
            /* #endregion Check if text exceeded height */

            /* #region Toggle OKW full text visibility (see less see more) */
            $scope.toggleOKWtextExpanded = function () {                
                $scope.ctrlVars.dataBindOKW.isTextExpanded = !$scope.ctrlVars.dataBindOKW.isTextExpanded;
            }
            /* #endregion Toggle OKW full text visibility (see less see more) */

            /* #region OKW xs screens logic (mobile+) */
            $scope.toggleCountryOKWData_xs = function (okwDataIndex) {
                if (okwDataIndex == 0) {

                }
            }
            /* #endregion OKW xs screens logic (mobile+) */

            /* #region Modal for Gender Equality + Peace, Justice and Strong Institutions */
            $scope.openGenderPeaceModal = function (buttonName) {
                if (buttonName == 'gender') {
                    for (var i = 0; i < siteData.genderPeace.genderEquality.length; i++) {
                        if (i == $scope.ctrlVars.currentFocusAreaIndex) {
                            $scope.ctrlVars.genderPeaceDataToShow = siteData.genderPeace.genderEquality[i].modalText;
                            openModalInstance();
                        }
                    }
                } else if (buttonName == 'peace') {
                    for (var i = 0; i < siteData.genderPeace.peaceAndJustice.length; i++) {
                        if (i == $scope.ctrlVars.currentFocusAreaIndex) {
                            $scope.ctrlVars.genderPeaceDataToShow = siteData.genderPeace.peaceAndJustice[i].modalText;
                            openModalInstance();
                        }
                    }
                }
            }
            function openModalInstance() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'modules/home/views/modals/gender-peace-modal.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'lg',
                    windowClass: 'c-custom-modal-wrapper',
                    backdrop: 'static',
                    resolve: {
                        passedData: function () {
                            return {
                                text: $scope.ctrlVars.genderPeaceDataToShow
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

            activate();
            function activate() {
                //keeps data of all Focus Areas
                $scope.ctrlVars.focusData = siteData.focusAreas;
            }
        }
    ]
);