$(function () {

    //==== Global variables ====
    var cases = [];     // Holds case data

    //==== Event handlers ====
    // Call render function on hash change
    $(window).on('hashchange', function(){
        render(decodeURI(window.location.hash));
    });

    //==== On load ====
    // Load data
    $.getJSON( "cases.json", function( data ) {
        cases = data;
        $(window).trigger('hashchange');
    });

    //==== Functions ====

    // Render the appropriate page
    function render(url) {
        // Hide all pages
        $('.o-page').css("display","flex").hide();

        var	map = {
            '': function() {
                renderFirstPage();
            },
            '#case': function() {
                var index = url.split('#case/')[1].trim();
                renderSingleCasePage(index);
            },
            '#final': function() {
                renderFinalPage();
            }
        };

        var keyword = url.split('/')[0];
        if(map[keyword]){
            map[keyword]();
        }
        // If the keyword isn't listed in the above - render the error page.
        else {
            renderErrorPage();
        }
    }

    // Render first page
    function renderFirstPage() {
        $('.front-page').show();
    }

    function renderSingleCasePage(index) {
        var source = document.getElementById("case-template").innerHTML;
        var html = Handlebars.compile(source)(cases[index]);
        $('.case-page').html(html).show();
    }

    function renderFinalPage() {
        $('.final-page').css("display", "flex");
    }

    // Shows the error page.
    function renderErrorPage(){
        var page = $('.error');
        page.show();
    }
});