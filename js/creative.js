(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $("#number-attending").change(function() {
        console.log($("#number-attending").val());
        if ($("#number-attending").val() > 1) {
            $("#hidden-extra").show("fast");
        }
        else {
            $("#hidden-extra").hide("fast");
        }
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('#rsvp-form').on('submit',function(){
        var name = encodeURIComponent($('#name').val());
        var numberAttending = encodeURIComponent($('#number-attending').val());
        var extraPeople = encodeURIComponent($('#extra-people').val());
        var diet = encodeURIComponent($('#diet').val());
        var songRequest = encodeURIComponent($('#song-request').val());
        var attending = encodeURIComponent($("input:radio[name ='attending']:checked").val());

        var verified = true;
        console.log("submitted")
        $('#name').css('border', '1px solid #ccc');
        $('#number-attending').css('border', '1px solid #ccc');
        $('#extra-people').css('border', '1px solid #ccc');

        if (name == "") {
            $('#name').css('border', '1px solid red');
            verified = false;
        }
        if (numberAttending == "") {
            $('#number-attending').css('border', '1px solid red');
            verified = false;
        }
        if (numberAttending > 1 && extraPeople == "") {
          $('#extra-people').css('border', '1px solid red');
          verified = false;
        }

        if (verified)
        {
          var entry1 = "entry.1616646688";
          var entry2 = "entry.1293441340";
          var entry3 = "entry.1429754596";
          var entry4 = "entry.1643413616";
          var entry5 = "entry.1857851960";
          var entry6 = "entry.1154666148";
          var baseURL = 'https://docs.google.com/forms/d/1jrTgZAWyLR7X7NEuz1fn7Ve9b5GHyADwYugvg-e5odg/formResponse?';
          var submitRef = '&submit=Submit';
          var submitURL = (baseURL + entry1 + "=" + name + "&" + entry2 + "=" + numberAttending + "&" + entry3 + "=" + extraPeople + "&" + entry4 + "=" + diet + "&" + entry5 + "=" + songRequest + "&" + entry6 + "=" + attending + submitRef);
          console.log(submitURL);
          $("#rsvp-form").attr("action", submitURL);
          $('#successful-form-response').slideDown( "slow" );
        }
        else
        {
            return false;
        }
    });

})(jQuery); // End of use strict
