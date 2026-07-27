/* ==========================================================================
   News Filter Functionality
   ========================================================================== */

$(document).ready(function() {
  var $filterInput = $('#newsFilterInput');
  var $newsItems = $('.news-item');

  if ($filterInput.length === 0 || $newsItems.length === 0) return;

  $filterInput.on('keyup', function() {
    var filterText = $(this).val().toLowerCase().trim();

    $newsItems.each(function() {
      var $item = $(this);
      var content = $item.find('.news-content').text().toLowerCase();
      var dateText = $item.find('.news-date-block').text().toLowerCase();

      var searchable = content + ' ' + dateText;

      if (filterText === '' || searchable.indexOf(filterText) !== -1) {
        $item.removeClass('hidden');
      } else {
        $item.addClass('hidden');
      }
    });
  });
});
