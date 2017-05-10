//used scripts:
//- jquery (for DOM manipulation)
//- ScrollMagic (for detecting scroll events)
//- TweenMax (GreenSock GSAP) (for animation)
//- SwiperSlider (idangero) (for SVG Facts&Figures)
var undpWorldMap = null;
//
$('.popover').not(this).hide(); //Hi
function externalCompileCaller() {
    $('[data-toggle="popover"]').popover(
        {
            html: true,
            viewport: '#cid-binded-bac-text',
            trigger: 'focus',
            placement: function (context, source) {
                var position = $(source).position();
                var content_width = 680;  //Can be found from a JS function for more dynamic output
                var content_height = 110;  //Can be found from a JS function for more dynamic output

                if (position.left > content_width) {
                    return "left";
                }

                if (position.left < content_width) {
                    return "right";
                }

                if (position.top < content_height) {
                    return "bottom";
                }

                return "top";
            }
        }
    );
    $('[data-toggle="popover-fa"]').popover(
        {
            html: true,
            viewport: '#cid-binded-okw-text',
            trigger: 'focus',
            placement: function (context, source) {
                var position = $(source).position();
                var content_width = 680;  //Can be found from a JS function for more dynamic output
                var content_height = 110;  //Can be found from a JS function for more dynamic output

                if (position.left > content_width) {
                    return "left";
                }

                if (position.left < content_width) {
                    return "right";
                }

                if (position.top < content_height) {
                    return "bottom";
                }

                return "top";
            }
        }
    );
    $('[data-toggle="popover-fa-left"]').popover(
        {
            html: true,
            viewport: '#cid-binded-bac-text',
            trigger: 'click',
            placement: function (context, source) {
                var position = $(source).position();
                var content_width = 680;  //Can be found from a JS function for more dynamic output
                var content_height = 110;  //Can be found from a JS function for more dynamic output

                return "left";
            }
        }
    );
    $('[data-toggle="popover-fa-left-wide"]').popover(
        {
            html: true,
            viewport: '#cid-binded-bac-text',
            trigger: 'click',
            template: '<div class="popover c-wide-popup"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            placement: function (context, source) {
                var position = $(source).position();
                var content_width = 680;  //Can be found from a JS function for more dynamic output
                var content_height = 110;  //Can be found from a JS function for more dynamic output

                return "left";
            }
        }
    );
}

var generic_scrollMagicScene_01 = null;
var generic_scrollMagicScene_02 = null;
var generic_scrollMagicScene_03 = null;
function externalPicAnimation(pictureId) {
    var elementWithIdToAddClass = null;
    if (pictureId == '#piczoom-trigger-01') {
        elementWithIdToAddClass = '#cid-img-to-animate-01';
        generic_scrollMagicScene_01 = new ScrollMagic.Scene(
            {
                triggerElement: pictureId, duration: 300,
                triggerHook: "onCenter",
            }
        ).setClassToggle(
            elementWithIdToAddClass, "c-start-anim" // add class toggle
        ).addTo(
            scrollMagicPicZoomController
        ).on("start", function (e) {
            //enable: true it will always trigger event; enable: false animation will fire only once
            e.currentTarget.enabled(false);
            console.log('fired');
        }
        );
    } else if (pictureId == '#piczoom-trigger-02') {
        elementWithIdToAddClass = '#cid-img-to-animate-02';
        generic_scrollMagicScene_02 = new ScrollMagic.Scene(
            {
                triggerElement: pictureId, duration: 300,
                triggerHook: "onCenter",
            }
        ).setClassToggle(
            elementWithIdToAddClass, "c-start-anim" // add class toggle
        ).addTo(
            scrollMagicPicZoomController
        ).on("start", function (e) {
            //enable: true it will always trigger event; enable: false animation will fire only once
            e.currentTarget.enabled(false);
        }
        );
    } else if (pictureId == '#piczoom-trigger-03') {
        elementWithIdToAddClass = '#cid-img-to-animate-03';
        generic_scrollMagicScene_03 = new ScrollMagic.Scene(
            {
                triggerElement: pictureId, duration: 300,
                triggerHook: "onCenter",
            }
        ).setClassToggle(
            elementWithIdToAddClass, "c-start-anim" // add class toggle
        ).addTo(
            scrollMagicPicZoomController
        ).on("start", function (e) {
            //enable: true it will always trigger event; enable: false animation will fire only once
            e.currentTarget.enabled(false);
            console.log('fired');
        }
        );
    }
}
function externalDestroyAnimScenes() {
    if (generic_scrollMagicScene_02 != null && generic_scrollMagicScene_03 != null) {
        generic_scrollMagicScene_02 = generic_scrollMagicScene_02.destroy(true);
        generic_scrollMagicScene_03 = generic_scrollMagicScene_03.destroy(true);
    }
}

/* #region Animate Image Zoom on About Our Work section */
var scrollMagicPicZoomController = new ScrollMagic.Controller();
var scrollMagicScenesArrayPicZoom = [];
function setImagesToZoom() {
    for (var i = 0; i < 3; i++) {
        // create the scrollmagic scene here.
        var elementClass = "#piczoom-trigger-00";
        var generic_scrollMagicScene = new ScrollMagic.Scene(
            {
                triggerElement: elementClass, duration: 300,
                triggerHook: "onCenter",
            }
        ).setClassToggle(
            elementClass, "c-have-animation" // add class toggle
        ).addTo(
            scrollMagicPicZoomController
        ).on("start", function (e) {
            //enable: true it will always trigger event; enable: false animation will fire only once
            e.currentTarget.enabled(false);
            console.log('fired');
            }
        );
        scrollMagicScenesArrayPicZoom.push(generic_scrollMagicScene);
        /* #endregion Setting up ScrollMagicScenes */
    }
}
/* #endregion Animate Image Zoom on About Our Work section */

/* #region Swiper Slider variables */
var mySwiper = null;
/* #endregion Swiper Slider variables */

/* #region Setup Browser resize event */
var browserCurrentWidth = $(window).width();
$(window).on('resize', function () {
    //someFun();  //call your function.
    browserCurrentWidth = $(window).width();
    console.log('browserCurrentWidth: ' + browserCurrentWidth);
});
/* #endregion Setup Browser resize event */

$(document).ready(function () {
    /* #region Setup Sticky Navigation hiding on scroll */
    // Hide Header on on scroll down
    //var didScroll;
    //var lastScrollTop = 0;
    //var delta = 5;
    //var navbarHeight = $('#cid-header-nav').outerHeight();

    //$(window).scroll(function (event) {
    //    didScroll = true;
    //});

    //setInterval(function () {
    //    if (didScroll) {
    //        hasScrolled();
    //        didScroll = false;
    //    }
    //}, 250);

    //function hasScrolled() {
    //    var st = $(this).scrollTop();

    //    // Make sure they scroll more than delta
    //    if (Math.abs(lastScrollTop - st) <= delta)
    //        return;

    //    // If they scrolled down and are past the navbar, add class .nav-up.
    //    // This is necessary so you never see what is "behind" the navbar.
    //    if (st > lastScrollTop && st > navbarHeight) {
    //        // Scroll Down
    //        $('#cid-header-nav').removeClass('nav-down').addClass('nav-up');
    //    } else {
    //        // Scroll Up
    //        if (st + $(window).height() < $(document).height()) {
    //            $('#cid-header-nav').removeClass('nav-up').addClass('nav-down');
    //        }
    //    }

    //    lastScrollTop = st;
    //}
    /* #endregion Setup Sticky Navigation hiding on scroll */

    /* #region Swipebox lightbox */
    $('.swipebox').swipebox();
    /* #endregion Swipebox lightbox */
    /* #region AMCharts Map */
    undpWorldMap = AmCharts.makeChart("mapdiv", {
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
              { "id": "AL", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Albania", "showAsSelected": false },
              { "id": "AM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Armenia", "showAsSelected": false },
              { "id": "AZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Azerbaijan", "showAsSelected": false },
              { "id": "BY", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Belarus", "showAsSelected": false },
              { "id": "BA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Bosnia and Herzegovina", "showAsSelected": false },
              { "id": "MK", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "The former Yugoslav Republic of Macedonia", "showAsSelected": false },
              { "id": "GE", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Georgia", "showAsSelected": false },
              { "id": "KZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kazakhstan", "showAsSelected": false },
              { "id": "XK", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kosovo<sup>1</sup>", "showAsSelected": false },
              { "id": "KG", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Kyrgyz Republic", "showAsSelected": false },
              { "id": "MD", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Moldova", "showAsSelected": false },
              { "id": "ME", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Montenegro", "showAsSelected": false },
              { "id": "RS", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Serbia", "showAsSelected": false },
              { "id": "TJ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Tajikistan", "showAsSelected": false },
              { "id": "TR", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Turkey", "showAsSelected": false },
              { "id": "TM", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Turkmenistan", "showAsSelected": false },
              { "id": "UA", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Ukraine", "showAsSelected": false },
              { "id": "UZ", "color": "#f8b58e", "outlineColor": "#f8b58e", "rollOverColor": "#dea17e", "rollOverOutlineColor": "#dea17e", "title": "Uzbekistan", "showAsSelected": false }
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
                    for (var i = 0; i < undpWorldMap.dataProvider.areas.length; i++) {
                        if (undpWorldMap.dataProvider.areas[i].id == event.mapObject.id) {
                            angular.element(document.getElementById('mainContainerId')).scope().countryClickedFunc('fromMap', i);
                        }
                    }
                    //Resolution depending function
                    //if ($(window).width() > 992) {
                    //    console.log("I'm calling function above 992 = large");
                    //    //$('div.c-country-title.c-show-when-lg').show();
                    //}
                    //else {
                    //    console.log("I'm calling function below 992 = small");
                    //    //$('div.c-country-title.c-show-when-xs').show();
                    //}
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
    /* #endregion AMCharts Map */
    //-------------------------------------------------------//
    /* #region Setting up Array that will contain 6 radnom SVG elements */
    var infographicsGroups = [
        {
            countries: [
                {
                    shortName: 'albania',
                    fullName: 'Albania',
                    functionName: 'svgAnimate_albania',
                    backgroundColor: '#F6F6F6',
                    titleColor: '#818285'
                },
                {
                    shortName: 'armenia',
                    fullName: 'Armenia',
                    functionName: 'svgAnimate_armenia',
                    backgroundColor: '#F6F6F6',
                    titleColor: '#818285'
                },
                {
                    shortName: 'azerbaijan',
                    fullName: 'Azerbaijan',
                    functionName: 'svgAnimate_azerbaijan',
                    backgroundColor: '#F6F6F6',
                    titleColor: '#818285'
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
                    functionName: 'svgAnimate_belarus',
                    backgroundColor: '#eceded',
                    titleColor: '#1073a8'
                },
                {
                    shortName: 'bosnia',
                    fullName: 'Bosnia',
                    functionName: 'svgAnimate_bosnia',
                    backgroundColor: '#eceded',
                    titleColor: '#1073a8'
                },
                {
                    shortName: 'georgia',
                    fullName: 'Georgia',
                    functionName: 'svgAnimate_georgia',
                    backgroundColor: '#eceded',
                    titleColor: '#1073a8'
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
                    functionName: 'svgAnimate_kazakhstan',
                    backgroundColor: '#fef1e1',
                    titleColor: '#f48466'
                },
                {
                    shortName: 'kosovo',
                    fullName: 'Kosovo',
                    functionName: 'svgAnimate_kosovo',
                    backgroundColor: '#fef1e1',
                    titleColor: '#f48466'
                },
                {
                    shortName: 'kyrgyz',
                    fullName: 'Kyrgyz',
                    functionName: 'svgAnimate_kyrgyz',
                    backgroundColor: '#fef1e1',
                    titleColor: '#f48466'
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
                    functionName: 'svgAnimate_moldova',
                    backgroundColor: '#fabea7',
                    titleColor: '#ef4331'
                },
                {
                    shortName: 'montenegro',
                    fullName: 'Montenegro',
                    functionName: 'svgAnimate_montenegro',
                    backgroundColor: '#fabea7',
                    titleColor: '#ef4331'
                },
                {
                    shortName: 'serbia',
                    fullName: 'Serbia',
                    functionName: 'svgAnimate_serbia',
                    backgroundColor: '#fabea7',
                    titleColor: '#ef4331'
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
                    functionName: 'svgAnimate_tajikistan',
                    backgroundColor: '#B7C7DF',
                    titleColor: '#1073a8'
                },
                {
                    shortName: 'macedonia',
                    fullName: 'Macedonia',
                    functionName: 'svgAnimate_macedonia',
                    backgroundColor: '#B7C7DF',
                    titleColor: '#1073a8'
                },
                {
                    shortName: 'turkey',
                    fullName: 'Turkey',
                    functionName: 'svgAnimate_turkey',
                    backgroundColor: '#B7C7DF',
                    titleColor: '#1073a8'
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
                    functionName: 'svgAnimate_turkmenistan',
                    backgroundColor: '#383839',
                    titleColor: '#a7a9ac'
                },
                {
                    shortName: 'ukraine',
                    fullName: 'Ukraine',
                    functionName: 'svgAnimate_ukraine',
                    backgroundColor: '#383839',
                    titleColor: '#a7a9ac'
                },
                {
                    shortName: 'uzbekistan',
                    fullName: 'Uzbekistan',
                    functionName: 'svgAnimate_uzbekistan',
                    backgroundColor: '#383839',
                    titleColor: '#a7a9ac'
                }
            ],
            backgroundColor: '#383839',
            titleColor: '#a7a9ac'
        }
    ];
    /* #region NEW SLIDES SVG CODE */
    /* #region Swiper Slider initialize */
    //initialize swiper when document ready  
    mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        nextButton: '.c-swiper-button-next',
        prevButton: '.c-swiper-button-prev',
        watchSlidesVisibility: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10
            }
        },
        //events
        onSlideChangeEnd: function () {
            firstLeftVisibleSvgIndex = mySwiper.activeIndex;
            $("#svg-graph-master-wrap-slider").css("background-color", allSvgGraphsArray[firstLeftVisibleSvgIndex].backgroundColor);
            $("#svg-graph-master-wrap-slider .c-section-title").css("color", allSvgGraphsArray[firstLeftVisibleSvgIndex].titleColor);
            //animate only svg graphs that are currently visible on browser
            if (browserCurrentWidth > 1 && browserCurrentWidth < 768) {
                setTimeout(
                    startCountryAnimationFromSlider(firstLeftVisibleSvgIndex),
                500);
            } else if (browserCurrentWidth >= 768 && browserCurrentWidth < 1024) {
                setTimeout(
                    startCountryAnimationFromSlider(firstLeftVisibleSvgIndex),
                500);
                setTimeout(
                    startCountryAnimationFromSlider(firstLeftVisibleSvgIndex + 1 ),
                600);
            } else if (browserCurrentWidth >= 1024) {
                setTimeout(
                    startCountryAnimationFromSlider(firstLeftVisibleSvgIndex),
                500);
                setTimeout(
                    startCountryAnimationFromSlider(firstLeftVisibleSvgIndex + 1),
                600);
                setTimeout(
                    startCountryAnimationFromSlider(firstLeftVisibleSvgIndex + 2),
                700);
            }
        }
    })
    /* #region Call SVG animation based on currently visible slide index */
    function startCountryAnimationFromSlider(eventCountryIndex) {
        for (var i = 0; i < allSvgGraphsArray.length; i++) {
            if (eventCountryIndex == i) {
                if (allSvgGraphsArray[i].shortName == 'albania') {
                    svgAnimate_albania();
                } else if (allSvgGraphsArray[i].shortName == 'armenia') {
                    svgAnimate_armenia();
                } else if (allSvgGraphsArray[i].shortName == 'azerbaijan') {
                    svgAnimate_azerbaijan();
                } else if (allSvgGraphsArray[i].shortName == 'belarus') {
                    svgAnimate_belarus();
                } else if (allSvgGraphsArray[i].shortName == 'bosnia') {
                    svgAnimate_bosnia();
                } else if (allSvgGraphsArray[i].shortName == 'georgia') {
                    svgAnimate_georgia();
                } else if (allSvgGraphsArray[i].shortName == 'kazakhstan') {
                    svgAnimate_kazakhstan();
                } else if (allSvgGraphsArray[i].shortName == 'kosovo') {
                    svgAnimate_kosovo();
                } else if (allSvgGraphsArray[i].shortName == 'kyrgyz') {
                    svgAnimate_kyrgyz();
                } else if (allSvgGraphsArray[i].shortName == 'moldova') {
                    svgAnimate_moldova();
                } else if (allSvgGraphsArray[i].shortName == 'montenegro') {
                    svgAnimate_montenegro();
                } else if (allSvgGraphsArray[i].shortName == 'serbia') {
                    svgAnimate_serbia();
                } else if (allSvgGraphsArray[i].shortName == 'tajikistan') {
                    svgAnimate_tajikistan();
                } else if (allSvgGraphsArray[i].shortName == 'macedonia') {
                    svgAnimate_macedonia();
                } else if (allSvgGraphsArray[i].shortName == 'turkey') {
                    svgAnimate_turkey();
                } else if (allSvgGraphsArray[i].shortName == 'turkmenistan') {
                    svgAnimate_turkmenistan();
                } else if (allSvgGraphsArray[i].shortName == 'ukraine') {
                    svgAnimate_ukraine();
                } else if (allSvgGraphsArray[i].shortName == 'uzbekistan') {
                    svgAnimate_uzbekistan();
                }
            }
        }
    }
    /* #endregion Call SVG animation based on currently visible slide index */

    /* #endregion Swiper Slider initialize */
    var firstLeftVisibleSvgIndex = 0;
    var allSvgGraphsArray = [];
    var startingOpacityForSvg = 0.3;
    var scrollMagicInitControllerForSvg = new ScrollMagic.Controller();
    var allScrollMagicScenesArrayForSvg = [];
    function setupAllSvgSlides() {
        for (var i = 0; i < infographicsGroups.length; i++) {
            for (var j = 0; j < infographicsGroups[i].countries.length; j++) {
                allSvgGraphsArray.push(infographicsGroups[i].countries[j]);
            }
        }
        $("#svg-graph-master-wrap-slider").css("background-color", allSvgGraphsArray[firstLeftVisibleSvgIndex].backgroundColor);
        $("#svg-graph-master-wrap-slider .c-section-title").css("color", allSvgGraphsArray[firstLeftVisibleSvgIndex].titleColor);
        //
        console.log('allSvgGraphsArray length: ' + allSvgGraphsArray.length);
        //insert svg graphs into Swiper Slider (.swiper-wrapper)
        for (var k = 0; k < allSvgGraphsArray.length; k++) {
            //change id of div
            $("#trigger-country-container-" + (k + 1) + "-svg").prop('id', 'cid-infographic-trigger-' + allSvgGraphsArray[k].shortName);
            //add <object> tag
            $("#cid-infographic-trigger-" + allSvgGraphsArray[k].shortName).append('<object type="image/svg+xml" data="Content/images/infographic-' + allSvgGraphsArray[k].shortName + '.svg" class="c-svg-object c-svg-faf" id="cid-infographic-' + allSvgGraphsArray[k].shortName + '-object">Infographic Legal</object>');
            //add opacity value
            $("#cid-infographic-trigger-" + allSvgGraphsArray[k].shortName).css("opacity", startingOpacityForSvg);
            /* #region Setting up ScrollMagicScenes */
            // create the scrollmagic scene here.
            // 'k < 3' is used because we don't want to place scroll trigger for all svg graphics, but only for first 3
            // if we want to setup scroll animation trigger for all svg's we would remove 'if' statement
            if (k < 3){
                var generic_scrollMagicScene = new ScrollMagic.Scene(
                    {
                    triggerElement: "#cid-infographic-trigger-" + allSvgGraphsArray[k].shortName, duration: 100,
                    triggerHook: "onCenter",
                }
                ).addTo(
                    scrollMagicInitControllerForSvg
                ).on("start", function (e) {
                    if (e.currentTarget.countryIndex >= firstLeftVisibleSvgIndex && e.currentTarget.countryIndex <= (firstLeftVisibleSvgIndex + 2)) {
                        startCountryAnimation(e);
                }
                    //enable: true it will always trigger event; enable: false animation will fire only once
                    e.currentTarget.enabled(false);
                }
                );
                allScrollMagicScenesArrayForSvg.push(generic_scrollMagicScene);
                allScrollMagicScenesArrayForSvg[k].countryIndex = k;
                allScrollMagicScenesArrayForSvg[k].countryShortName = allSvgGraphsArray[k].shortName;
            }
            /* #endregion Setting up ScrollMagicScenes */
        }
    }
    setupAllSvgSlides();
    /* #endregion NEW SLIDES SVG CODE */
    /* #region We are calling animation for country */
    function startCountryAnimation(event) {
        var eventCountryIndex = event.currentTarget.countryIndex;        
        //console.log('keyss: ' + Object.keys(event.currentTarget));
        for (var i = 0; i < allSvgGraphsArray.length; i++) {
            if (eventCountryIndex == i) {
                if (allSvgGraphsArray[i].shortName == 'albania') {
                    svgAnimate_albania();
                } else if (allSvgGraphsArray[i].shortName == 'armenia') {
                    svgAnimate_armenia();
                } else if (allSvgGraphsArray[i].shortName == 'azerbaijan') {
                    svgAnimate_azerbaijan();
                } else if (allSvgGraphsArray[i].shortName == 'belarus') {
                    svgAnimate_belarus();
                } else if (allSvgGraphsArray[i].shortName == 'bosnia') {
                    svgAnimate_bosnia();
                } else if (allSvgGraphsArray[i].shortName == 'georgia') {
                    svgAnimate_georgia();
                } else if (allSvgGraphsArray[i].shortName == 'kazakhstan') {
                    svgAnimate_kazakhstan();
                } else if (allSvgGraphsArray[i].shortName == 'kosovo') {
                    svgAnimate_kosovo();
                } else if (allSvgGraphsArray[i].shortName == 'kyrgyz') {
                    svgAnimate_kyrgyz();
                } else if (allSvgGraphsArray[i].shortName == 'moldova') {
                    svgAnimate_moldova();
                } else if (allSvgGraphsArray[i].shortName == 'montenegro') {
                    svgAnimate_montenegro();
                } else if (allSvgGraphsArray[i].shortName == 'serbia') {
                    svgAnimate_serbia();
                } else if (allSvgGraphsArray[i].shortName == 'tajikistan') {
                    svgAnimate_tajikistan();
                } else if (allSvgGraphsArray[i].shortName == 'macedonia') {
                    svgAnimate_macedonia();
                } else if (allSvgGraphsArray[i].shortName == 'turkey') {
                    svgAnimate_turkey();
                } else if (allSvgGraphsArray[i].shortName == 'turkmenistan') {
                    svgAnimate_turkmenistan();
                } else if (allSvgGraphsArray[i].shortName == 'ukraine') {
                    svgAnimate_ukraine();
                } else if (allSvgGraphsArray[i].shortName == 'uzbekistan') {
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
                    objects_all.push(svgDocument_armenia.getElementById("arrow-up"));
                    objects_all.push(svgDocument_armenia.getElementById("arrow-down"));
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
                            var elementToColor = svgDocument_belarus.getElementById("calendar");
                            var squareToColor = elementToColor.querySelector('.colored-square');
                            var animDelay = delayNumber * i;
                            TweenMax.to(squareToColor, 0.5, { fill: "#0074A7", ease: Back.easeOut.config(1.7), delay: animDelay });
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
                            for (var i = 1; i < 4; i++) {
                                var animDelay = delayNumber * i;
                                var elementToColor = svgDocument_bosnia.getElementById("person-" + (i + 3));
                                var personHead = elementToColor.querySelector('.person-head');
                                var personBody = elementToColor.querySelector('.person-body');
                                TweenMax.to(personHead, 0.5, { fill: "#0074A8", ease: Back.easeOut.config(1.7), delay: animDelay });
                                TweenMax.to(personBody, 0.5, { fill: "#0074A8", ease: Back.easeOut.config(1.7), delay: animDelay });
                            }
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
                    //
                    var elementsToColor = [];
                    var peopleGroup = svgDocument_kazakhstan.getElementById("outer-people");
                    elementsToColor = peopleGroup.querySelectorAll('path');
                    for (var i = 0; i < elementsToColor.length; i++) {
                        TweenMax.to(elementsToColor[i], 0.15, { fill: "#FCD0A6" });
                    }
                    //
                    var objects_all = [];
                    objects_all.push(svgDocument_kazakhstan.getElementById("inner-circle"));
                    objects_all.push(svgDocument_kazakhstan.getElementById("outer-people"));
                    objects_all.push(svgDocument_kazakhstan.getElementById("inner-boxes"));
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
                            animatePeopleColor();
                        }
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                    /* #region Animate color of People */
                    function animatePeopleColor() {
                        for (var i = 0; i < elementsToColor.length; i++) {
                            var animDelay = delayNumber * i;
                            TweenMax.to(elementsToColor[i], 0.75, { fill: "#F4777C", ease: Back.easeOut.config(1.7), delay: animDelay, onComplete: countdown_forPeopleFinished });
                        }
                    }
                    var counter_finishedPeople = 0;
                    function countdown_forPeopleFinished() {
                        counter_finishedPeople++;
                        if (counter_finishedPeople == elementsToColor.length) {
                            animationInProgress_kazakhstan = false;
                        }
                    }
                    /* #region Animate color of People */
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

                    var rigleObject = svgDocument_kosovo.getElementById("rifle");
                    TweenMax.to(rigleObject, 0.15, { fill: "#FDD1A7" });
                    TweenMax.to(rigleObject, 0.1, { opacity: 0, scaleX: 0.1, scaleY: 0.1, transformOrigin: "50% 50%" });
                    //
                    var objects_all = [];
                    //objects_all.push(svgDocument_kosovo.getElementById("rifle"));
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
                        TweenMax.to(rigleObject, 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: Back.easeOut.config(1.7) });
                    }
                    /* #endregion MAIN ANIMATIONS */
                    /* #region ALL ANIMATIONS FINISHED */
                    var counter_finished = 0;
                    function countdown_forFinished() {
                        counter_finished++;
                        if (counter_finished == objects_all.length) {
                            //
                            for (var i = 1; i < 5; i++){
                                var elementToColor = svgDocument_kosovo.getElementById("bullet-"+i).querySelector('.element-to-color');
                                var animDelay = delayNumber * i;
                                TweenMax.to(elementToColor, 1, { fill: "#F48466", ease: Back.easeOut.config(1.7), delay: animDelay });
                            }
                            TweenMax.to(rigleObject, 1, { fill: "#F48466", ease: Back.easeOut.config(1.7) });
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

                    var elementsToColor = [];
                    var coloringGroup = svgDocument_kyrgyz.getElementById("lybra");
                    elementsToColor = coloringGroup.querySelectorAll('path');
                    for (var i = 0; i < elementsToColor.length; i++) {
                        TweenMax.to(elementsToColor[i], 0.15, { fill: "#FDD1A7" });
                    }
                    //FCD0A6
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
                            colorElements();
                        }
                    }
                    function colorElements() {
                        for (var i = 0; i < elementsToColor.length; i++) {
                            var animDelay = delayNumber * i;
                            //TweenMax.to(elementsToColor[i], 0.15, { fill: "#FDD1A7" });
                            TweenMax.to(elementsToColor[i], 0.6, { fill: "#F48466", ease: Back.easeOut.config(1.7) });
                        }
                        animationInProgress_kyrgyz = false;
                    }
                    /* #endregion ALL ANIMATIONS FINISHED */
                } else {
                    if (genericIntervalCounter > 99) {
                        clearInterval(checkRenderedStatusInterval);
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
                    for (var i = 0; i < 16; i++) {
                        objects_all.push(svgDocument_moldova.getElementById("petal-" + (i + 1)));
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
                            for (var i = 3; i < 14; i++) {
                                var elementToColor = svgDocument_moldova.getElementById("petal-" + i).querySelector('path');
                                var animDelay = delayNumber * i;
                                TweenMax.to(elementToColor, 1, { fill: "#F1F1F2", ease: Back.easeOut.config(1.7), delay: animDelay });
                            }
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
                    objects_all.push(svgDocument_montenegro.getElementById("phone"));
                    objects_all.push(svgDocument_montenegro.getElementById("sos"));
                    for (var i = 0; i < objects_all.length; i++) {
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
                    objects_all.push(svgDocument_serbia.getElementById("roof"));
                    objects_all.push(svgDocument_serbia.getElementById("base"));
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
                    objects_all.push(svgDocument_tajikistan.getElementById("base"));
                    objects_all.push(svgDocument_tajikistan.getElementById("hammer"));
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
                    objects_all.push(svgDocument_macedonia.getElementById("person-left"));
                    objects_all.push(svgDocument_macedonia.getElementById("person-right"));
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
                    objects_all.push(svgDocument_turkmenistan.getElementById("building"));
                    objects_all.push(svgDocument_turkmenistan.getElementById("person"));
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
                    objects_all.push(svgDocument_ukraine.getElementById("shield-outer"));
                    objects_all.push(svgDocument_ukraine.getElementById("shield-inner"));
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

    /* #endregion Generic Animation for all SVG's */
});