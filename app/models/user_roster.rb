class UserRoster < ApplicationRecord
  belongs_to :user
  has_many :players
end
