Rails.application.routes.draw do
  resources :pets
  get '/owners/petgawd', to: "owners#petgawd"
  resources :owners, except: [:destroy]
  delete '/owners/:id', to: "owners#delete"

  # get 'owners/index'
  # get 'owners/show'
  # get 'owners/new'
  # get 'owners/create'
  # get 'owners/edit'
  # get 'owners/update'
  # get 'owners/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
