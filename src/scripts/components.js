$(document).ready(function () {

    //Init functions
    componentsSelect();
    componentsPopover();
    componentsPopoverEditor();

    //Highlighting
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
        console.log("BLJAK");
    });

    //Custom select menu function
    function componentsSelect() {
        $("select").bselect();
    }

    //Popover function
    function componentsPopover() {
        $('[data-toggle="popover"]').popover();

    }

    //Edit popover function
    function componentsPopoverEditor() {
        $.fn.editable.defaults.mode = 'popup';
        $('#username').editable();
    }


});