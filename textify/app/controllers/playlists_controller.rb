class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: params[:user_id])
  end

end
