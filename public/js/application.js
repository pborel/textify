$(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them
  replaceForm()
  slideForm()
  slideDown()
//   signupToggle();
//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


var replaceForm = function(){

  $('#submitbutton').click(function(){
     $('.formReplace1').replaceWith("<form action='/signup' method='post'>");
     $('.formReplace2').replaceWith("<input type='text' name='email' id='email' required>");
  })
}

var slideForm = function(){ 

	$(window).scroll(function() {
		$('#object').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideExpandUp");
			}
		});
	});
}

var slideDown = function(){ 

	$(window).scroll(function() {
		$('#object').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slidedown");
			}
		});
	});
}

