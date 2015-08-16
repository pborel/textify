# get '/users/:user_id/playlists/:playlist_id/books' do
#   @books = Book.where(playlist_id: params[:playlist_id])

#   erb :"books/index"
# end

get '/users/:user_id/playlists/:playlist_id/books/:id' do
  @book = Book.find(params[:id])
  @playlist = Playlist.find(params[:playlist_id])

  erb :"books/book"
end

put '/users/:user_id/playlists/:playlist_id/books/:id' do
  # Book.update(params[:id],
              # user_id: params[:user_id],
              # comments: params[:comment])

  erb :"books/book"
end

post '/users/:user_id/playlists/:playlist_id/books' do
  book = Book.create(author: params[:author],
              playlist_id: params[:playlist_id],
              photo_url: params[:photo_url],
              audio_link_mpg: params[:audio_link_mpg],
              title: params[:title],
              description: params[:description])

  if request.xhr?
    book.to_json
  else
    redirect "/users/#{params[:user_id]}/playlists/#{book.playlist_id}/books/#{book.id}"
  end
end

delete '/users/:user_id/playlists/:playlist_id/books/:id' do
  book = Book.find(params[:id]).destroy

  if request.xhr?
    book.to_json
  else
    redirect "/users/#{params[:user_id]}/playlists/#{book.playlist_id}"
  end
end

