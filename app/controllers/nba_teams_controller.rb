class NbaTeamsController < ApplicationController

  def index
    render json: NbaTeam.all
   end

  def create
    newTeam = NbaTeam.create!(team_params)
    render json: newTeam, status: :created
  end

  private

  def team_params
    params.permit(:name, :team_abbr)
  end
end
