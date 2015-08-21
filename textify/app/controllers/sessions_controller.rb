class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.find_by(username: user_params[:username])
    p user
    puts '*' * 50
    if user.password == params[:password]
      session[:user_id] = user.id
      redirect_to user_playlists_path(user.id)
    else
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
