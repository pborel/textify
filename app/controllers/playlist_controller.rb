get '/users/:user_id/playlists' do
  @playlists = Playlist.where(user_id: current_user.id)
  @id = params[:id]

  erb :"playlists/index"
end

get '/users/:user_id/playlists/:id' do
  erb :"playlists/playlist"
end

put '/users/:user_id/playlists/:id' do
  # Book.update(params[:id],
              # user_id: params[:user_id],
              # playlists: params[:playlist],
              # comments: params[:comment])

  erb :"playlists/playlist"
end

