class User < ApplicationRecord
  has_many :likes
  has_many :players, through: :likes
  has_many :comments
  has_many :players, through: :comments
  has_one :favorite_player
  has_one :favorite_team
  has_one :user_roster
  has_many :players, through: :user_roster
end
