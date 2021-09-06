$(document).ready(function (){
    $("#owl-carousel-sale-steps").owlCarousel({
        loop:false,
        margin:38,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    var scene = document.getElementById('section-primary-image');
    var parallaxInstance = new Parallax(scene);

    var opacity;
    $('.roadmap > .roadmap-special-months > div').each(function(i){
        var height = $(this).parent().height();
        $(this).css('top', 90 + (height / 15 * i));
        if(i < 8){
            opacity = 0.25 + 0.75 / 7 * i;
            $(this).css('opacity', opacity);
        }else{
            $(this).css('opacity', 1 - 0.75 / 7 *(i - 7));
        }
    });
    $(".tokenomics-panel").height($(".tokenomics-distribution-label").height()-148);
    $(".roadmap-special-logo-container").width($(".roadmap").width());

    $(window).scroll(function(){
        $( ".roadmap-step" ).each(function( index ) {

            if(
                $(this).offset().top <= $('#pushpin').offset().top +240
                &&
                $(this).offset().top + $(this).height() >= $('#pushpin').offset().top+199

            ){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });
    });
    $('.tokenomics-distribution-item-bar > div').waypoint({
        handler: function() {
            $(this.element).css('height','70px');

        },
        offset: 'right-in-view'
    });
    $('#function-token-container-back-image').waypoint({
        handler: function() {
            var sceneFunctionToken = document.getElementById('function-token-container-back-image');
            var parallaxInstanceFunctionToken = new Parallax(sceneFunctionToken);
            $(this.element).css("opacity","1");
            $(this.element).addClass("animated zoomIn");
        },
        offset: function() {
            return  $(this.element).offset().top - $(this.element).height() / 4
        }
    });
    $('#function-token-container-red').waypoint({
        handler: function() {
            $(this.element).children('circle').addClass('animate-stroke');

            $('.function-token-container-label').delay(800).queue(function (){
                $('.function-token-container-label').css("opacity","1");
                $('.function-token-container-label').addClass("animated fadeIn");
            });
            $(this.element).children('path').delay(500).queue(function(){
                $(this).addClass('animate-stroke');
            });
        },
        offset: function() {
            return  $(this.element).offset().top - $(this.element).height() / 4
        }
    });


    $('#svg-burn-graph').waypoint({
        handler: function() {
            $(this.element).children('.base-animated-stroke').addClass('base-animate-stroke');

        },
        offset: 'bottom-in-view'
    });
    $('#burn-value-svg').waypoint({
        handler: function() {
            $(this.element).children('.base-animated-stroke').addClass('base-animate-stroke');

        },
        offset: 'bottom-in-view'
    });
    var sceneBurn = document.getElementById('burn-scene');
    var parallaxInstanceBurn = new Parallax(sceneBurn);
    var sceneDividends = document.getElementById('dividends-container-scene');
    var parallaxInstanceDividends = new Parallax(sceneDividends);
    var sceneReserve = document.getElementById('reserve-fond-scene');
    var parallaxInstanceDividends = new Parallax(sceneReserve);

    var sceneFunctionToken = document.getElementById('function-token-scene');
    var parallaxFunctionToken= new Parallax(sceneFunctionToken);
    var sceneistribution = document.getElementById('distribution-scene');
    var parallaxistribution= new Parallax(sceneistribution);
    $('#pushpin').pushpin({
        top: $('#section-roadmap').offset().top + $(".roadmap").offset().top - $('#section-roadmap').offset().top,
        bottom: $(".roadmap-special-rectangle").offset().top + 80,
        offset: $(window).height() / 1.5
    });
});