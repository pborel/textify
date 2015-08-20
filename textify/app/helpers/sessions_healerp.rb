module SessionsHelper

  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!session[:user_id]
  end

  def password_match?(args)
    args.fetch(:password_attempt) == args.fetch(:user).password
  end

  def logout!
    session[:user_id] = nil
  end

end
