class FullNameSerializer < ActiveModel::Serializer
  attributes :id, :team, :position, :age, :gp, :mpg, :FTa, :FTper, :twoPA, :twoPer, :threePa, :threePer, :ppg, :rpg, :apg, :spg, :bpg, :topg, :versatilityIndex
end
