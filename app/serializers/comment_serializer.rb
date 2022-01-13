class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :get_player_name, :get_player_user

  # has_one :user
  # belongs_to :player

  def get_player_name
    object.player.full_name
  end
  def get_player_user
    object.user.username
  end
end
