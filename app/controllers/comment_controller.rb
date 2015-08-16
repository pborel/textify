get '/users/:user_id/playlists/:playlist_id/books/:book_id/comments' do
  erb :"comments/_index"
end

post '/users/:user_id/playlists/:playlist_id/books/:book_id/comments' do
  username = get_username(params[:user_id])

  comment = Comment.create(
    user_id: params[:user_id],
    playlist_id: params[:playlist_id],
    body: params[:body],
    username: username
    )

  if request.xhr?
    response = comment.to_json
  else
    redirect "/users/#{params[:owner_id]}/playlists/#{params[:playlist_id]}/books/#{comment.book_id}/comments"
  end
end

delete '/users/:user_id/playlists/:playlist_id/books/:book_id/comments/:id/delete' do
  comment = Comment.find(params[:id]).destroy

  if request.xhr?
    response = comment.to_json
  else
    redirect "/users/#{params[:owner_id]}/playlists/#{params[:playlist_id]}/books/#{comment.book_id}/comments"
  end
end

put '/users/:user_id/playlists/:playlist_id/books/:book_id/comments/:id' do
  comment = Comment.update(params[:id], body: params[:body])

  if request.xhr?
    response = comment.to_json
  else
    redirect "/users/#{params[:owner_id]}/playlists/#{params[:playlist_id]}/books/#{comment.book_id}/comments"
  end
end
