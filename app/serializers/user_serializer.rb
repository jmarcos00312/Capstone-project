class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :username,
             :password_digest,
             :email,
             :favorite_player,
             :favorite_team,
             :admin,
             :create_user_rosters
  has_many :comments
  has_many :likes
  # has_one :create_user_rosters
end
