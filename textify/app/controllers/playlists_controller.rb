class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: params[:user_id])
    @id = params[:id]
  end

  def show
    @playlists = Playlist.where(user_id: params[:user_id])
    @id = params[:id]
    render "index"
  end

end
