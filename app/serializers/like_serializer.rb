class LikeSerializer < ActiveModel::Serializer
  attributes :id, :likes
  has_one :user
  has_one :player
end
