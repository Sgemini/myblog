Rails.application.routes.draw do
  root 'home#welcome'

  resources :articles,
            only: [:index, :create, :destroy]
end
