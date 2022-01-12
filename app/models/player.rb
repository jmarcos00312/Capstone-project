class Player < ApplicationRecord
    belongs_to :nba_team
    belongs_to :favorite_player
end
