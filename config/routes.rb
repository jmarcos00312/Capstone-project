Rails.application.routes.draw do
  resources :likes, only: %i[create destroy]
  resources :comments
  resources :users, only: %i[create index]
  resources :nba_teams, only: %i[index update]
  resources :players
  get '/players/:id/comment', to: 'comments#create'
  patch '/players/:id/like', to: 'players#addLiketoPlayer'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'
  post 'signup', to: 'users#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
