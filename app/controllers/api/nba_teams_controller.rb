class Api::NbaTeamsController < ApplicationController
  # before_action :authorize
  def index
    render json: NbaTeam.all
  end

  def update
    team = NbaTeam.find(params[:id])
    team.update!(team_params)
    render json: newTeam, status: :created
  end

  private

  def team_params
    params.permit(:name, :team_abbr)
  end
end
