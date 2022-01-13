class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :username,
             :password_digest,
             :email,
             :favorite_player,
             :favorite_team,
             :get_player_name
  has_many :comments
  has_many :likes

  def get_player_name
    "test"
    # object.likes.player.full_name
  end
end
