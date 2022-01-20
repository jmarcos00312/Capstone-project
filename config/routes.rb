Rails.application.routes.draw do
  namespace :api do
    resources :create_user_rosters, only: %i[destroy index create]
    resources :likes, only: %i[create destroy]
    resources :comments
    resources :users, only: %i[create index]
    resources :nba_teams, only: %i[index update show]
    resources :players

    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#me'

    get 'get_team/:team_abbr', to: 'nba_teams#show'
    get '/get_comments/:id', to: 'players#player_comments'
    post '/add_comment/:id', to: 'comments#create'
    patch '/players/:id/like', to: 'players#get_player_like_count'
    patch 'user_liked', to: 'users#add_to_user_like_list'
    patch 'updateComment/:id', to: 'comments#update'
    get 'by_assists', to: 'players#by_apg'
    get 'by_efg', to: 'players#by_efg'
    get 'by_team/:team', to: 'players#by_team'
    get 'top_scorer', to: 'players#top_scorer'
    get 'get_user/:id', to: 'users#show_name'


    # get '/get_roster/:id', to: 'create_user_rosters#destroy'

    # get

    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
