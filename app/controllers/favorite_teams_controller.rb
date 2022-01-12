class FavoriteTeamsController < ApplicationController
  before_action :set_favorite_team, only: [:show, :update, :destroy]

  # GET /favorite_teams
  def index
    @favorite_teams = FavoriteTeam.all

    render json: @favorite_teams
  end

  # GET /favorite_teams/1
  def show
    render json: @favorite_team
  end

  # POST /favorite_teams
  def create
    @favorite_team = FavoriteTeam.new(favorite_team_params)

    if @favorite_team.save
      render json: @favorite_team, status: :created, location: @favorite_team
    else
      render json: @favorite_team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorite_teams/1
  def update
    if @favorite_team.update(favorite_team_params)
      render json: @favorite_team
    else
      render json: @favorite_team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorite_teams/1
  def destroy
    @favorite_team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_team
      @favorite_team = FavoriteTeam.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_team_params
      params.require(:favorite_team).permit(:user_id, :nba_team_id)
    end
end
