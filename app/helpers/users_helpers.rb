helpers do

  def login
    session[:user_id] = @user.id
  end

  def logged_in?
    if session[:user_id] == @user.id
    end
  end

 def logout
   session[:user_id] = nil
 end

  def current_user
    @user ||=  User.find(session[:user_id])
  end

end

