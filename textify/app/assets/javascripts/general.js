$(document).ready(function() {
  replaceForm()
  slideForm()
  slideDown()
//   signupToggle();
  bindListeners()
});

var bindListeners = function() {
  $( '#comment' ).on('reset', function () {
    event.preventDefault()
    createNewComment();
  })

  $('#submitbutton').click(function() {
    event.preventDefault();
    replaceForm();
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

var replaceForm = function(){
   $('.formReplace1').replaceWith("<form action='/signup' method='post'>");
   $('.formReplace2').replaceWith("<input type='text' name='email' id='email' required>");
 }

var createNewComment = function() {
  var url = $( 'form.comment' ).attr('action')
  var data = $( 'form.comment' ).serialize()

  $.ajax({
    url: url,
    type: 'POST',
    dataType: 'json',
    data: data
  })
  .done(function(response) {
    displayNewComment(response)
  })
}


var displayNewComment = function(response) {
  // var val = document.getElementById('comment').value
  document.getElementById('comment_list').innerHTML = document.getElementById('comment_list').innerHTML + "<br>" + response.body
}

