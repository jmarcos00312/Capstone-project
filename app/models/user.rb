class User < ApplicationRecord
    has_one :favorite_player
    has_one :favorite_team
end
