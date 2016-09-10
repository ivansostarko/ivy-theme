$(document).ready(function () {

    //Init functions
    homeContactForm();
    homeCVForm();
    homePorftolioForm();
    homeBackgroundTransitions();


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
                position: 'bottom-right',

            })
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
            opacity: [1, .5, 0],
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


});