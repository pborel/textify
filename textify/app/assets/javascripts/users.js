$(document).on("ready", function() {
  editFunction();
})

var editFunction = function(){
  $( ".editButton" ).on('click', function(e){
    console.log("cat")
  e.preventDefault()
)}
}
