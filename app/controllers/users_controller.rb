get '/' do
  erb :"users/login"
end

post '/login' do
  @user = User.find_by(username: params[:username])
  if @user.password_hash == params[:password_hash]
    redirect '/users/:id'
  else
    redirect '/'
    #add error message
  end
end

post '/signup' do

  @user = User.create(username: params[:username], password_hash: params[:password_hash], email: params[:email])

    redirect '/users/:id'
end

get '/users/:id' do
  "hello"
  erb :"users/profile"
end
