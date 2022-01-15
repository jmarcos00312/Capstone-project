class Player < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes
  has_many :create_user_rosters, dependent: :destroy
  has_many :users, through: :create_user_rosters


end
