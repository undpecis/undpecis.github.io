//used scripts:
//- jquery (for DOM manipulation)
//- ScrollMagic (for detecting scroll events)
//- TweenMax (GreenSock GSAP) (for animation)
//
//
$(document).ready(function () {
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
    /* #region AMCharts Map */
    var undpWorldMap = AmCharts.makeChart("mapdiv", {
        /**
         * this tells amCharts it's a map
         */
        "type": "map",
        "allowClickOnSelectedObject": true,
        "smallMap": {
            "enabled": false
        },
        "zoomControl": {
            "zoomFactor": 1.5,
            "maxZoomLevel": 7
        },
        /**
         * create data provider object
         * map property is usually the same as the name of the map file.
         * getAreasFromMap indicates that amMap should read all the areas available
         * in the map data and treat them as they are included in your data provider.
         * in case you don't set it to true, all the areas except listed in data
         * provider will be treated as unlisted.
         */
        //"mouseWheelZoomEnabled": true,
        "dataProvider": {
            "map": "worldLow",
            //"getAreasFromMap": true,
            "areas": [
              { "id": "AL", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Albania" },
              { "id": "AM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Armenia" },
              { "id": "AZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Azerbaijan" },
              { "id": "BA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Bosnia and Herzegovina" },
              { "id": "BY", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Belarus" },
              { "id": "MK", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "FYR Macedonia" },
              { "id": "GE", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Georgia" },
              { "id": "KZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kazakhstan" },
              { "id": "XK", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kosovo" },
              { "id": "KG", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kyrgyzstan" },
              { "id": "MD", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Moldova" },
              { "id": "ME", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Montenegro" },
              { "id": "RS", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Serbia" },
              { "id": "TJ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Tajikistan" },
              { "id": "TR", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Turkey" },
              { "id": "TM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Turkmenistan" },
              { "id": "UZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Uzbekistan" },
              { "id": "UA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Ukraine" }
            ]
        },

        /**
         * create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        "areasSettings": {
            "autoZoom": true,
            "color": "#c94b58",
            "outlineColor": "#c94b58",
            "outlineThickness": 1,
            //"outlineColor": "#243338",
            "rollOverColor": "#b0414c",
            "rollOverOutlineColor": "#b0414c",
            "selectedColor": "#00699e",
            "selectedOutlineColor": "#00699e",
            "unlistedAreasColor": "#c94b58",
            "unlistedAreasOutlineColor": "#c94b58",
            "balloonText": "[[title]]"
        },
        /**
         * let's say we want a small map to be displayed, so let's create it
         */
        "listeners": [
            {
                "event": "clickMapObject",
                "method": function (event) {
                    var countryOfInterest = false;
                    for (var i = 0; i < listOfActiveCountries.length; i++) {
                        if (listOfActiveCountries[i].id == event.mapObject.id) {
                            countryOfInterest = true;
                        }
                    }
                    if (countryOfInterest == true) {
                        //'mainContainerId' is id of main html container; we need it to access angular controller and send the id of country that has been clicked; ID of country is defined in this controller in 'listOfActiveCountries' object AND IT SHOULD BE DEFINED ALSO in 'home-controller.js'
                        angular.element(document.getElementById('mainContainerId')).scope().countryClickedFunc(event.mapObject.id);
                        //var titleObjects = document.getElementsByClassName('c-dynamic-country-title');
                        //for (var i = 0; i < titleObjects.length; i++) {
                        //    titleObjects[i].innerHTML = event.mapObject.title;
                        //}
                        //$(".c-country-key-txxt-wrap").show();
                    } else {
                        return false;
                    }
                    //Resolution depending function
                    if ($(window).width() > 992) {
                        console.log("I'm calling function above 992 = large");
                        //$('div.c-country-title.c-show-when-lg').show();
                    }
                    else {
                        console.log("I'm calling function below 992 = small");
                        //$('div.c-country-title.c-show-when-xs').show();
                    }
                    //// Ignore any click not on area
                    //if (e.mapObject.objectType !== "MapArea")
                    //    return;

                    //var area = e.mapObject;

                    //// Toggle showAsSelected
                    //area.showAsSelected = !area.showAsSelected;
                    //e.chart.returnInitialColor(area);

                    //// Update the list
                    //document.getElementById("selected").innerHTML = JSON.stringify(getSelectedCountries());
                }
            },
            {
                "event": "init",
                "method": function (event) {
                    //console.log('zoomLatitude methods: ' + event.chart.getObjectById("KZ").zoomLatitude );"));
                    event.chart.zoomToLongLat(2, 69.8885, 35.3864);
                }
            },
            {
                "event": "homeButtonClicked",
                "method": function (event) {
                    event.chart.zoomToLongLat(2, 69.8885, 35.3864);
                }
            }
        ]
    });
    //
    //undpWorldMap.addListener("click", function (e) {
    //    console.log('console clog clicke here is true::  ' + e.mapObject.objectType);
    //});
    //function preSelectCountries(list) {
    //    for (var i = 0; i < list.length; i++) {
    //        var area = map.getObjectById(list[i]);
    //        area.showAsSelected = true;
    //        map.returnInitialColor(area);
    //    }
    //}
    /* #endregion AMCharts Map */
    //-------------------------------------------------------//
    /* #region Setting up Array that will contain 6 radnom SVG elements */
    var infographicsGroups = [
        {
            countries: [
                {
                    shortName: 'albania',
                    fullName: 'Albania'
                },
                {
                    shortName: 'armenia',
                    fullName: 'Armenia'
                },
                {
                    shortName: 'azerbaijan',
                    fullName: 'Azerbaijan'
                }
            ]
        },
        {
            countries: [
                {
                    shortName: 'belarus',
                    fullName: 'Belarus'
                },
                {
                    shortName: 'bosnia',
                    fullName: 'Bosnia'
                },
                {
                    shortName: 'georgia',
                    fullName: 'Georgia'
                }
            ]
        },
        {
            countries: [
                {
                    shortName: 'kazakhstan',
                    fullName: 'Kazakhstan'
                },
                {
                    shortName: 'kosovo',
                    fullName: 'Kosovo'
                },
                {
                    shortName: 'kyrgyz',
                    fullName: 'Kyrgyz'
                }
            ]
        },
        {
            countries: [
                {
                    shortName: 'moldova',
                    fullName: 'Moldova'
                },
                {
                    shortName: 'montenegro',
                    fullName: 'Montenegro'
                },
                {
                    shortName: 'serbia',
                    fullName: 'Serbia'
                }
            ]
        },
        {
            countries: [
                {
                    shortName: 'tajikistan',
                    fullName: 'Tajikistan'
                },
                {
                    shortName: 'macedonia',
                    fullName: 'Macedonia'
                },
                {
                    shortName: 'turkey',
                    fullName: 'Turkey'
                }
            ]
        },
        {
            countries: [
                {
                    shortName: 'turkmenistan',
                    fullName: 'Turkmenistan'
                },
                {
                    shortName: 'ukraine',
                    fullName: 'Ukraine'
                },
                {
                    shortName: 'uzbekistan',
                    fullName: 'Uzbekistan'
                }
            ]
        }
    ];
    var randomCountriesArray = [];
    /* #region Get Random SVG groups */
    function setupRandomSvgGraphics() {
        /* #region Get random numbers */
        var firstRandomIndex = Math.floor(Math.random() * (infographicsGroups.length - 0)) + 0;
        //setup interval that will keep firing until we get second index different from first index
        var randomInterval_secondGroup = setInterval(getRandomIndex_secondGroup, 10);
        function getRandomIndex_secondGroup() {
            //get second index
            var secondRandomIndex = Math.floor(Math.random() * (infographicsGroups.length - 0)) + 0;
            if (secondRandomIndex != firstRandomIndex) {
                //clears interval
                clearInterval(randomInterval_secondGroup);
                //fill list of random countries with first group
                for (var i = 0; i < infographicsGroups[firstRandomIndex].countries.length; i++) {
                    randomCountriesArray.push(infographicsGroups[firstRandomIndex].countries[i]);
                }
                //fill list of random countries with second group
                for (var j = 0; j < infographicsGroups[secondRandomIndex].countries.length; j++) {
                    randomCountriesArray.push(infographicsGroups[secondRandomIndex].countries[j]);
                }
                //calls function for inserting html with jquery
                insertSvgGraphicsToView();
            }
        }
        /* #endregion Get random numbers */
    }
    setupRandomSvgGraphics();
    /* #endregion Get Random SVG groups */
    /* #region Inserts SVG's to HTML */
    var startingOpacity = 0.3;
    var scrollMagicInitController = new ScrollMagic.Controller();
    var allScrollMagicScenesArray = [];
    function insertSvgGraphicsToView() {
        for (var i = 0; i < randomCountriesArray.length; i++) {
            $("#trigger-country-container-" + (i + 1) + "-svg").prop('id', 'cid-infographic-trigger-' + randomCountriesArray[i].shortName);
            $("#cid-infographic-trigger-" + randomCountriesArray[i].shortName).append('<object type="image/svg+xml" data="Content/images/infographic-' + randomCountriesArray[i].shortName + '.svg" class="c-svg-object" id="cid-infographic-' + randomCountriesArray[i].shortName + '-object">Infographic Legal</object>');
            $("#cid-infographic-trigger-" + randomCountriesArray[i].shortName).css("opacity", startingOpacity);
            /* #region Setting up ScrollMagicScenes */
            // create the scrollmagic scene here.
            var generic_scrollMagicScene = new ScrollMagic.Scene(
                {
                    triggerElement: "#cid-infographic-trigger-" + randomCountriesArray[i].shortName, duration: 100,
                    triggerHook: "onCenter",
                    index: 77,
                }
            ).addTo(
                scrollMagicInitController
            ).on("start", function (e) {
                genericCountrySvg_animate(e);
            }
            );
            allScrollMagicScenesArray.push(generic_scrollMagicScene);
            allScrollMagicScenesArray[i].countryIndex = i;
            /* #endregion Setting up ScrollMagicScenes */
        }
    }
    /* #endregion Inserts SVG's to HTML */    
    function genericCountrySvg_animate(event) {
        var eventCountryIndex = event.currentTarget.countryIndex;
        for (var i = 0; i < randomCountriesArray.length; i++) {
            if (eventCountryIndex == i) {
                $("#cid-infographic-trigger-" + randomCountriesArray[i].shortName).css("opacity", startingOpacity);
            }            
        }        
    }

    //window.callExternalSvgSetup = function (countriesObject) {
    //    randomCountriesArray = countriesObject;
    //    for (var i = 0; i < randomCountriesArray.length; i++) {
    //        var countryDivId = 'cid-infographic-' + randomCountriesArray[i].shortName + '-trigger';
    //        genericCountrySvg_setup(countryDivId);
    //    }
    //}
    /* #endregion Setting up Array that will contain 6 radnom SVG elements */
    /* #region Setting up ScrollMagicScenes */
    //setScrollMagicScene = function (trigElemId) {
    //    console.log('settingScrollMagicScene');
    //    var generic_scrollMagicScene = new ScrollMagic.Scene(
    //        {
    //            triggerElement: trigElemId, duration: 100,
    //            triggerHook: "onCenter",
    //        }
    //    ).addTo(
    //        scrollMagicInitController
    //    ).on("start", function (e) {
    //        console.log('generic animate++');
    //        genericCountrySvg_animate(trigElemId);
    //    }
    //    )
    //}
    /* #endregion Setting up ScrollMagicScenes */
    /* #region Generic Animation for all SVG's */
    //var startingOpacity = 0.2;
    //function genericCountrySvg_setup(countryId) {
    //    /* #region Define HTML element */
    //    //contains <object> element with desired id that holds svg object
    //    var countryHtmlObjectWithId;
    //    var countrySvgElement;
    //    var isCountryHtmlElementRenderedInterval = setInterval(testRenderedStatus, 50);
    //    function testRenderedStatus() {
    //        //get element by defined id = countryId
    //        countryHtmlObjectWithId = $("#" + countryId)[0];
    //        if (countryHtmlObjectWithId != undefined) {
    //            // stop the interval
    //            clearInterval(isCountryHtmlElementRenderedInterval);
    //            // gets svg element inside defined id = countryId
    //            countrySvgElement = $('#' + countryId + ' svg');
    //            $("#" + countryId).css("opacity", startingOpacity);
    //        } else {
    //            console.log('element ' + countryId + ' note yet rendered!');
    //        }
    //    }
    //    /* #endregion Define HTML element */
    //}
    /* #endregion Generic Animation for all SVG's */


});






//GSAP
// Get the Object by ID
//var graphicDots = document.getElementById("cid-infographic-dots");
//// Get the SVG document inside the Object tag
//var graphicDotsSVGdocument = graphicDots.contentDocument;
//// Get one of the SVG items by ID; 
//var svgItems = $(graphicDotsSVGdocument).find('.cvg-should-be-blue');
////state of animation
//var graphicDotsFired = false;
//function animateDots() {
//    console.log("Hit start point of scene. + " + svgItems.length);
//    if (graphicDotsFired == false) {
//        graphicDotsFired = true;
//        var delayNumber = 0.03;
//        for (var i = 0; i < svgItems.length; i++) {
//            var newDelayValue = delayNumber * i;
//            TweenMax.to(svgItems[i], 0.05, { fill: "#05679a", ease: Power2.easeInOut, delay: newDelayValue });
//            TweenMax.to(svgItems[i], 0.05, { scaleX: 1.8, scaleY: 1.8, ease: Back.easeOut.config(1.7), transformOrigin: "50% 50%", onComplete: returnScaleCircle, onCompleteParams: [i], delay: newDelayValue });
//            function returnScaleCircle(completedi) {
//                TweenMax.to(svgItems[completedi], 0.05, { scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7), transformOrigin: "50% 50%" });
//            }
//        }
//    }
//}


//triggerElement: "#cid-infographic-dots"
//*****
//function animateDots() {
//    console.log("Hit start point of scene.");
//    // Get the Object by ID
//    var graphicDots = document.getElementById("cid-infographic-dots");
//    // Get the SVG document inside the Object tag
//    var graphicDotsSVGdocument = graphicDots.contentDocument;
//    // Get one of the SVG items by ID;    
//    var svgItems = $(graphicDotsSVGdocument).find('.cvg-should-be-blue');
//    TweenMax.to(svgItems, 7, { fill: "#05679a", ease: Power2.easeInOut});
//}