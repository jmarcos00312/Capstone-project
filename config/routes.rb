Rails.application.routes.draw do
  namespace :api do
    resources :create_user_rosters, only: %i[destroy]
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
    get '/get_roster', to: 'create_user_rosters#index'

    # get '/get_roster/:id', to: 'create_user_rosters#destroy'
    post '/signup', to: 'users#create'

    # get

    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
