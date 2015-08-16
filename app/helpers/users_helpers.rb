helpers do

  def get_username(id)
    User.find(id).username
  end

  def current_user(username = nil)
    user ||= User.find_by(username: username) || User.find_by(id: session[:id])
  end

  def login!
    session[:id] = current_user.id
  end

  def logged_in?
    !!session[:id]
  end

  def password_match?(args)
    args.fetch(:password_attempt) == args.fetch(:user).password_hash
  end

 def logout!
   session[:id] = nil
 end

end

