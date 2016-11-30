jQuery(function ($) {

    /*=======================================================
         Authour URI: www.binarytheme.com
         License: Commons Attribution 3.0
 
         http://creativecommons.org/licenses/by/3.0/
 
         100% To use For Personal And Commercial Use.
         IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
    
     ========================================================  */

    /*==========================================
                GENERAL CUSTOM SCRIPTS
      ==========================================*/

    //  HEADER SLIDE /CAROUSEL SECTION FUNCTION 
    $(function () {
        $('#slide-head.carousel').carousel({
            interval: 2000,
            pause: false
        });
    });

    // LINKS SCROLLING FUNCTION 
    $('.navbar-nav > li').click(function (event) {
        event.preventDefault();
        var target = $(this).find('>a').prop('hash');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // PRETTYPHOTO FUNCTION 
    $("a.preview").prettyPhoto({
        social_tools: false
    });



    /*==========================================
                SCROLL REVEL SCRIPTS
      ==========================================*/


    window.scrollReveal = new scrollReveal();


    /*==========================================
            WRITE  YOUR  SCRIPTS BELOW
      ==========================================*/
    Offline.options = {
        checks: {
            //xhr: { url: '/Home/Index' } ,
            // Should we check the connection status immediatly on page load.
            checkOnLoad: true
        }
    };
    var run = function () {
        if (Offline.state === 'up')
            Offline.check();
    }
    setInterval(run, 1000);
});