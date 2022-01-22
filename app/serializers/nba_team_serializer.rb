class NbaTeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :team_abbr, :imageURL
end
