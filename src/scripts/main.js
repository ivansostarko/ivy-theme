$(document).ready(function () {


    $('#wrapper').addClass('loaded');

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
    openPortfolioModal();
    carousel_project_type_website();


    //Page loader
    function loader() {
        $(window).bind("load", function () {
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
        $("#scrollToAbout").click(function () {
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
            strings: ["Forever free, open source, and easy to use.", " You can use Ivy for any purpose, even comercially!.", "Ivy is built for the Bootstrap 3."],
            typeSpeed: 50,
            backDelay: 500,
            loop: true,
            loopCount: false,
        });
    }

    //Caption
    function caption() {
        $('.thumbnail').hover(
            function () {
                $(this).find('.caption').slideDown(250); //.fadeIn(250)
            },
            function () {
                $(this).find('.caption').slideUp(250); //.fadeOut(205)
            }
        );

    }


    //Waypoints animations
    function waypoints() {
        $('.animate_waypoint').waypoint(function () {
            $('.animate_waypoint').addClass('fadeInDown');
        }, {offset: '100%'});
    }


    //Custom modal
    function customModal() {
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
        var ModalEffects = (function () {

            function init() {

                var overlay = document.querySelector('.md-overlay');

                [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {

                    var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                        close = modal.querySelector('.md-close');

                    function removeModal(hasPerspective) {
                        classie.remove(modal, 'md-show');

                        if (hasPerspective) {
                            classie.remove(document.documentElement, 'md-perspective');
                        }
                    }

                    function removeModalHandler() {
                        removeModal(classie.has(el, 'md-setperspective'));
                    }

                    el.addEventListener('click', function (ev) {
                        classie.add(modal, 'md-show');
                        overlay.removeEventListener('click', removeModalHandler);
                        overlay.addEventListener('click', removeModalHandler);

                        if (classie.has(el, 'md-setperspective')) {
                            setTimeout(function () {
                                classie.add(document.documentElement, 'md-perspective');
                            }, 25);
                        }
                    });

                    close.addEventListener('click', function (ev) {
                        ev.stopPropagation();
                        removeModalHandler();
                    });

                });

            }

            init();

        })();
    }

    function openPortfolioModal() {
        var modalTrigger = $(".morph-btn");
        var modalWindow = $(".morph-modal");
        var closeTrigger = $(".close-modal");


        function getElementPosition(getSelectedModalTrigger) {
            var top = getSelectedModalTrigger.offset().top - $(window).scrollTop();
            var left = getSelectedModalTrigger.offset().left;
            //return an array
            return [top, left];
        }


        function evalScale(element, position) {
            var scaleY = scaleValue(position[0], element.innerHeight(), $(window).height());
            var scaleX = scaleValue(position[1], element.innerWidth(), $(window).width());

            return [scaleY, scaleX];
        }


        function scaleValue(firstCoord, elSize, windowSize) {
            var secondCoord = windowSize - firstCoord - elSize; //bottom
            var maxCoord = Math.max(firstCoord, secondCoord);
            var scaleValue = (maxCoord * 2 + elSize) / elSize; //final size of the span element
            return Math.ceil(scaleValue * 10) / 10;
        }

        function launchModal(e) {
            e.preventDefault

            //hide scroll body
            $('body').css('overflow', 'hidden');
            $('#go_top').hide();

            var selectedModalTrigger = $(this);
            //get href
            var modalId = selectedModalTrigger.attr("href");

            var selectedModalWindow = modalWindow.filter(modalId);
            var selectedMorphBackground = selectedModalWindow.children(".morph-background");
            selectedModalWindow.addClass("open-modal");

            //run trigger button position function (pass in the element)
            var triggerPosition = getElementPosition(selectedModalTrigger);

            var scaleValues = evalScale(selectedMorphBackground, triggerPosition);

            //use array index to locate position
            selectedMorphBackground.css({
                "top": triggerPosition[0] + "px",
                "left": triggerPosition[1] + "px",
                "transform": "scaleX(" + scaleValues[1] + ") scaleY(" + scaleValues[0] + ")",
                //"border":"1px solid red"
            }).one("transitionend", function () {
                //one works like on, but listens to the callback only once
                selectedModalWindow.addClass("modal-visible");
            });

            // function showContent(){
            //   selectedModalWindow.addClass("modal-visible");
            // }
        }

        modalTrigger.on("click", launchModal);


        modalWindow.on("click", ".close-modal", closeModal);
        function closeModal(event) {
            //show scroll on body
            $('body').css('overflow', 'scroll');
            $('#go_top').show();


            //get modal window && background
            var selectedModalWindow = $(this).parent(".morph-modal");
            var selectedBackground = selectedModalWindow.children(".morph-background");

            //hide the modal content
            modalWindow.removeClass("modal-visible");
            //reduce
            selectedBackground.css({
                "transform": "scaleX(1) scaleY(1)"
            }).one("transitionend", function () {
                selectedModalWindow.removeClass("open-modal");
            });
        }
    }

    function carousel_project_type_website() {
        $('#carousel_project_type_website').carousel()
    }

});