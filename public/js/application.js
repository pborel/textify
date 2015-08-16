$(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them
  replaceForm()
//   signupToggle();
//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


var replaceForm = function(){

  $('#submitbutton').click(function(){
     $('.formReplace1').replaceWith("<form action='/signup' method='post'>");
     $('.formReplace2').replaceWith("<input type='text' name='email' id='email' required>");
  })
}
// func signupToggle = function(){
//   $('button.signupbutton').click(function(){
//     $('#signup').toggle();
//   })
// }
