class FavoritePlayerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :player
  has_one :user
end
