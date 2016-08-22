$(document).ready(function () {




    //Init functions
    loader();
    menuToggle();
    scroll();
    backToTop();
    scrollToAbout();
    homeText();
    customModal();
    caption();
    waypoints();
    showToolTip();



    //Page loader
    function loader() {
        $(window).bind("load", function() {
            $('#wrapper').addClass('loaded');
        });
    }

    //Menu toggle function
    function menuToggle() {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("active");

        });
    }

    //Show tooltip
    function showToolTip() {
        $('[data-toggle="tooltip"]').tooltip();
    }


    //Scroll function
    function scroll() {
        $('#sidebar').activescroll({
            active: "highlight"
        });
    }

    //Scroll to about page
    function scrollToAbout() {
        $("#scrollToAbout").click(function (){
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        });
    }

    //Back to Top function
    function backToTop() {
        var offset = 300,
            offset_opacity = 1200,
            scroll_top_duration = 700,
            $back_to_top = $('.cd-top');

        $(window).scroll(function () {
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });

        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                }, scroll_top_duration
            );
        });
    }

    //Home text
    function homeText() {
        $("#home_text").typed({
            strings: ["Professional Graphic Designer.", "Crazy Chocolate Lover.", "Pretty Awesome Writer."],
            typeSpeed: 50,
            backDelay: 500,
            loop: true,
            loopCount: false,
        });
    }

    //Caption
    function caption() {
        $('.thumbnail').hover(
            function(){
                $(this).find('.caption').slideDown(250); //.fadeIn(250)
            },
            function(){
                $(this).find('.caption').slideUp(250); //.fadeOut(205)
            }
        );

    }


    //Waypoints animations
    function waypoints() {
        $('.animate_waypoint').waypoint(function() {
            $('.animate_waypoint').addClass('fadeInDown');
        }, { offset: '100%' });
    }


    //Custom modal
    function customModal(){
        /**
         * modalEffects.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         *
         * Copyright 2013, Codrops
         * http://www.codrops.com
         */
        var ModalEffects = (function() {

            function init() {

                var overlay = document.querySelector( '.md-overlay' );

                [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

                    var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                        close = modal.querySelector( '.md-close' );

                    function removeModal( hasPerspective ) {
                        classie.remove( modal, 'md-show' );

                        if( hasPerspective ) {
                            classie.remove( document.documentElement, 'md-perspective' );
                        }
                    }

                    function removeModalHandler() {
                        removeModal( classie.has( el, 'md-setperspective' ) );
                    }

                    el.addEventListener( 'click', function( ev ) {
                        classie.add( modal, 'md-show' );
                        overlay.removeEventListener( 'click', removeModalHandler );
                        overlay.addEventListener( 'click', removeModalHandler );

                        if( classie.has( el, 'md-setperspective' ) ) {
                            setTimeout( function() {
                                classie.add( document.documentElement, 'md-perspective' );
                            }, 25 );
                        }
                    });

                    close.addEventListener( 'click', function( ev ) {
                        ev.stopPropagation();
                        removeModalHandler();
                    });

                } );

            }

            init();

        })();
    }

})