get '/users/:user_id/books'
  erb :"books/index"
end

get '/users/:user_id/books/:id'
  erb :"books/book"
end

put '/users/:user_id/books/:id'
  Book.update(params[:id],
              playlists: params[:playlist],
              comments: params[:comment])

  erb :"books/book"
end

