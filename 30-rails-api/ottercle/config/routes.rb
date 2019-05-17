Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/cool', to:"controller#action"
  # resources :otters
  get '/otters', to:"otters#index"
  get '/otters/:id', to:"otters#show"
  post '/otters', to:"otters#create"
end
