'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$window', '$anchorScroll', '$location', '$timeout', '$uibModal', '$sce', '$document',
        function ($scope, $window, $anchorScroll, $location, $timeout, $uibModal, $sce, $document) {
            /* #===================================================================== Application setup =======# */
            // @= We are defining list of active countries (this 'listOfActiveCountries' is also defined inside 'index-controller.js' file)
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
            /* #region Variables for application */
            $scope.ctrlVars = {
                //keeps track of number of loading taks; if nothing is loading, list will be empty
                isLoading: [],
                // @= Visibility vars
                visibleStates: {
                    burger_focusAreas:false,
                    burger_countries: false,
                    isCountryVisible: false,
                    isOpenCountryBACdata_lg: false,
                    isVisibleFocusAreaContent: false,
                    visibleFocusAreaContentIndex: null,
                    footer_focusAreaIndex: null
                },
                // @= Countries Map vars
                // @= Countries Keys vars
                //object with currently selected country data
                selectedCountry: {},
                //object for binding into view with Background, Assistance and Impact & Challages, Lesssons...
                dataBindBAC: {},
                //keeps track of visible part for Country BAC content
                enumBAC: [
                    {
                        name: 'country-background',
                        enumIndex: 0,
                        isXsContentVisible: false
                    },
                    {
                        name: 'country-assistance-and-impact',
                        enumIndex: 1,
                        isXsContentVisible: false
                    },
                    {
                        name: 'country-challanges-lessons',
                        enumIndex: 2,
                        isXsContentVisible: false
                    }
                ],
                //selected country Statement content
                dataBindStatement: null,
                //keeps index of active BAC text part
                currentBACindex: null,
                // @= Focus Areas vars
                //all data for Focus Areas
                focusData: null,
                //single selected focus area out of other three
                selectedFocusAreaData: {},
                //object for binding into view with Overview, Key trends, What we do
                dataBindOKW: {},
                //keeps index of active OKW text part
                currentOKWindex: null,
                //keeps data of OKW text part
                textPartOKWtoBind: null,
                textPartOKWindex: null,
                //mobile
                mobile_OKWdropdownTitle: null,
                mobile_OKWdropdownOpen: false,
                //keeps track of visible part for Focus Area data
                enumOKW:[
                    {
                        name: 'focus-area-overview',
                        enumIndex: 0,
                        isXsSubnavActive: false
                    },
                    {
                        name: 'focus-area-key-trends',
                        enumIndex: 1,
                        isXsSubnavActive: false
                    },
                    {
                        name: 'focus-area-what-we-do',
                        enumIndex: 2,
                        isXsSubnavActive: false
                    }
                ],
                // @= Foreword vars
                forewordData: {
                    data: null,
                    isTextExpanded: false
                },
                // @= Footer navigation XS devices
                enumFooter: [
                    {
                        name: 'UNDP ECIS',
                        enumIndex: 0,
                        isXsSubContentActive: false
                    },
                    {
                        name: 'QUICK LINKS',
                        enumIndex: 1,
                        isXsSubContentActive: false
                    },
                    {
                        name: 'REFERENCES',
                        enumIndex: 2,
                        isXsSubContentActive: false
                    },
                    {
                        name: 'CONTACT US',
                        enumIndex: 3,
                        isXsSubContentActive: false
                    }
                ]
            }
            /* #endregion Variables for application */
            /* #===================================================================== Content visibility related code =======# */
            $scope.toggleVisibility = function (callerName, subTarget) {
                console.log('callerName: ' + callerName + ' subTarget: ' + subTarget);
                if (callerName == 'burgerMenu_focusAreas') {
                    $scope.ctrlVars.visibleStates.burger_focusAreas = !$scope.ctrlVars.visibleStates.burger_focusAreas;
                    $scope.ctrlVars.visibleStates.burger_countries = false;
                } else if (callerName == 'burgerMenu_countries') {
                    $scope.ctrlVars.visibleStates.burger_countries = !$scope.ctrlVars.visibleStates.burger_countries;
                    $scope.ctrlVars.visibleStates.burger_focusAreas = false;
                } else if (callerName == 'focusAreasContent') {
                    // if click came from footer links then 'footer_focusAreaIndex' must be different from null
                    //this means that click came from footer links
                    //this if/else is needed becouse only footer links can select specific OKW content selection; In other cases we just open wanted Focus Area and always show first OKW content (index 0)
                    //also, Focus Area content visibility can be toggled ONLY if click came from Focus Areas 'Learn More' buttons; In other cases we ALWAYS open FA, never closing
                    if ($scope.ctrlVars.visibleStates.footer_focusAreaIndex != null) {
                        console.log('called from footer');
                        for (var i = 0; i < $scope.ctrlVars.focusData.length; i++) {
                            //if index matched
                            if (i == $scope.ctrlVars.visibleStates.footer_focusAreaIndex) {
                                $scope.ctrlVars.visibleStates.isVisibleFocusAreaContent = true;
                                var wantedFocusAreaIndex = $scope.ctrlVars.visibleStates.footer_focusAreaIndex;
                                $scope.openFocusAreaOKWtext(wantedFocusAreaIndex, subTarget);
                                //close footer navigation menu
                                $scope.ctrlVars.visibleStates.footer_focusAreaIndex = null;
                                break;
                            }
                        }
                        //close visibility of footer links
                        for (var j = 0; j < $scope.ctrlVars.enumFooter.length; j++) {
                            $scope.ctrlVars.enumFooter[j].isXsSubContentActive = false;
                        }
                    //check if click was initialized from burger menu
                    } else if ($('.c-header-burger-dropdown').is(':visible')) {
                        console.log('called from burger');
                        //then close burger menu
                        $('[data-toggle="dropdown"]').parent().removeClass('open');
                        //set Focus Ares Content to visible
                        $scope.ctrlVars.visibleStates.isVisibleFocusAreaContent = true;
                        //bind Focus Ares Content
                        $scope.openFocusAreaOKWtext(subTarget, 0);
                    //then click came from Focus Areas 'Learn More' buttons
                    } else {
                        console.log('else FA clicked');
                        //check if user is toggling FA content visibility by clicking 'Learn More' button
                        //this means that user is clicking on 'Close Focus Area' button
                        if ($scope.ctrlVars.visibleStates.visibleFocusAreaContentIndex == subTarget) {
                            $scope.ctrlVars.visibleStates.isVisibleFocusAreaContent = false;
                            $scope.ctrlVars.visibleStates.visibleFocusAreaContentIndex = null;
                        } else {
                            console.log('set to true');
                            $scope.ctrlVars.visibleStates.isVisibleFocusAreaContent = true;
                            //bind Focus Ares Content
                            $scope.openFocusAreaOKWtext(subTarget, 0);
                        }
                    }
                } else if (callerName == 'footerMenu_focusAres') {
                    $scope.ctrlVars.visibleStates.footer_focusAreaIndex = subTarget;
                } else if (callerName == 'okwContentMoreLess') {
                    if ($scope.ctrlVars.dataBindOKW.isTextExpanded != undefined && $scope.ctrlVars.dataBindOKW.isTextExpanded != null) {
                        $scope.ctrlVars.dataBindOKW.isTextExpanded = !$scope.ctrlVars.dataBindOKW.isTextExpanded;
                        //if we shrinked text content by clicking 'Show less' then we should scroll back to top
                        if ($scope.ctrlVars.dataBindOKW.isTextExpanded == false) {
                            if (isLargeResolution == false) {
                                $timeout(function () {
                                    scrollToAnchor('cid-anchor-OKW-content');
                                }, 600);
                            } else {
                                $timeout(function () {
                                    scrollToAnchor('cid-anchor-OKW-content');
                                }, 600);
                            }
                        }
                    }
                } else if (callerName == 'countryOnMap') {
                    $scope.ctrlVars.visibleStates.isCountryVisible = !$scope.ctrlVars.visibleStates.isCountryVisible;
                    $scope.ctrlVars.visibleStates.isOpenCountryBACdata_lg = false;
                } else if (callerName == 'countryLearnMore_lg') {
                    $scope.ctrlVars.visibleStates.isOpenCountryBACdata_lg = !$scope.ctrlVars.visibleStates.isOpenCountryBACdata_lg;
                } else if (callerName == 'bacContentMoreLess') {
                    if ($scope.ctrlVars.dataBindBAC.isTextExpanded != undefined && $scope.ctrlVars.dataBindBAC.isTextExpanded != null) {
                        $scope.ctrlVars.dataBindBAC.isTextExpanded = !$scope.ctrlVars.dataBindBAC.isTextExpanded;
                        //if we shrinked text content by clicking 'Show less' then we should scroll back to top
                        if ($scope.ctrlVars.dataBindOKW.isTextExpanded == false) {
                            if (isLargeResolution == false) {
                                $timeout(function () {
                                    scrollToAnchor('cid-bac-content-lg');
                                }, 600);
                            } else {
                                $timeout(function () {
                                    scrollToAnchor('cid-bac-content-xs');
                                }, 600);
                            }
                        }
                    }
                } else if (callerName == 'forwordContentMoreLess') {
                    $scope.ctrlVars.forewordData.isTextExpanded = !$scope.ctrlVars.forewordData.isTextExpanded;
                    if ($scope.ctrlVars.forewordData.isTextExpanded == false) {
                        //$timeout(function () {
                        //    scrollToAnchor('cid-foreword-content');
                        //}, 600);
                    }
                } else if (callerName == 'footerNav_xs') {
                    for (var i = 0; i < $scope.ctrlVars.enumFooter.length; i++) {
                        //if index matched
                        if (i == subTarget) {
                            $scope.ctrlVars.enumFooter[i].isXsSubContentActive = !$scope.ctrlVars.enumFooter[i].isXsSubContentActive;
                        } else {
                            $scope.ctrlVars.enumFooter[i].isXsSubContentActive = false;
                        }
                    }
                }
            }
            // @= If user clicks over burger menu we will stop click propagation to prevent dropdown closing
            $(document).on('click', '#cid-burger-dropdown-menu-xs.dropdown-menu', function (e) {
                e.stopPropagation();
            });
            $(document).on('click', '#cid-burger-dropdown-menu-lg.dropdown-menu', function (e) {
                console.log('hearing');
                e.stopPropagation();
            });
            /* #===================================================================== Countries Map related code =======# */
            $scope.countryClickedFunc = function (callerName, countryOfInterestId) {
                for (var i = 0; i < siteData.countries.length; i++) {
                    if (siteData.countries[i].id == countryOfInterestId) {
                        $scope.ctrlVars.selectedCountry = siteData.countries[i];
                        $scope.ctrlVars.visibleStates.isCountryVisible = true;
                        $scope.changeCountryBACData(0);
                        if (callerName == 'countriesFromBurger') {
                            if ($('.c-header-burger-dropdown').is(':visible')) {
                                $('[data-toggle="dropdown"]').parent().removeClass('open');
                            };
                            $timeout(function () {
                                scrollToAnchor('mapdiv');
                            }, 700);
                        }
                        break;
                    }
                }
            }
            $scope.changeCountryBACData = function (countryBACbttnIndex) {
                for (var i = 0; i < $scope.ctrlVars.enumBAC.length; i++) {
                    if (i == countryBACbttnIndex) {
                        $scope.ctrlVars.currentBACindex = countryBACbttnIndex;
                        $scope.ctrlVars.enumBAC[i].isXsContentVisible = !$scope.ctrlVars.enumBAC[i].isXsContentVisible;
                        //
                        if (i == 0) {
                            $scope.ctrlVars.dataBindBAC = $scope.ctrlVars.selectedCountry.backgroundData;
                        } else if (i == 1) {
                            $scope.ctrlVars.dataBindBAC = $scope.ctrlVars.selectedCountry.assistanceData;
                        } else if (i == 2) {
                            $scope.ctrlVars.dataBindBAC = $scope.ctrlVars.selectedCountry.challengesData;
                        }
                    } else {
                        $scope.ctrlVars.enumBAC[i].isXsContentVisible = false;
                    }
                }
                $scope.ctrlVars.dataBindStatement = $scope.ctrlVars.selectedCountry.statement;
                //
                checkHeightOfTextBAC();
                $scope.callExternalRebindingOfHtmlContent();
                /* #endregion Check if text exceeded height */
            }
            /* @= Check if text exceeded height */
            function checkHeightOfTextBAC() {
                var genericIntervalCounter = 0;
                var checkForElementInterval = setInterval(getTextBoxElement, 100);
                function getTextBoxElement() {
                    //cancel interval if it is fired to many times
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkForElementInterval);
                    } else {
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
                        genericIntervalCounter++;
                    }
                }
            }
            /* #===================================================================== Focus Areas related code =======# */
            // This function 'openFocusAreaOKWtext' will change displayed content of Focus Areas OKW bind (Overview, Key trends, What we do)
            // wantedFocusAreaIndex = Wanted Focus Area
            // wantedFocusAreaOKWcontentIndex = Wanted OKW index
            $scope.openFocusAreaOKWtext = function (wantedFocusAreaIndex, wantedFocusAreaOKWcontentIndex) {
                //set index of visible Focus Area (Conflict Prevention.., Responsive and.., Inclusive Political.. or Rule of Law, Justice)
                $scope.ctrlVars.visibleStates.visibleFocusAreaContentIndex = wantedFocusAreaIndex;
                $scope.ctrlVars.selectedFocusAreaData = $scope.ctrlVars.focusData[wantedFocusAreaIndex];
                $scope.changeCountryOKWData(wantedFocusAreaOKWcontentIndex);
                if (isLargeResolution == false) {
                    //small devices, mobile phones
                    $timeout(function () {
                        scrollToAnchor('cid-anchor-OKW-content');
                    }, 500);
                } else {
                    //large resolutions
                    $timeout(function () {
                        scrollToAnchor('cid-anchor-OKW-content');
                    }, 500);
                }
                console.log('openFocusAreaOKWtext:>  wantedFocusAreaIndex: ' + wantedFocusAreaIndex + '  wantedFocusAreaOKWcontentIndex: ' + wantedFocusAreaOKWcontentIndex);
                console.log('$scope.ctrlVars.enumOKW.length: ' + $scope.ctrlVars.enumOKW.length);
            }
            //function that will toggle between Focus Area OKW content
            $scope.changeCountryOKWData = function (buttonIndex) {
                for (var i = 0; i < $scope.ctrlVars.enumOKW.length; i++) {
                    if (i == buttonIndex) {
                        console.log('wantedFocusAreaOKWcontentIndex: ' + buttonIndex);
                        //give data to bind for Focus Areas OKW content
                        if (buttonIndex == 0) {
                            //check if wanted sub content is Overview
                            $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.overviewData;
                        } else if (buttonIndex == 1) {
                            //check if wanted sub content is Key Trends
                            $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.keyTrendsData;
                        } else if (buttonIndex == 2) {
                            //check if wanted sub content is What we do
                            $scope.ctrlVars.dataBindOKW = $scope.ctrlVars.selectedFocusAreaData.whatWeDoData;
                        }
                        //set index so we know what OKW part is active
                        $scope.ctrlVars.currentOKWindex = buttonIndex;
                        //set first item for mobile dropdown subnav
                        $scope.ctrlVars.mobile_OKWdropdownTitle = $scope.ctrlVars.dataBindOKW.textParts[0].partName;
                        $scope.ctrlVars.mobile_OKWdropdownOpen = false;
                        $scope.ctrlVars.enumOKW[i].isXsSubnavActive = !$scope.ctrlVars.enumOKW[i].isXsSubnavActive;
                        //call function that will show selected text part from OKW texts
                        $scope.changeOKWpartText(0);
                        if (isLargeResolution == false) {
                            //small devices, mobile phones
                            $timeout(function () {
                                scrollToAnchor('cid-anchor-OKW-content');
                            }, 500);
                        }
                    } else {
                        console.log('isXsSubnavActive: ' + $scope.ctrlVars.enumOKW[i].isXsSubnavActive);
                        $scope.ctrlVars.enumOKW[i].isXsSubnavActive = false;
                    }
                }
            }
            //function that will show selected text part from OKW texts
            $scope.changeOKWpartText = function (newPartIndex) {
                console.log('clicked changeOKWpartText: ' + newPartIndex);
                for (var i = 0; i < $scope.ctrlVars.dataBindOKW.textParts.length; i++) {
                    if (i == newPartIndex) {
                        $scope.ctrlVars.textPartOKWtoBind = $scope.ctrlVars.dataBindOKW.textParts[i].text;
                        $scope.ctrlVars.textPartOKWindex = i;
                        $scope.ctrlVars.mobile_OKWdropdownTitle = $scope.ctrlVars.dataBindOKW.textParts[i].partName;
                        /* #region Check if text exceeded height */
                        checkHeightOfTextOKW();
                        $scope.callExternalRebindingOfHtmlContent();
                        /* #endregion Check if text exceeded height */
                        break;
                    }
                }
            }
            //function that will change text content when small device navigation is used
            $scope.selectOKWdropdownItem = function (clickedIndex) {
                console.log('clickedIndex: ' + clickedIndex);
                for (var i = 0; i < $scope.ctrlVars.dataBindOKW.textParts.length; i++) {
                    if (i == clickedIndex) {
                        console.log('equals clickedIndex: ');
                        $scope.ctrlVars.mobile_OKWdropdownTitle = $scope.ctrlVars.dataBindOKW.textParts[i].partName;
                        $scope.ctrlVars.mobile_OKWdropdownOpen = !$scope.ctrlVars.mobile_OKWdropdownOpen;
                        $scope.ctrlVars.textPartOKWtoBind = $scope.ctrlVars.dataBindOKW.textParts[i].text;
                        //$scope.ctrlVars.currentOKWindex = i;
                        break;
                    }
                }
            }
            // function that checks if height of binded text is larger than our container in which we want it to display that text
            function checkHeightOfTextOKW() {
                var genericIntervalCounter = 0;
                var checkForElementInterval = setInterval(getTextBoxElement, 100);
                function getTextBoxElement() {
                    //cancel interval if it is fired to many times
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkForElementInterval);
                    } else {
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
                        genericIntervalCounter++;
                    }
                }
            }
            /* #===================================================================== Foreword related code =======# */
            /* #===================================================================== Helper functions =======# */
            // @= Returns content with html properly parsed for binding
            $scope.to_trusted = function (html_code) {
                return $sce.trustAsHtml(html_code);
            }
            // @= Scroll to Anchor div 
            function scrollToAnchor(anchorId) {
                var genericIntervalCounter = 0;
                var checkForElementInterval = setInterval(getElementToScroll, 100);
                function getElementToScroll() {
                    //cancel interval if it is fired to many times
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkForElementInterval);
                    } else {
                        var htmlElement = angular.element(document.getElementById(anchorId));
                        if (htmlElement != null && htmlElement != undefined) {
                            clearInterval(checkForElementInterval);
                            //
                            $location.hash(anchorId);
                            $anchorScroll();
                        }
                        genericIntervalCounter++;
                    }
                }
            };
            // @= Calls external function that will reinitialize newly binded content update
            $scope.callExternalRebindingOfHtmlContent = function () {
                //$scope.$apply();
                $timeout(function () {
                    console.log('caliing code in angular');
                    externalCompileCaller();
                }, 600);
            }
            // @= Listen for view resolution and update variables on resize
            var winElement = angular.element($window);
            var screenWidth = winElement.width();
            var breakpointStart_lg = 992;
            var isLargeResolution = false;
            updateResolutionStatus();
            winElement.bind('resize', function () {
                screenWidth = winElement.width();
                updateResolutionStatus();
                //reset some values
                $scope.ctrlVars.visibleStates.burger_countries = false;
                $scope.ctrlVars.visibleStates.burger_focusAreas = false;
            });
            function updateResolutionStatus() {
                if (screenWidth >= breakpointStart_lg) {
                    isLargeResolution = true;
                } else {
                    isLargeResolution = false;
                }
            }

            //'undpData' is object with all data for this application defined inside 'allcontentdata.js' file
            var siteData = undpData;
            //setup application
            activate();
            function activate() {
                //get data from 
                $scope.ctrlVars.focusData = siteData.focusAreas;
                $scope.ctrlVars.forewordData.data = siteData.regionalContext;
            }
        }
    ]
);