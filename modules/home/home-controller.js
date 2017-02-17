'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$window', '$anchorScroll', '$location', '$timeout', '$uibModal', '$sce', '$document',
        function ($scope, $window, $anchorScroll, $location, $timeout, $uibModal, $sce, $document) {
            var winElement = angular.element($window);
            var screenWidth = winElement.width();
            var breakpointStart_lg = 992;
            var isLargeResolution = false;
            updateResolutionStatus();
            winElement.bind('resize', function () {
                screenWidth = winElement.width();
                updateResolutionStatus();
                //reset some values
                $scope.ctrlVars.burgerMenuSubmenuVisible_countries = false;
                $scope.ctrlVars.burgerMenuSubmenuVisible_focusAreas = false;
            });
            function updateResolutionStatus() {
                if (screenWidth >= breakpointStart_lg) {
                    isLargeResolution = true;
                } else {
                    isLargeResolution = false;
                }
            }
            $scope.to_trusted = function (html_code) {
                return $sce.trustAsHtml(html_code);
            }
            //'undpData' is object with side data defined inside 'allcontentdata.js' file
            var siteData = undpData;
            ///####################################################################################
            /* #region COUNTRIES RELATED CODE */
            //object with currently selected country data
            $scope.selectedCountry = {};
            //we are defining list of active countries (this 'listOfActiveCountries' is also defined inside 'index-controller.js' file)
            $scope.activeCountriesList = [
              { id: "AL", title: "Albania" },
              { id: "AM", title: "Armenia" },
              { id: "AZ", title: "Azerbaijan" },
              { id: "BY", title: "Belarus" },
              { id: "BA", title: "Bosnia and Herzegovina" },
              { id: "MK", title: "FYR Macedonia" },
              { id: "GE", title: "Georgia" },
              { id: "KZ", title: "Kazakhstan" },
              { id: "XK", title: "Kosovo" },
              { id: "KG", title: "Kyrgyz Republic" },
              { id: "MD", title: "Moldova" },
              { id: "ME", title: "Montenegro" },
              { id: "RS", title: "Serbia" },
              { id: "TJ", title: "Tajikistan" },
              { id: "TR", title: "Turkey" },
              { id: "TM", title: "Turkmenistan" },
              { id: "UA", title: "Ukraine" },
              { id: "UZ", title: "Uzbekistan" }
            ];
            /* #region On country map click */
            //we are calling 'countryClickedFunc' from external file 'index-controller.js' and passing name of country that has been clicked
            $scope.countryClickedFunc = function (countryOfInterestId) {
                for (var i = 0; i < siteData.countries.length; i++) {
                    if (siteData.countries[i].id == countryOfInterestId) {
                        $scope.selectedCountry = siteData.countries[i];
                        $scope.changeCountryBACData(0);
                        //console.log('$scope.selectedCountry: ' + $scope.selectedCountry.keyResults[2].text);
                        $scope.ctrlVars.isInterestCountryClicked = true;
                    }
                }
            }
            $scope.countryClickedFunc_fromBurger = function (countryOfInterestId) {
                for (var i = 0; i < siteData.countries.length; i++) {
                    if (siteData.countries[i].id == countryOfInterestId) {
                        $scope.selectedCountry = siteData.countries[i];
                        $scope.changeCountryBACData(0);
                        //console.log('$scope.selectedCountry: ' + $scope.selectedCountry.keyResults[2].text);
                        $scope.ctrlVars.isInterestCountryClicked = true;
                        $timeout(function () {
                            console.log('crolled to anchor map');
                            $scope.scrollToAnchor('mapdiv');
                        }, 500);
                    }
                }
                if ($('#cid-burger-dropdown-menu-lg').not(':hidden')) {
                    console.log('ton hiden lg country');
                    //$("#cid-burger-dropdown-menu-xs").hide();
                    $('[data-toggle="dropdown"]').parent().removeClass('open');
                };
            }
            /* #endregion On country map click */
            /* #region Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            $scope.enumBAC = {
                backgroundData: {
                    enumIndex: 0,
                    isXsContentVisible: false
                },
                assistanceData: {
                    enumIndex: 1,
                    isXsContentVisible: false
                },
                challengesData: {
                    enumIndex: 2,
                    isXsContentVisible: false
                }
            }
            $scope.changeCountryBACData = function (buttonIndex) {
                if (buttonIndex == $scope.enumBAC.backgroundData.enumIndex) {
                    $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.backgroundData;
                    $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.ctrlVars.currentBACindex = buttonIndex;
                    //toggle visibility of xs device content
                    $scope.enumBAC.backgroundData.isXsContentVisible = !$scope.enumBAC.backgroundData.isXsContentVisible;
                    //seto others to invisible
                    $scope.enumBAC.assistanceData.isXsContentVisible = false;
                    $scope.enumBAC.challengesData.isXsContentVisible = false;
                    /* #region Check if text exceeded height */
                    checkHeightOfTextBAC();
                    $scope.callExternalRebindingOfHtmlContent();
                    /* #endregion Check if text exceeded height */
                } else if (buttonIndex == $scope.enumBAC.assistanceData.enumIndex) {
                    $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.assistanceData;
                    $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.ctrlVars.currentBACindex = buttonIndex;
                    //toggle visibility of xs device content
                    $scope.enumBAC.assistanceData.isXsContentVisible = !$scope.enumBAC.assistanceData.isXsContentVisible;
                    //seto others to invisible
                    $scope.enumBAC.backgroundData.isXsContentVisible = false;
                    $scope.enumBAC.challengesData.isXsContentVisible = false;
                    /* #region Check if text exceeded height */
                    checkHeightOfTextBAC();
                    $scope.callExternalRebindingOfHtmlContent();
                    /* #endregion Check if text exceeded height */
                } else if (buttonIndex == $scope.enumBAC.challengesData.enumIndex) {
                    $scope.ctrlVars.dataBindBAC = $scope.selectedCountry.challengesData;
                    $scope.ctrlVars.dataBindStatement = $scope.selectedCountry.statement;
                    $scope.ctrlVars.currentBACindex = buttonIndex;
                    //toggle visibility of xs device content
                    $scope.enumBAC.challengesData.isXsContentVisible = !$scope.enumBAC.challengesData.isXsContentVisible;
                    //seto others to invisible
                    $scope.enumBAC.backgroundData.isXsContentVisible = false;
                    $scope.enumBAC.assistanceData.isXsContentVisible = false;
                    /* #region Check if text exceeded height */
                    checkHeightOfTextBAC();
                    $scope.callExternalRebindingOfHtmlContent();
                    /* #endregion Check if text exceeded height */
                }
            }

            $scope.callExternalRebindingOfHtmlContent = function () {
                //$scope.$apply();
                $timeout(function () {
                    console.log('caliing code in angular');
                    externalCompileCaller();
                }, 500);
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
                activeIndexTextPartOKW: null,
                selectedSubnavTitle_xs: null,
                //keeep index of currently visible OKW text
                currentOKWindex: 0,
                //keeps index of currently clicked Focus Area button
                currentFocusAreaIndex: null,
                //keeps data for modal screen (Gender Equality, Peace, ...)
                genderPeaceDataToShow: null,
                //burger menu
                burgerMenuSubmenuVisible_focusAreas: false,
                burgerMenuSubmenuVisible_countries: false
            }
            $scope.toggleBurgerMenu = function (callerName) {
                if (callerName == 'focus') {
                    $scope.ctrlVars.burgerMenuSubmenuVisible_focusAreas = !$scope.ctrlVars.burgerMenuSubmenuVisible_focusAreas;
                    $scope.ctrlVars.burgerMenuSubmenuVisible_countries = false;
                } else if (callerName == 'countries') {
                    $scope.ctrlVars.burgerMenuSubmenuVisible_countries = !$scope.ctrlVars.burgerMenuSubmenuVisible_countries;
                    $scope.ctrlVars.burgerMenuSubmenuVisible_focusAreas = false;
                }
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
                //check if click was initialized from burger menu and close burger menu
                if ($('#cid-burger-dropdown-menu-xs').not(':hidden')) {
                    console.log('ton hiden');
                    //$("#cid-burger-dropdown-menu-xs").hide();
                    $('[data-toggle="dropdown"]').parent().removeClass('open');
                };
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
                                //small devices, mobile phones
                                $timeout(function () {
                                    console.log('crolled to anchor');
                                    $scope.scrollToAnchor('cid-anchor-OKW-content');
                                }, 500);
                            } else {
                                //large resolutions
                                $timeout(function () {
                                    console.log('crolled to anchor 000');
                                    $scope.scrollToAnchor('cid-anchor-OKW-content');
                                }, 500);
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
                overviewData: {
                    enumIndex: 0,
                    isXsSubnavActive: false
                },
                keyTrendsData: {
                    enumIndex: 1,
                    isXsSubnavActive: false
                },
                whatWeDoData: {
                    enumIndex: 2,
                    isXsSubnavActive: false
                }
            }
            $scope.changeCountryOKWData = function (buttonIndex) {
                if (buttonIndex == $scope.enumOKW.overviewData.enumIndex) {
                    $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.overviewData;
                    $scope.ctrlVars.currentOKWindex = buttonIndex;
                    $scope.changeOKWpartText(0);
                    //set first item for mobile dropdown subnav
                    $scope.okwXsVars.selectedItemTitle = $scope.ctrlVars.dataBindOKW.textParts[0].partName;
                    $scope.okwXsVars.isDropdownOpen = false;
                    $scope.enumOKW.overviewData.isXsSubnavActive = !$scope.enumOKW.overviewData.isXsSubnavActive;
                    //set others to false so they will close
                    $scope.enumOKW.keyTrendsData.isXsSubnavActive = false;
                    $scope.enumOKW.whatWeDoData.isXsSubnavActive = false;
                } else if (buttonIndex == $scope.enumOKW.keyTrendsData.enumIndex) {
                    $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.keyTrendsData;
                    $scope.ctrlVars.currentOKWindex = buttonIndex;
                    $scope.changeOKWpartText(0);
                    //set first item for mobile dropdown subnav
                    $scope.okwXsVars.selectedItemTitle = $scope.ctrlVars.dataBindOKW.textParts[0].partName;
                    $scope.okwXsVars.isDropdownOpen = false;
                    $scope.enumOKW.keyTrendsData.isXsSubnavActive = !$scope.enumOKW.keyTrendsData.isXsSubnavActive;
                    //set others to false so they will close
                    $scope.enumOKW.overviewData.isXsSubnavActive = false;
                    $scope.enumOKW.whatWeDoData.isXsSubnavActive = false;
                } else if (buttonIndex == $scope.enumOKW.whatWeDoData.enumIndex) {
                    $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.whatWeDoData;                    
                    $scope.ctrlVars.currentOKWindex = buttonIndex;
                    $scope.changeOKWpartText(0);
                    //set first item for mobile dropdown subnav
                    $scope.okwXsVars.selectedItemTitle = $scope.ctrlVars.dataBindOKW.textParts[0].partName;
                    $scope.okwXsVars.isDropdownOpen = false;
                    $scope.enumOKW.whatWeDoData.isXsSubnavActive = !$scope.enumOKW.whatWeDoData.isXsSubnavActive;
                    //set others to false so they will close
                    $scope.enumOKW.overviewData.isXsSubnavActive = false;
                    $scope.enumOKW.keyTrendsData.isXsSubnavActive = false;
                }
            }
            $scope.changeOKWpartText = function (newPartIndex) {
                console.log('clicked changeOKWpartText: ' + newPartIndex);
                for (var i = 0; i < $scope.ctrlVars.dataBindOKW.textParts.length; i++) {
                    if (i == newPartIndex) {
                        $scope.ctrlVars.textPartOKWtoBind = $scope.ctrlVars.dataBindOKW.textParts[i].text;
                        $scope.ctrlVars.activeIndexTextPartOKW = i;
                        $scope.ctrlVars.selectedSubnavTitle_xs = $scope.ctrlVars.dataBindOKW.textParts[i].partName;
                        /* #region Check if text exceeded height */
                        checkHeightOfTextOKW();
                        $scope.callExternalRebindingOfHtmlContent();
                        /* #endregion Check if text exceeded height */
                    }
                }
            }
            $scope.changeOKWpartText_xs = function (selectedOptionItemObject) {
                console.log('selectedOptionTitle: ' + selectedOptionItemObject);
                for (var i = 0; i < $scope.ctrlVars.dataBindOKW.textParts.length; i++) {
                    if ($scope.ctrlVars.dataBindOKW.textParts[i].partName == selectedOptionItemObject.partName) {
                        $scope.ctrlVars.textPartOKWtoBind = $scope.ctrlVars.dataBindOKW.textParts[i].text;
                        $scope.ctrlVars.activeIndexTextPartOKW = i;
                        console.log('selectedOptionItemObject.partName: ' + selectedOptionItemObject.partName);
                    }
                }
            }
            $scope.okwXsVars = {
                selectedItemTitle: '',
                isDropdownOpen:false
            }
            $scope.selectOKWdropdownItem = function (clickedIndex) {
                console.log('clickedIndex: ' + clickedIndex);
                for (var i = 0; i < $scope.ctrlVars.dataBindOKW.textParts.length; i++) {
                    if (i == clickedIndex) {
                        console.log('equals clickedIndex: ');
                        $scope.okwXsVars.selectedItemTitle = $scope.ctrlVars.dataBindOKW.textParts[i].partName;
                        $scope.okwXsVars.isDropdownOpen = !$scope.okwXsVars.isDropdownOpen;
                        $scope.ctrlVars.textPartOKWtoBind = $scope.ctrlVars.dataBindOKW.textParts[i].text;
                        $scope.ctrlVars.activeIndexTextPartOKW = i;
                    }
                }
            }
            $scope.toggleDropdownOpen = function (dropdownType) {
                if (dropdownType == 'okw') {
                    $scope.okwXsVars.isDropdownOpen = !$scope.okwXsVars.isDropdownOpen;
                    console.log('$scope.okwXsVars.isDropdownOpen: ' + $scope.okwXsVars.isDropdownOpen);
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
            /* #region Modal for Gender Equality + Peace, Justice and Strong Institutions */
            $scope.openGenderPeaceModal = function (buttonName) {
                if (buttonName == 'gender') {
                    $scope.ctrlVars.genderPeaceDataToShow = $scope.ctrlVars.selectedFocusAreaData.pictogramModals.gender;
                    openModalInstance();
                } else if (buttonName == 'peace') {
                    $scope.ctrlVars.genderPeaceDataToShow = $scope.ctrlVars.selectedFocusAreaData.pictogramModals.peace;
                    openModalInstance();
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
                                content: $scope.ctrlVars.genderPeaceDataToShow
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

            /* #region FOREWORD AREA RELATED CODE */
            $scope.regionalContextVars = {
                dataBindForeword: {},
                isTextExpanded: false
            }
            /* #region Toggle OKW full text visibility (see less see more) */
            $scope.toggleForewordtextExpanded = function () {
                $scope.regionalContextVars.isTextExpanded = !$scope.regionalContextVars.isTextExpanded
            }
            /* #endregion Toggle OKW full text visibility (see less see more) */
            /* #endregion FOREWORD AREA RELATED CODE */

            /* #region Anchor Scroll */
            $scope.scrollToAnchor = function (anchorId) {
                $location.hash(anchorId);
                $anchorScroll();
            };
            /* #endregion Anchor Scroll */

            /* #region Check*/

            $(document).on('click', '#cid-burger-dropdown-menu-xs.dropdown-menu', function (e) {
                console.log('hearing');
                e.stopPropagation();
            });
            $(document).on('click', '#cid-burger-dropdown-menu-lg.dropdown-menu', function (e) {
                console.log('hearing');
                e.stopPropagation();
            });

            //$document.bind('click', function (event) {
            //    console.log('call an click target keys: ' + Object.keys(event));
            //    var elTarget = $(event.target);
            //});

            activate();
            function activate() {
                //keeps data of all Focus Areas
                $scope.ctrlVars.focusData = siteData.focusAreas;
                $scope.regionalContextVars.dataBindForeword = siteData.regionalContext;
            }
        }
    ]
);