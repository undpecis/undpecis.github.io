'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$window', '$anchorScroll', '$location', '$timeout',
        function ($scope, $window, $anchorScroll, $location, $timeout) {
            var winElement = angular.element($window);
            var screenWidth = winElement.width();
            winElement.bind('resize', function () {
                screenWidth = winElement.width();
            });
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
                        //console.log('$scope.selectedCountry: ' + $scope.selectedCountry.keyResults[2].text);
                        $scope.ctrlVars.isInterestCountryClicked = true;
                        $scope.$apply();
                    }
                }
            }
            /* #endregion On country map click */
            /* #region Change Data displayed for 'Background', 'Assistance and Impact' & 'Challenges, Lessons Learned and Way Forward' */
            $scope.dataBindBAC = {};
            $scope.currentBACindex = 0;
            $scope.enumBAC = {
                backgroundData: 0,
                assistanceData: 1,
                challengesData: 2
            }
            $scope.changeCountryBACData = function (buttonIndex) {
                if (buttonIndex == $scope.enumBAC.backgroundData) {
                    $scope.dataBindBAC = $scope.selectedCountry.backgroundData;
                    $scope.currentBACindex = buttonIndex;
                } else if (buttonIndex == $scope.enumBAC.assistanceData) {
                    $scope.dataBindBAC = $scope.selectedCountry.assistanceData;
                    $scope.currentBACindex = buttonIndex;
                } else if (buttonIndex == $scope.enumBAC.challengesData) {
                    $scope.dataBindBAC = $scope.selectedCountry.challengesData;
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
            $scope.focusData = siteData.focusAreas;
            //object with currently selected Focus Area data
            $scope.selectedFocusArea = {};
            $scope.dataBindOKW = {};
            $scope.currentOKWindex = 0;
            //called from home.html
            $scope.changeFocusAreaData = function (focusAreaIndex) {
                if ($scope.ctrlVars.isOpenCountryOKWdata == false) {
                    $scope.ctrlVars.isOpenCountryOKWdata = true;
                    $timeout(function () {
                        $location.hash('cid-anchor-OKW-content');
                        // call $anchorScroll()
                        $anchorScroll();
                    }, 200);

                }
                for (var i = 0; i < $scope.focusData.length; i++) {
                    if (i == focusAreaIndex) {
                        $scope.selectedFocusArea = $scope.focusData[i];
                        $scope.changeCountryOKWData(0);
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
            /* #endregion FOCUS AREAS RELATED CODE */


            /* #region Setter for random infographics sets on reload */
            //$scope.firstRandomIndex = '';
            //$scope.secondRandomIndex = '';
            //$scope.infographicsGroups = [
            //    {
            //        countries: [
            //            {
            //                shortName:'albania',
            //                fullName:'Albania'
            //            },
            //            {
            //                shortName:'armenia',
            //                fullName: 'Armenia'
            //            },
            //            {
            //                shortName:'azerbaijan',
            //                fullName: 'Azerbaijan'
            //            }
            //        ]
            //    },
            //    {
            //        countries: [
            //            {
            //                shortName:'belarus',
            //                fullName: 'Belarus'
            //            },
            //            {
            //                shortName:'bosnia',
            //                fullName: 'Bosnia'
            //            },
            //            {
            //                shortName:'georgia',
            //                fullName: 'Georgia'
            //            }
            //        ]
            //    },
            //    {
            //        countries: [
            //            {
            //                shortName:'kazakhstan',
            //                fullName: 'Kazakhstan'
            //            },
            //            {
            //                shortName:'kosovo',
            //                fullName: 'Kosovo'
            //            },
            //            {
            //                shortName:'kyrgyz',
            //                fullName: 'Kyrgyz'
            //            }
            //        ]
            //    },
            //    {
            //        countries: [
            //            {
            //                shortName:'moldova',
            //                fullName: 'Moldova'
            //            },
            //            {
            //                shortName:'montenegro',
            //                fullName: 'Montenegro'
            //            },
            //            {
            //                shortName:'serbia',
            //                fullName:'Serbia'
            //            }
            //        ]
            //    },
            //    {
            //        countries: [
            //            {
            //                shortName:'tajikistan',
            //                fullName:'Tajikistan'
            //            },
            //            {
            //                shortName:'macedonia',
            //                fullName:'Macedonia'
            //            },
            //            {
            //                shortName:'turkey',
            //                fullName:'Turkey'
            //            }
            //        ]
            //    },
            //    {
            //        countries: [
            //            {
            //                shortName:'turkmenistan',
            //                fullName:'Turkmenistan'
            //            },
            //            {
            //                shortName:'ukraine',
            //                fullName:'Ukraine'
            //            },
            //            {
            //                shortName:'uzbekistan',
            //                fullName:'Uzbekistan'
            //            }
            //        ]
            //    }
            //];
            //function setRandomInfographics() {
            //    var groupLength = $scope.infographicsGroups.length;
            //    //get index for first group
            //    $scope.firstRandomIndex = Math.floor(Math.random() * (groupLength - 0 )) + 0;
            //    console.log('$scope.firstRandomIndex: ' + $scope.firstRandomIndex);
            //    //setup for second index
            //    var randomInterval_secondGroup = setInterval(getRandomIndex_secondGroup, 10);
            //    function getRandomIndex_secondGroup() {
            //        // get index for second group
            //        var secondIndex = Math.floor(Math.random() * (groupLength - 0 )) + 0;
            //        if (secondIndex != $scope.firstRandomIndex) {
            //            $scope.secondRandomIndex = secondIndex;
            //            console.log('$scope.secondRandomIndex: ' + $scope.secondRandomIndex);
            //            // stop the interval
            //            clearInterval(randomInterval_secondGroup);
            //            //we need $timeout to provide some time until html is rendered
            //            $timeout(function () {
            //                $scope.ctrlVars.areInfographicsReady = true;
            //                console.log('$timeout: ');
            //                //calling functions inside 'index-controller.js'
            //                var arrayWithRandomCountries = [];
            //                for (var i = 0; i < $scope.infographicsGroups[0].countries.length; i++) {
            //                    arrayWithRandomCountries.push($scope.infographicsGroups[0].countries[i]);
            //                }
            //                for (var i = 0; i < $scope.infographicsGroups[$scope.secondRandomIndex].countries.length; i++) {
            //                    arrayWithRandomCountries.push($scope.infographicsGroups[$scope.secondRandomIndex].countries[i]);
            //                }
            //                callExternalSvgSetup(arrayWithRandomCountries);
            //            }, 300);
            //        }
            //    }
            //}
            //setRandomInfographics();
            /* #endregion Setter for random infographics sets on reload */

        }
    ]
);