$(document).ready(function () {

    //Init functions
    homeScroll();
    homeWaypoints();
    homeContactForm();
    homeCVForm();
    homePorftolioForm();
    homeBackgroundTransitions();
    homeScrollToAbout();
    homeCarouselProjectTypeWebsite();
    homeText();
    homeOpenPortfolioModal();

    //Scroller for sidemenu function
    function homeScroll() {
        $('#sidebar').activescroll({
            active: "highlight"
        });
    }



    //Waypoints animations function
    function homeWaypoints() {

        //bounceInLeft animation class
        $('#about-title').waypoint(function () {
            $('#about-title').addClass('animated bounceInLeft animation_delay');
        }, {offset: '75%'});
        $('#request-cv-title').waypoint(function () {
            $('#request-cv-title').addClass('animated bounceInLeft animation_delay');
        }, {offset: '75%'});
        $('#featured_works-title').waypoint(function () {
            $('#featured_works-title').addClass('animated bounceInLeft animation_delay');
        }, {offset: '75%'});
        $('#request-portfolio-title').waypoint(function () {
            $('#request-portfolio-title').addClass('animated bounceInLeft animation_delay');
        }, {offset: '75%'});

        //fadeInDown animation class
        $('.animate_waypoint_fadeInDown').waypoint(function () {
            $('.animate_waypoint_fadeInDown').addClass('animated fadeInDown animation_delay');
        }, {offset: '75%'});

    }

    //Contact form function
    function homeContactForm() {
        $("#contactForm").validate({
            submitHandler: function (form) {
                $(form).ajaxSubmit();
            },
            rules: {
                fullname: "required",
                company: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: "required",
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                fullname: "Please enter your name and last name.",
                company: "Please enter your company name.",
                email: "Please enter a valid email address.",
                phone: "Please enter your phone number.",
                message: {
                    required: "Please enter your message",
                    minlength: "Your message must be at least 10 characters long."
                }

            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                // Add the `help-block` class to the error element
                error.addClass("help-block");
                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("label"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
            }
        });
    }

    //CV form function
    function homeCVForm() {
        $('#cv_submit').on('click', function () {

            //Run animation
            var $this = $(this);
            $this.button('loading');
            setTimeout(function () {
                $this.button('reset');
            }, 3000);

            //Show notification
            $.toast({
                heading: 'Success',
                text: 'Add your message here.',
                showHideTransition: 'slide',
                icon: 'success',
                position: 'bottom-right'
            });
        });
    }

    //Portfolio form function
    function homePorftolioForm() {
        $('#portfolio_submit').on('click', function () {

            //Run animation
            var $this = $(this);
            $this.button('loading');
            setTimeout(function () {
                $this.button('reset');
            }, 3000);

            //Show notification
            $.toast({
                heading: 'Success',
                text: 'Add your message here.',
                showHideTransition: 'slide',
                icon: 'success',
                position: 'bottom-right'

            });
        });
    }


//Background transitions function
    function homeBackgroundTransitions() {
        var granimInstance = new Granim({
            element: '#canvas-image',
            direction: 'top-bottom',
            opacity: [1, 0.5, 0],
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ['#485563', '#29323c', '#29323c'],
                        ['#00c6ff', '#0072ff', '#0072ff']
                    ],
                    transitionSpeed: 6000
                }
            }
        });
    }

    //Scroll to about section function
    function homeScrollToAbout() {
        $("#scrollToAbout").click(function () {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        });
    }

    //Carousel portfolio function
    function homeCarouselProjectTypeWebsite() {
        $('#carousel_project_type_website').carousel();
    }

    //Home text function
    function homeText() {
        $("#home_text").typed({
            strings: ["Forever free, open source, and easy to use.", " You can use Ivy for any purpose, even comercially!.", "Ivy is built for the Bootstrap 3."],
            typeSpeed: 50,
            backDelay: 500,
            loop: true,
            loopCount: false
        });
    }

    //Open portfolio homepage function function
    function homeOpenPortfolioModal() {
        /* https://codyhouse.co/gem/morphing-modal-window/ */

        var modalTrigger = $(".morph-btn");
        var modalWindow = $(".morph-modal");
        var closeTrigger = $(".close-modal");

        function getElementPosition(getSelectedModalTrigger) {
            var top = getSelectedModalTrigger.offset().top - $(window).scrollTop();
            var left = getSelectedModalTrigger.offset().left;

            return [top, left];
        }


        function evalScale(element, position) {
            var scaleY = scaleValue(position[0], element.innerHeight(), $(window).height());
            var scaleX = scaleValue(position[1], element.innerWidth(), $(window).width());

            return [scaleY, scaleX];
        }


        function scaleValue(firstCoord, elSize, windowSize) {
            var secondCoord = windowSize - firstCoord - elSize;
            var maxCoord = Math.max(firstCoord, secondCoord);
            var scaleValue = (maxCoord * 2 + elSize) / elSize;

            return Math.ceil(scaleValue * 10) / 10;
        }

        function launchModal(e) {
            //e.preventDefault;

            //hide scroll body
            $('body').css('overflow', 'hidden');

            //hide scroll to top when modal box is running
            $('#go_top').hide();

            var selectedModalTrigger = $(this);
            var modalId = selectedModalTrigger.attr("href");

            var selectedModalWindow = modalWindow.filter(modalId);
            var selectedMorphBackground = selectedModalWindow.children(".morph-background");
            selectedModalWindow.addClass("open-modal");
            var triggerPosition = getElementPosition(selectedModalTrigger);

            var scaleValues = evalScale(selectedMorphBackground, triggerPosition);

            selectedMorphBackground.css({
                "top": triggerPosition[0] + "px",
                "left": triggerPosition[1] + "px",
                "transform": "scaleX(" + scaleValues[1] + ") scaleY(" + scaleValues[0] + ")"
                //"border":"1px solid red"
            }).one("transitionend", function () {
                selectedModalWindow.addClass("modal-visible");
            });

        }

        modalTrigger.on("click", launchModal);
        modalWindow.on("click", ".close-modal", closeModal);
        function closeModal(event) {

            //show scroll on body
            $('body').css('overflow', 'scroll');

            //show scroll to top
            $('#go_top').show();

            var selectedModalWindow = $(this).parent(".morph-modal");
            var selectedBackground = selectedModalWindow.children(".morph-background");

            modalWindow.removeClass("modal-visible");
            selectedBackground.css({
                "transform": "scaleX(1) scaleY(1)"
            }).one("transitionend", function () {
                selectedModalWindow.removeClass("open-modal");
            });
        }
    }
});