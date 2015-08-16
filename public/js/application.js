$(document).ready(function() {
  replaceForm()
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

var replaceForm = function(){
   $('.formReplace1').replaceWith("<form action='/signup' method='post'>");
   $('.formReplace2').replaceWith("<input type='text' name='email' id='email' required>");
 }
// func signupToggle = function(){
//   $('button.signupbutton').click(function(){
//     $('#signup').toggle();
//   })
// }

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
