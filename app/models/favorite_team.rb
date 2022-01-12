class FavoriteTeam < ApplicationRecord
  belongs_to :user
  belongs_to :nba_team
end
