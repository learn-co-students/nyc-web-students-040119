Rails.application.routes.draw do
  # AuthController#login
  post '/login', to: "auth#login"
  post '/signup', to: "users#create"
  get '/profile', to: "users#profile"
end
