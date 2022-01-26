class Api::CreateUserRostersController < ApplicationController
  def index
    render json: CreateUserRoster.all, except: %i[created_at updated_at]
  end

  def create
    player = CreateUserRoster.create!(newRoster_params)
    render json: player, status: :created
  end
  def show
    render json: in_roster_player = CreateUserRoster.find(params[:id])
  end

  def destroy
    in_roster_player = CreateUserRoster.find(params[:id])
    in_roster_player.destroy
    render json: CreateUserRoster.all
  end

  private

  def newRoster_params
    params.permit(:player_id, :user_id)
  end
end
