class LikeSerializer < ActiveModel::Serializer
  attributes :id, :player
  has_one :user
  has_one :player
end
