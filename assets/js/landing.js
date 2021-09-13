$(document).ready(function (){

    $("#owl-carousel-gambling").owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            }
        }
    });
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
    $(".tokenomics-panel > .row").css('min-height',$(".tokenomics-distribution-label").height()-148);
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
/*
    $(window).scroll(function(){
        $( ".roadmap-step" ).each(function( index ) {
            if(
                $(this).offset().top <= $('#pushpin').offset().top
                &&
                $(this).offset().top + $(this).height() >= $('#pushpin').offset().top+199

            ){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });
    });
*/

    $('.tokenomics-distribution-item-bar > div').waypoint({
        handler: function() {
            $(this.element).css('height','70px');
        },
        offset: '70%'
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
        top:$(".roadmap").offset().top + 340 ,
        bottom: $(".roadmap-special-rectangle").offset().top+345,
        offset: 600
    });
    $(".our-team-tab").click(function(){
        $(".our-team-tab").removeClass('active');
        $(this).addClass('active');
        $(".our-team-tab").removeClass('show-1');
        $(".our-team-tab").removeClass('show-2');
        if($(this).attr('data-tab') == 1){
            $(".our-team-tab[data-tab='2']").addClass('show-1');
            $(".our-team-tab[data-tab='3']").addClass('show-2');
        }
        if($(this).attr('data-tab') == 2){
            $(".our-team-tab[data-tab='1']").addClass('show-1');
            $(".our-team-tab[data-tab='3']").addClass('show-2');
        }
        if($(this).attr('data-tab') == 3){
            $(".our-team-tab[data-tab='1']").addClass('show-1');
            $(".our-team-tab[data-tab='2']").addClass('show-2');
        }
    });

   if($("body").width() < 1000){
       $(".our-team-tab").removeClass('active');
       $('.our-team-tab').waypoint({
           handler: function() {
               $(this.element).addClass('active');
           },
           offset: '30%'
       });
   }
   $(".income-tabs li").click(function (){
       $(".income-tabs li").removeClass('active');
       $(this).addClass('active');
       $('.income-tabs-content .income-tab-content > div').removeClass('active');
       $('.income-tabs-content .income-tab-content > div:nth-child('+$(this).attr('data-tab')+')').addClass('active');
   });

   // setInterval(_ => {
   //     var scene = document.getElementById('section-primary-image');
   //     for(let e of scene) e.dataset.depth
   //     scene.append(scene.firstChild);
   //     var parallaxInstance = new Parallax(scene);
   // },2000);
});

function send_email(form) {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    //
    // var raw = JSON.stringify({
    //     "email": "hello 00444afds"
    // });
    //
    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };
    //
    // fetch("https://3o8apecaje.execute-api.eu-west-3.amazonaws.com/dev/waitinglist", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
    // return;
    const {email,submit} = form.elements;
    const url = 'https://3o8apecaje.execute-api.eu-west-3.amazonaws.com/dev/waitinglist';
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: 'POST',
        redirect: 'follow',
        headers,
        data: JSON.stringify({email:email.value}),
    };
    const on_success = () => {
        document.getElementById('join-whitelist-form').classList.add('d-none');
        document.getElementById('join-whitelist-success').classList.remove('d-none');
    }
    submit.disabled = true;
    fetch(url,options);
    fetch(url,options)
        .then(res => {
            if(res.status == 201) on_success();
        })
        .catch(err => {
            document.getElementById('join-whitelist-error').classList.remove('d-none');
        })
    ;
}
