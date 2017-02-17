//used scripts:
//- jquery (for DOM manipulation)
//- ScrollMagic (for detecting scroll events)
//- TweenMax (GreenSock GSAP) (for animation)
//
function externalCompileCaller() {
    console.log('calling... outisde func');
    $('[data-toggle="popover"]').popover(
        {
            html: true,
            viewport: '.c-bind-txxt-wrapper',
            trigger: 'focus',
        }
    );
}

$(document).ready(function () {
    /* #region Swipebox lightbox */
    $('.swipebox').swipebox();
    /* #endregion Swipebox lightbox */
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
              { "id": "KG", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kyrgyz Republic" },
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
                    fullName: 'Albania',
                    functionName: 'svgAnimate_albania'
                },
                {
                    shortName: 'armenia',
                    fullName: 'Armenia',
                    functionName: 'svgAnimate_armenia'
                },
                {
                    shortName: 'azerbaijan',
                    fullName: 'Azerbaijan',
                    functionName: 'svgAnimate_azerbaijan'
                }
            ],
            backgroundColor: '#F6F6F6',
            titleColor: '#818285'
        },
        {
            countries: [
                {
                    shortName: 'belarus',
                    fullName: 'Belarus',
                    functionName: 'svgAnimate_belarus'
                },
                {
                    shortName: 'bosnia',
                    fullName: 'Bosnia',
                    functionName: 'svgAnimate_bosnia'
                },
                {
                    shortName: 'georgia',
                    fullName: 'Georgia',
                    functionName: 'svgAnimate_georgia'
                }
            ],
            backgroundColor: '#eceded',
            titleColor: '#1073a8'
        },
        {
            countries: [
                {
                    shortName: 'kazakhstan',
                    fullName: 'Kazakhstan',
                    functionName: 'svgAnimate_kazakhstan'
                },
                {
                    shortName: 'kosovo',
                    fullName: 'Kosovo',
                    functionName: 'svgAnimate_kosovo'
                },
                {
                    shortName: 'kyrgyz',
                    fullName: 'Kyrgyz',
                    functionName: 'svgAnimate_kyrgyz'
                }
            ],
            backgroundColor: '#fef1e1',
            titleColor: '#f48466'
        },
        {
            countries: [
                {
                    shortName: 'moldova',
                    fullName: 'Moldova',
                    functionName: 'svgAnimate_moldova'
                },
                {
                    shortName: 'montenegro',
                    fullName: 'Montenegro',
                    functionName: 'svgAnimate_montenegro'
                },
                {
                    shortName: 'serbia',
                    fullName: 'Serbia',
                    functionName: 'svgAnimate_serbia'
                }
            ],
            backgroundColor: '#fabea7',
            titleColor: '#ef4331'
        },
        {
            countries: [
                {
                    shortName: 'tajikistan',
                    fullName: 'Tajikistan',
                    functionName: 'svgAnimate_tajikistan'
                },
                {
                    shortName: 'macedonia',
                    fullName: 'Macedonia',
                    functionName: 'svgAnimate_macedonia'
                },
                {
                    shortName: 'turkey',
                    fullName: 'Turkey',
                    functionName: 'svgAnimate_turkey'
                }
            ],
            backgroundColor: '#B7C7DF',
            titleColor: '#1073a8'
        },
        {
            countries: [
                {
                    shortName: 'turkmenistan',
                    fullName: 'Turkmenistan',
                    functionName: 'svgAnimate_turkmenistan'
                },
                {
                    shortName: 'ukraine',
                    fullName: 'Ukraine',
                    functionName: 'svgAnimate_ukraine'
                },
                {
                    shortName: 'uzbekistan',
                    fullName: 'Uzbekistan',
                    functionName: 'svgAnimate_uzbekistan'
                }
            ],
            backgroundColor: '#383839',
            titleColor: '#a7a9ac'
        }
    ];
    var randomCountriesArray = [];
    /* #region Get Random SVG groups */
    function setupRandomSvgGraphics() {
        /* #region Get random numbers */
        var firstRandomIndex = Math.floor(Math.random() * (infographicsGroups.length - 0)) + 0;
        //var firstRandomIndex = 0;
        //setup interval that will keep firing until we get second index different from first index
        var randomInterval_secondGroup = setInterval(getRandomIndex_secondGroup, 10);
        function getRandomIndex_secondGroup() {
            //get second index
            var secondRandomIndex = Math.floor(Math.random() * (infographicsGroups.length - 0)) + 0;
            if (secondRandomIndex != firstRandomIndex) {
                //clears interval
                clearInterval(randomInterval_secondGroup);
                //set html container background to match svg graph color
                //set background color of div containing svg graphics
                for (var i = 0; i < infographicsGroups.length; i++) {
                    if (firstRandomIndex == i) {
                        $("#svg-graph-master-wrap-first").css("background-color", infographicsGroups[i].backgroundColor);
                        $("#svg-graph-master-wrap-first .c-section-title").css("color", infographicsGroups[i].titleColor);
                    }
                    if (secondRandomIndex == i) {
                        $("#svg-graph-master-wrap-second").css("background-color", infographicsGroups[i].backgroundColor);
                        $("#svg-graph-master-wrap-second .c-section-title").css("color", infographicsGroups[i].titleColor);
                    }
                }
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
                }
            ).addTo(
                scrollMagicInitController
            ).on("start", function (e) {
                startCountryAnimation(e);
                //e.currentTarget.enabled(false);
            }
            );
            allScrollMagicScenesArray.push(generic_scrollMagicScene);
            allScrollMagicScenesArray[i].countryIndex = i;
            allScrollMagicScenesArray[i].countryShortName = randomCountriesArray[i].shortName;
            /* #endregion Setting up ScrollMagicScenes */
        }
    }
    /* #endregion Inserts SVG's to HTML */
    /* #region We are calling animation for country */
    function startCountryAnimation(event) {
        var eventCountryIndex = event.currentTarget.countryIndex;        
        //console.log('keyss: ' + Object.keys(event.currentTarget));
        for (var i = 0; i < randomCountriesArray.length; i++) {
            if (eventCountryIndex == i) {
                if (randomCountriesArray[i].shortName == 'albania') { svgAnimate_albania();
                } else if (randomCountriesArray[i].shortName == 'albania') {
                    svgAnimate_albania();
                } else if (randomCountriesArray[i].shortName == 'armenia') {
                    svgAnimate_armenia();
                } else if (randomCountriesArray[i].shortName == 'azerbaijan') {
                    svgAnimate_azerbaijan();
                } else if (randomCountriesArray[i].shortName == 'belarus') {
                    svgAnimate_belarus();
                } else if (randomCountriesArray[i].shortName == 'bosnia') {
                    svgAnimate_bosnia();
                } else if (randomCountriesArray[i].shortName == 'georgia') {
                    svgAnimate_georgia();
                } else if (randomCountriesArray[i].shortName == 'kazakhstan') {
                    svgAnimate_kazakhstan();
                } else if (randomCountriesArray[i].shortName == 'kosovo') {
                    svgAnimate_kosovo();
                } else if (randomCountriesArray[i].shortName == 'kyrgyz') {
                    svgAnimate_kyrgyz();
                } else if (randomCountriesArray[i].shortName == 'moldova') {
                    svgAnimate_moldova();
                } else if (randomCountriesArray[i].shortName == 'montenegro') {
                    svgAnimate_montenegro();
                } else if (randomCountriesArray[i].shortName == 'serbia') {
                    svgAnimate_serbia();
                } else if (randomCountriesArray[i].shortName == 'tajikistan') {
                    svgAnimate_tajikistan();
                } else if (randomCountriesArray[i].shortName == 'macedonia') {
                    svgAnimate_macedonia();
                } else if (randomCountriesArray[i].shortName == 'turkey') {
                    svgAnimate_turkey();
                } else if (randomCountriesArray[i].shortName == 'turkmenistan') {
                    svgAnimate_turkmenistan();
                } else if (randomCountriesArray[i].shortName == 'ukraine') {
                    svgAnimate_ukraine();
                } else if (randomCountriesArray[i].shortName == 'uzbekistan') {
                    svgAnimate_uzbekistan();
                }
            }
        }
    }
    /* #endregion We are calling animation for country */
    /* #region Country SVG graph animation - Albania  */
    var animationInProgress_albania = false;
    function svgAnimate_albania() {
        if (animationInProgress_albania==false) {
            animationInProgress_albania = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-albania-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    var htmlElement_albania = document.getElementById("cid-infographic-trigger-albania");
                    var graphicObject_albania = document.getElementById("cid-infographic-albania-object");
                    var svgDocument_albania = graphicObject_albania.contentDocument;
                    /* #region Defining Elements - Grayed Lines */
                    var objects_allGrayedLines = [];
                    objects_allGrayedLines = svgDocument_albania.getElementById("group-grayed").querySelectorAll("path");
                    for (var i = 0; i < objects_allGrayedLines.length; i++) {
                        TweenMax.to(objects_allGrayedLines[i], 0.1, { opacity: 0, scaleX: 0.01, scaleY: 0.01, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements - Grayed Lines */
                    /* #region Defining Elements - Colored Lines */
                    var objects_allColoredLines = [];
                    objects_allColoredLines = svgDocument_albania.getElementById("group-colored").querySelectorAll("path");
                    for (var i = 0; i < objects_allColoredLines.length; i++) {
                        TweenMax.to(objects_allColoredLines[i], 0.1, { opacity: 0, scaleX: 0.01, scaleY: 0.01, transformOrigin: "50% 50%", });
                    }
                    /* #endregion Defining Elements - Colored Lines */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_allGrayedLines.length) {
                            TweenMax.to(htmlElement_albania, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_allGrayedLines });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_allGrayedLines() {
                        for (var i = 0; i < objects_allGrayedLines.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_allGrayedLines[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forColored });
                        }
                    }
                    var counter_forColored = 0;
                    function countdown_forColored() {
                        counter_forColored++;
                        if (counter_forColored == objects_allGrayedLines.length) {
                            for (var i = 0; i < objects_allColoredLines.length; i++) {
                                var animDelay = delayNumber * i;
                                TweenMax.to(objects_allColoredLines[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                            }
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_allColoredLines.length) {
                            animationInProgress_albania = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Albania  */
    /* #region Country SVG graph animation - Armenia  */
    var animationInProgress_armenia = false;
    function svgAnimate_armenia() {
        if (animationInProgress_armenia == false) {
            animationInProgress_armenia = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-armenia-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_armenia = document.getElementById("cid-infographic-trigger-armenia");
                    var graphicObject_armenia = document.getElementById("cid-infographic-armenia-object");
                    var svgDocument_armenia = graphicObject_armenia.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_armenia.getElementById("building"));
                    objects_all.push(svgDocument_armenia.getElementById("person"));
                    objects_all.push(svgDocument_armenia.getElementById("left-number-group"));
                    objects_all.push(svgDocument_armenia.getElementById("right-number-group"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_armenia, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_armenia = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }

        }
    }
    /* #endregion Country SVG graph animation - Armenia  */
    /* #region Country SVG graph animation - Azerbaijan  */
    var animationInProgress_azerbaijan = false;
    function svgAnimate_azerbaijan() {
        if (animationInProgress_azerbaijan==false) {
            animationInProgress_azerbaijan = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-azerbaijan-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    var htmlElement_azerbaijan = document.getElementById("cid-infographic-trigger-azerbaijan");
                    var graphicObject_azerbaijan = document.getElementById("cid-infographic-azerbaijan-object");
                    var svgDocument_azerbaijan = graphicObject_azerbaijan.contentDocument;
                    /* #region Defining Elements */
                    var objects_all = [];
                    objects_all.push(svgDocument_azerbaijan.getElementById("document-back"));
                    objects_all.push(svgDocument_azerbaijan.getElementById("document-front"));
                    objects_all.push(svgDocument_azerbaijan.getElementById("monkey"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_azerbaijan, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_azerbaijan = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Azerbaijan  */
    /* #region Country SVG graph animation - Belarus  */
    var animationInProgress_belarus = false;
    function svgAnimate_belarus() {
        if (animationInProgress_belarus == false) {
            animationInProgress_belarus = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-belarus-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_belarus = document.getElementById("cid-infographic-trigger-belarus");
                    var graphicObject_belarus = document.getElementById("cid-infographic-belarus-object");
                    var svgDocument_belarus = graphicObject_belarus.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_belarus.getElementById("left-group"));
                    objects_all.push(svgDocument_belarus.getElementById("right-group"));
                    objects_all.push(svgDocument_belarus.getElementById("calendar"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_belarus, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_belarus = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Belarus  */
    /* #region Country SVG graph animation - Bosnia  */
    var animationInProgress_bosnia = false;
    function svgAnimate_bosnia() {
        if (animationInProgress_bosnia == false) {
            animationInProgress_bosnia = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-bosnia-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_bosnia = document.getElementById("cid-infographic-trigger-bosnia");
                    var graphicObject_bosnia = document.getElementById("cid-infographic-bosnia-object");
                    var svgDocument_bosnia = graphicObject_bosnia.contentDocument;

                    var objects_all = [];
                    for (var i = 0; i < 9; i++) {
                        objects_all.push(svgDocument_bosnia.getElementById("person-" + (i + 1)));
                    }
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_bosnia, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_bosnia = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Bosnia  */
    /* #region Country SVG graph animation - Georgia  */
    var animationInProgress_georgia = false;
    function svgAnimate_georgia() {
        if (animationInProgress_georgia == false) {
            animationInProgress_georgia = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-georgia-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_georgia = document.getElementById("cid-infographic-trigger-georgia");
                    var graphicObject_georgia = document.getElementById("cid-infographic-georgia-object");
                    var svgDocument_georgia = graphicObject_georgia.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_georgia.getElementById("hammer"));
                    objects_all.push(svgDocument_georgia.getElementById("base"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_georgia, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_georgia = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Georgia  */
    /* #region Country SVG graph animation - Kazakhstan  */
    var animationInProgress_kazakhstan = false;
    function svgAnimate_kazakhstan() {
        if (animationInProgress_kazakhstan == false) {
            animationInProgress_kazakhstan = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-kazakhstan-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_kazakhstan = document.getElementById("cid-infographic-trigger-kazakhstan");
                    var graphicObject_kazakhstan = document.getElementById("cid-infographic-kazakhstan-object");
                    var svgDocument_kazakhstan = graphicObject_kazakhstan.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_kazakhstan.getElementById("building"));
                    objects_all.push(svgDocument_kazakhstan.getElementById("person-left"));
                    objects_all.push(svgDocument_kazakhstan.getElementById("person-right"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_kazakhstan, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_kazakhstan = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Kazakhstan  */
    /* #region Country SVG graph animation - Kosovo  */
    var animationInProgress_kosovo = false;
    function svgAnimate_kosovo() {
        if (animationInProgress_kosovo == false) {
            animationInProgress_kosovo = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-kosovo-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_kosovo = document.getElementById("cid-infographic-trigger-kosovo");
                    var graphicObject_kosovo = document.getElementById("cid-infographic-kosovo-object");
                    var svgDocument_kosovo = graphicObject_kosovo.contentDocument;

                    var objects_all = [];
                    for (var i = 0; i < 5; i++) {
                        objects_all.push(svgDocument_kosovo.getElementById("bullet-" + (i + 1)));
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_kosovo, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_kosovo = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Kosovo  */
    /* #region Country SVG graph animation - Kyrgyz  */
    var animationInProgress_kyrgyz = false;
    function svgAnimate_kyrgyz() {
        if (animationInProgress_kyrgyz == false) {
            animationInProgress_kyrgyz = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-kyrgyz-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_kyrgyz = document.getElementById("cid-infographic-trigger-kyrgyz");
                    var graphicObject_kyrgyz = document.getElementById("cid-infographic-kyrgyz-object");
                    var svgDocument_kyrgyz = graphicObject_kyrgyz.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_kyrgyz.getElementById("lybra"));
                    objects_all.push(svgDocument_kyrgyz.getElementById("hand"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_kyrgyz, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_kyrgyz = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }

        }
    }
    /* #endregion Country SVG graph animation - Kyrgyz  */
    /* #region Country SVG graph animation - Moldova  */
    var animationInProgress_moldova = false;
    function svgAnimate_moldova() {
        if (animationInProgress_moldova == false) {
            animationInProgress_moldova = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-moldova-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_moldova = document.getElementById("cid-infographic-trigger-moldova");
                    var graphicObject_moldova = document.getElementById("cid-infographic-moldova-object");
                    var svgDocument_moldova = graphicObject_moldova.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_moldova.getElementById("phone"));
                    objects_all.push(svgDocument_moldova.getElementById("sos"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_moldova, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_moldova = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }

        }
    }
    /* #endregion Country SVG graph animation - Moldova  */
    /* #region Country SVG graph animation - Montenegro  */
    var animationInProgress_montenegro = false;
    function svgAnimate_montenegro() {
        if (animationInProgress_montenegro == false) {
            animationInProgress_montenegro = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-montenegro-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_montenegro = document.getElementById("cid-infographic-trigger-montenegro");
                    var graphicObject_montenegro = document.getElementById("cid-infographic-montenegro-object");
                    var svgDocument_montenegro = graphicObject_montenegro.contentDocument;

                    var objects_all = [];
                    for (var i = 0; i < 16; i++) {
                        objects_all.push(svgDocument_montenegro.getElementById("petal-" + (i + 1)));
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_montenegro, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_montenegro = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Montenegro  */
    /* #region Country SVG graph animation - Serbia  */
    var animationInProgress_serbia = false;
    function svgAnimate_serbia() {
        if (animationInProgress_serbia == false) {
            animationInProgress_serbia = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-serbia-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_serbia = document.getElementById("cid-infographic-trigger-serbia");
                    var graphicObject_serbia = document.getElementById("cid-infographic-serbia-object");
                    var svgDocument_serbia = graphicObject_serbia.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_serbia.getElementById("document-back"));
                    objects_all.push(svgDocument_serbia.getElementById("document-front"));
                    objects_all.push(svgDocument_serbia.getElementById("checkmark"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_serbia, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_serbia = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Serbia  */
    /* #region Country SVG graph animation - Tajikistan  */
    var animationInProgress_tajikistan = false;
    function svgAnimate_tajikistan() {
        if (animationInProgress_tajikistan == false) {
            animationInProgress_tajikistan = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-tajikistan-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_tajikistan = document.getElementById("cid-infographic-trigger-tajikistan");
                    var graphicObject_tajikistan = document.getElementById("cid-infographic-tajikistan-object");
                    var svgDocument_tajikistan = graphicObject_tajikistan.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_tajikistan.getElementById("person-left"));
                    objects_all.push(svgDocument_tajikistan.getElementById("person-right"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_tajikistan, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_tajikistan = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Tajikistan  */
    /* #region Country SVG graph animation - Macedonia  */
    var animationInProgress_macedonia = false;
    function svgAnimate_macedonia() {
        if (animationInProgress_macedonia == false) {
            animationInProgress_macedonia = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-macedonia-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_macedonia = document.getElementById("cid-infographic-trigger-macedonia");
                    var graphicObject_macedonia = document.getElementById("cid-infographic-macedonia-object");
                    var svgDocument_macedonia = graphicObject_macedonia.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_macedonia.getElementById("base"));
                    objects_all.push(svgDocument_macedonia.getElementById("hammer"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_macedonia, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_macedonia = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Macedonia  */
    /* #region Country SVG graph animation - Turkey  */
    var animationInProgress_turkey = false;
    function svgAnimate_turkey() {
        if (animationInProgress_turkey == false) {
            animationInProgress_turkey = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-turkey-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_turkey = document.getElementById("cid-infographic-trigger-turkey");
                    var graphicObject_turkey = document.getElementById("cid-infographic-turkey-object");
                    var svgDocument_turkey = graphicObject_turkey.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_turkey.getElementById("group-left"));
                    objects_all.push(svgDocument_turkey.getElementById("group-right"));
                    objects_all.push(svgDocument_turkey.getElementById("person"));
                    objects_all.push(svgDocument_turkey.getElementById("document"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_turkey, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_turkey = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Turkey  */
    /* #region Country SVG graph animation - Turkmenistan  */
    var animationInProgress_turkmenistan = false;
    function svgAnimate_turkmenistan() {
        if (animationInProgress_turkmenistan == false) {
            animationInProgress_turkmenistan = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-turkmenistan-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_turkmenistan = document.getElementById("cid-infographic-trigger-turkmenistan");
                    var graphicObject_turkmenistan = document.getElementById("cid-infographic-turkmenistan-object");
                    var svgDocument_turkmenistan = graphicObject_turkmenistan.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_turkmenistan.getElementById("shield-outer"));
                    objects_all.push(svgDocument_turkmenistan.getElementById("shield-inner"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_turkmenistan, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_turkmenistan = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Turkmenistan  */
    /* #region Country SVG graph animation - Ukraine  */
    var animationInProgress_ukraine = false;
    function svgAnimate_ukraine() {
        if (animationInProgress_ukraine == false) {
            animationInProgress_ukraine = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-ukraine-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_ukraine = document.getElementById("cid-infographic-trigger-ukraine");
                    var graphicObject_ukraine = document.getElementById("cid-infographic-ukraine-object");
                    var svgDocument_ukraine = graphicObject_ukraine.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_ukraine.getElementById("building"));
                    objects_all.push(svgDocument_ukraine.getElementById("person"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_ukraine, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_ukraine = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Ukraine  */
    /* #region Country SVG graph animation - Uzbekistan  */
    var animationInProgress_uzbekistan = false;
    function svgAnimate_uzbekistan() {
        if (animationInProgress_uzbekistan == false) {
            animationInProgress_uzbekistan = true;
            var checkRenderedStatusInterval = setInterval(checkRenderedFunction, 200);
            var genericIntervalCounter = 0;
            function checkRenderedFunction() {
                genericIntervalCounter++;
                var genericObjectTag = document.getElementById("cid-infographic-uzbekistan-object");
                if (genericObjectTag != null) {
                    clearInterval(checkRenderedStatusInterval);
                    /* #region Defining Elements */
                    var htmlElement_uzbekistan = document.getElementById("cid-infographic-trigger-uzbekistan");
                    var graphicObject_uzbekistan = document.getElementById("cid-infographic-uzbekistan-object");
                    var svgDocument_uzbekistan = graphicObject_uzbekistan.contentDocument;

                    var objects_all = [];
                    objects_all.push(svgDocument_uzbekistan.getElementById("document-3"));
                    objects_all.push(svgDocument_uzbekistan.getElementById("document-2"));
                    objects_all.push(svgDocument_uzbekistan.getElementById("document-1"));
                    objects_all.push(svgDocument_uzbekistan.getElementById("magnify"));
                    for (var i = 0; i < objects_all.length; i++) {
                        TweenMax.to(objects_all[i], 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%", onComplete: countdown_initial });
                    }
                    /* #endregion Defining Elements */
                    /* #region INITAL function caller */
                    var counter_initial = 0;
                    function countdown_initial() {
                        counter_initial++;
                        if (counter_initial == objects_all.length) {
                            TweenMax.to(htmlElement_uzbekistan, 0.2, { opacity: 1, ease: Back.easeInOut.config(1.7), onComplete: animate_initial });
                        }
                    }
                    /* #endregion INITAL function caller */
                    /* #region MAIN ANIMATIONS */
                    var delayNumber = 0.02;
                    function animate_initial() {
                        for (var i = 0; i < objects_all.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(objects_all[i], 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forFinished });
                        }
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            animationInProgress_uzbekistan = false;
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
                        console.log('Interval fired too many times! SVG animation canceled!');
                    }
                }
            }
        }
    }
    /* #endregion Country SVG graph animation - Uzbekistan  */


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