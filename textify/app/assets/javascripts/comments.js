// $(document).on("ready", function() {

//   createNewComment();
//   animateCommentEditForm();
//   editComment();
//   deleteComment();

// })

// // DISPLAYING THE EDIT COMMENT FORM
// var toggleCommentForm = function(id) {
//   $( '#' + id + ' .comment-show' ).slideToggle(1000);
// }

// var animateCommentEditForm = function() {
//   $( 'input.comment-hide' ).on('click', function(e) {
//     e.preventDefault();
//     $( this ).hide();

//     var id = $( this ).parent().parent().parent().attr("id")

//     toggleCommentForm(id);
//   })
// }

// // UPDATING A COMMENT
// var displayUpdatedComment = function(response, comment) {
//   comment.children().first().text(response.body)
// }

// var editComment = function() {
//   $( '.comment-show' ).on('reset', function(e) {
//     e.preventDefault();

//     var url = $(this).attr("action")
//     var data = $(this).serialize()
//     var comment = $(this).parent().parent().parent()

//     $.ajax({
//       url: url,
//       type: 'POST',
//       dataType: 'json',
//       data: data
//     })
//     .done(function(response) {
//       displayUpdatedComment(response, comment);
//       toggleCommentForm(response.id);
//     })
//   })
// }

// // CREATING A COMMENT
// var displayNewComment = function(response) {
//   $( '#comment_list' ).append('<li id="' + response.id + '" class="outer">' + '<span>' + response.body + '</span><ul class="pure-menu-list"> <li class="author pure-menu-item">by <a href="/users/' + response.user_id + '">' + response.username + '</li></ul></li>')
//   // $( '#comment_list' ).fadeIn('fast', function() {
//   //   $(this).append('<li id="' + response.id + '" class="outer">' + '<span>' + response.body + '</span><ul class="pure-menu-list"> <li class="author pure-menu-item">by <a href="/users/' + response.user_id + '">' + response.username + '</li></ul></li>')
//   // });
// }

// var createNewComment = function() {
//   $( 'form.comment' ).on('reset', function(e) {
//     // e.preventDefault();

//     if( $( "#comment-data" ).val() != "" ) {

//       data = $( this ).serialize()
//       url = $( this ).attr("action")

//       $.ajax({
//         url:      url,
//         data:     data,
//         dataType: 'JSON',
//         method:   'POST'

//       }).done(function(response) {
//         displayNewComment(response);
//       })
//     }
//   })
// }

// // DELETING A COMMENT
// var removeCommentFromIndexAnimation = function(response) {
//   $( 'li#' + response.id ).slideToggle(600)
// }

// var deleteComment = function() {
//   $( 'form.comment-delete' ).on('submit', function(e) {
//     e.preventDefault();

//     data = $( this ).serialize()
//     url = $( this ).attr("action")

//     $.ajax({
//       url: url,
//       type: 'POST',
//       dataType: 'json',
//       data: data
//     })
//     .done(function(response) {
//       removeCommentFromIndexAnimation(response);
//     })
//   })
// }
