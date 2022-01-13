class Player < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments
  has_many :likes
  has_many :users, through: :likes
  has_many :create_user_rosters
  has_many :users, through: :create_user_rosters
end
