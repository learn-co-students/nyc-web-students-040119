Rails.application.routes.draw do
  # get '/rappers', to: "rappers#index"
  # get 'rappers/show'
  # get 'rappers/new'
  # get 'rappers/edit'

  get '/rappers/swag', to: "rappers#swag"
  resources :rappers, except: [:destroy]
  get '/songs', to: "songs#index"
  get '/songs/new', to: "songs#new"
  post '/songs', to: "songs#create"
  get '/songs/:id', to: "songs#show", as: "song"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
