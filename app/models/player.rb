class Player < ApplicationRecord
  has_many :likes
  has_many :users, through: :likes
  has_many :comments
  has_many :users, through: :comments
  has_one :favorite_player
  has_many :user_roster
end
