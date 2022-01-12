class UserRosterSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :players
end
