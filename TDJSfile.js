// General variables
var studentItems = $('.student-item');
var pagination ='<div class="pagination"><ul></ul></div>';
var studentList = pages(studentItems);
// Function that creates an array of students for the page and limits the ammount of students on each page to 10.
function pages(list) {
	var oldList = list.slice();
	var pagesArray = [];
	while (oldList.length) {
		pagesArray.push(oldList.splice(0,10));
	}
	return pagesArray;
}
// Function that displays only the first 10 students when page first loads.
function showPages(pageNumber, pageList) {
  $(".student-list li").hide();
  $.each(pageList, function(index, page){
      if (pageNumber === index) {
        $.each(page, function(i, listItem){
          $(listItem).fadeIn('fast');
        });
      }
  });
}
// JQuery function for page # buttons
function appendButtons(pageList) {
	$('.page').append(pagination);
	var numPages = pageList.length;
	for (var i = 1; i <= numPages; i++) {
		var buttons = '<li><a href="#">' + i + '</a></li>';
		$('.pagination ul').append(buttons);
	}
	$('.pagination ul li a').first().addClass('active');

	  $(".pagination ul li a").on("click", function(e) {
	    var pageSelection = parseInt($(this)[0].text) - 1;
	    showPages(pageSelection, pageList);
	    $(".pagination ul li a").removeClass();
	    $(this).addClass("active");
	    e.preventDefault();
	  });
}
// Inits
appendButtons(studentList);
showPages(0, studentList);