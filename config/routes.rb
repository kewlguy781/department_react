Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # TODO add route in the starter
  namespace :api do
    resources :products do
      resources :comments
    end
    resources :comments
  end
end
