class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :email
has_one :favorite_player
has_one :favorite_team
end
