'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};


articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${ $(this).val() }"]`).fadeIn(1000)
  //     /* TODO: DONE: If the slect box changes to an option that has a value, we should:
  //         1. Hide all of the articles
  //         2. Fade in only the articles that match based on on the author
  //           that was aselected. Hint: use an attribute selector to find
  //           those articles that match the value, and then fade them in.
  //       */
    } else {
      $('article').not('.template').show();
    /* Otherwise, we should:
        1. Show all the articles except the template */
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${ $(this).val() }"]`).fadeIn(1000)

      /* TODO: Done: Just like we do for #author-filter above, we should also handle
      change events on the #category-filter element. Be sure to reset the
      #author-filter while you're at it! */
    } else {
      $('article').show();
    }
    $('#category-filter').val('');
    $('#author-filter').val('');

  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    console.log($(this).data('content'));
    if ($(this).data('content')) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(1000);
  };
})
    /* TODO:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
    When a .read-on link is clicked, we can:
    1. Prevent the defaul actionof a link.
    2. Reveal everything in that particular article now.
    3. Hide that read-on link!

    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
};

// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
