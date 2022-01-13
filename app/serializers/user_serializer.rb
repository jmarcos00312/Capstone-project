class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :username,
             :password_digest,
             :email,
             :favorite_player,
             :favorite_team
  has_many :comments
  has_many :likes
end
