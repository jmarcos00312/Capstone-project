class Api::CreateUserRostersController < ApplicationController
  def index
    render json: CreateUserRoster.all
  end

  def create
    player = @current_user.create_user_rosters.create!(newRoster_params)
    render json: @current_user.create_user_rosters, status: :created
  end

  def destroy
    in_roster_player = CreateUserRoster.find(params[:id])
    in_roster_player.destroy
    render json: "deleted"
  end

  private

  def newRoster_params
    params.permit(:player_id, :user_id)
  end
end
