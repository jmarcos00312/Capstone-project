class PlayersController < ApplicationController
  def index
    render json: Player.all
  end


  private

  # def player_params
  #     params.permit(
  #       :name,
  #       :team,
  #       :position,
  #       :age,
  #       :gp,
  #       :sale,
  #       :mpg,
  #       :FTa,
  #       :FTper,
  #       :twoPA,
  #       :twoPer,
  #       :threePa,
  #       :threePer,
  #       :ppg,
  #       :rpg,
  #       :apg,
  #       :spg,
  #       :bpg,
  #       :topg,
  #       :versatilityIndex,
  #     )
  # end
end
