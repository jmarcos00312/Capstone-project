class User < ApplicationRecord
  has_secure_password

  # has_one
  has_many :comments
  has_many :players, through: :comments
  has_many :likes
  has_many :players, through: :likes

  validates :email,
            format: /\w+@\w+\.{1}[a-zA-Z]{2,}/,
            presence: true,
            uniqueness: true
end
