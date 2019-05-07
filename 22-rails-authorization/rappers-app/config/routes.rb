Rails.application.routes.draw do


  get '/', to: 'rappers#index'
  post '/users', to: "users#create"
  get '/users/:id', to: "users#show", as: "user"
  get '/users/:id/profile', to: "users#profile"
  get '/login', to: "sessions#new", as: "login"
  get '/logout', to: "sessions#destroy", as: "logout"
  post '/login', to: "sessions#create"
  get '/signup', to: "users#new"
  resources :rappers, except: [:destroy]
  get '/songs', to: "songs#index"
  get '/songs/new', to: "songs#new"
  post '/songs', to: "songs#create"
  get '/songs/:id', to: "songs#show", as: "song"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
