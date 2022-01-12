class FavoriteTeamSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :nba_team
end
