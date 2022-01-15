class CreateUserRosterSerializer < ActiveModel::Serializer
  attributes :id, :get_player_name
  # has_one :user

  # has_many :players

  def get_player_name
    object.player.full_name
  end
end
