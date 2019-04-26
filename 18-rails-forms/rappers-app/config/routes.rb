Rails.application.routes.draw do
  # get '/rappers', to: "rappers#index"
  # get 'rappers/show'
  # get 'rappers/new'
  # get 'rappers/edit'

  # get '/rappers/swag', to: "rappers#swag"
  resources :rappers, except: [:destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
