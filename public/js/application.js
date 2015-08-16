$(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them
  replaceForm()
//   signupToggle();
//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


var replaceForm = function(){

  $('.signup').click(function(){
     $('.formroute').html("<form action='/signup' method='post'>");
  })
}
// func signupToggle = function(){
//   $('button.signupbutton').click(function(){
//     $('#signup').toggle();
//   })
// }
