# get '/users/:user_id/playlists/:playlist_id/books' do
#   @books = Book.where(playlist_id: params[:playlist_id])

#   erb :"books/index"
# end

get '/users/:user_id/playlists/:playlist_id/books/:id' do
  @book = Book.find(params[:id])

  erb :"books/book"
end

put '/users/:user_id/playlists/:playlist_id/books/:id' do
  # Book.update(params[:id],
              # user_id: params[:user_id],
              # books: params[:book],
              # comments: params[:comment])

  erb :"books/book"
end

