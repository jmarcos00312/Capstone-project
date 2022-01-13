class LikeSerializer < ActiveModel::Serializer
  attributes :id, :get_name_only, :get_player_id_only

  # has_one :user
  # has_one :player

  def get_name_only
    object.player.full_name
  end
  def get_player_id_only
    object.player.id
  end
end
