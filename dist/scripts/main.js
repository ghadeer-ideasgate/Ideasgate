"use strict";!function(o,t,e,i){o("#js-grid-mosaic-projects").cubeportfolio({filters:"#js-filters-mosaic-projects1,#js-filters-mosaic-projects2",loadMoreAction:"click",layoutMode:"mosaic",defaultFilter:"*",animationType:"quicksand",gapHorizontal:35,gapVertical:30,gridAdjustment:"responsive",mediaQueries:[{width:1500,cols:5},{width:1100,cols:4},{width:800,cols:3},{width:480,cols:2},{width:320,cols:1}],caption:"zoom",displayType:"sequentially",displayTypeSpeed:80,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'}),o(e).ready(function(){setTimeout(function(){o("body").addClass("loaded")},500),o(".owl-carousel").owlCarousel()})}(jQuery,window,document),$("#clientsCarousel").carousel({interval:5e3});