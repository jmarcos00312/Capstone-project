class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :team, :position, :age, :gp, :mpg, :FTa, :FTper, :twoPA, :twoPer, :threePa, :threePer, :ppg, :rpg, :apg, :spg, :bpg, :topg, :versatilityIndex
end
