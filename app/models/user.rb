class User < ApplicationRecord
  has_secure_password

  # has_one
  has_many :comments, dependent: :destroy
  has_many :players, through: :comments
  has_many :likes,dependent: :destroy
  has_many :players, through: :likes
  has_many :create_user_rosters, dependent: :destroy
  has_many :players, through: :create_user_rosters

  validates :email,
            format: /\w+@\w+\.{1}[a-zA-Z]{2,}/,
            presence: true,
            uniqueness: true

  validates :password,
            presence: true,
            confirmation: true,
            length: {
              within: 6..40,
            },
            on: :create
  validates :password,
            confirmation: true,
            length: {
              within: 6..40,
            },
            allow_blank: true,
            on: :update

  validates :favorite_player, :favorite_team, presence: true
  validates :username, presence: true, length: {within: 2..15}
end
