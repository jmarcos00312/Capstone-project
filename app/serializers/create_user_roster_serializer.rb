class CreateUserRosterSerializer < ActiveModel::Serializer
  attributes :id, :player, :user_id

  def get_player_name
    object.player.full_name
  end
end
