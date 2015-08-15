get '/users/:user_id/books' do
  erb :"books/index"
end

get '/users/:user_id/books/:id' do
  erb :"books/book"
end

put '/users/:user_id/books/:id' do
  # Book.update(params[:id],
              # user_id: params[:user_id],
              # playlists: params[:playlist],
              # comments: params[:comment])

  erb :"books/book"
end

