get '/' do
  erb :"users/login"
end

post '/login' do
  @user = User.find_by(username: params[:username])
  if @user.password_hash == params[:password_hash]
    login
    redirect '/users/:id/books'
  else
    redirect '/'
    #add error message
  end
end

post '/users' do

  @user = User.create(username: params[:username], password: params[:password], email: params[:email])

    redirect '/users/:id/books'
end


get '/users/:id/books' do

  erb :"users/profile"
end
