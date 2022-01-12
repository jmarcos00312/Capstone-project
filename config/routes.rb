Rails.application.routes.draw do
  resources :user_rosters
  resources :likes
  resources :comments
  resources :favorite_teams
  resources :favorite_players
  resources :users
  resources :nba_teams
  resources :players
   get '/hello', to: 'application#hello_world'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
