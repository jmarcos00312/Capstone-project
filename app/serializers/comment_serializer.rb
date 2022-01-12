class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  belongs_to :player
end
