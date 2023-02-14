jQuery.noConflict();

(function($) {

    // Navigation between symposium and workshop pages
    if (location.href.indexOf('/sessions/') !== -1) {
        $('<div/>', {
            class: 'symposia-and-workshops-nav',
        }).insertAfter('article h1');
    }

    // Highlighting of current page in sidebar
    $('.sidebar li, .sidebar li a').removeClass('current').addClass('link');
    $('.sidebar li a[title="Go to the TDWG Submissions page"]').removeClass('link').addClass('current')
      .parent('li').removeClass('link').addClass('current');
    if (location.href.indexOf('call-for-abstracts') !== -1) {
        $('.sidebar li a[title="Call for abstracts"]').removeClass('link').addClass('current')
          .parent('li').removeClass('link').addClass('current');
    }
    if (location.href.indexOf('instructions-for-authors') !== -1) {
        $('.sidebar li a[title="Instructions for authors"]').removeClass('link').addClass('current')
          .parent('li').removeClass('link').addClass('current');
    }
    if (location.href.indexOf('instructions-for-editors') !== -1) {
        $('.sidebar li a[title="Instructions for editors"]').removeClass('link').addClass('current')
          .parent('li').removeClass('link').addClass('current');
    }
    if (location.href.indexOf('/sessions/') !== -1) {
        $('.sidebar li a[title="Symposia and workshops"]').removeClass('link').addClass('current')
          .parent('li').removeClass('link').addClass('current');
    }

}(jQuery));
