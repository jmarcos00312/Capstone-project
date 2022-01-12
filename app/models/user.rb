class User < ApplicationRecord
  has_secure_password

  # has_many :likes
  has_many :comments
  has_many :players, through: :comments

  validates :email,
            format: /\w+@\w+\.{1}[a-zA-Z]{2,}/,
            presence: true,
            uniqueness: true
end
