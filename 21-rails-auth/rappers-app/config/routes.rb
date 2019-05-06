Rails.application.routes.draw do


  get '/profile', to: "users#profile"
  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  resources :rappers, except: [:destroy]
  get '/songs', to: "songs#index"
  get '/songs/new', to: "songs#new"
  post '/songs', to: "songs#create"
  get '/songs/:id', to: "songs#show", as: "song"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
