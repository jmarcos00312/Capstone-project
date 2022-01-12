class FavoritePlayersController < ApplicationController
  before_action :set_favorite_player, only: [:show, :update, :destroy]

  # GET /favorite_players
  def index
    @favorite_players = FavoritePlayer.all

    render json: @favorite_players
  end

  # GET /favorite_players/1
  def show
    render json: @favorite_player
  end

  # POST /favorite_players
  def create
    @favorite_player = FavoritePlayer.new(favorite_player_params)

    if @favorite_player.save
      render json: @favorite_player, status: :created, location: @favorite_player
    else
      render json: @favorite_player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorite_players/1
  def update
    if @favorite_player.update(favorite_player_params)
      render json: @favorite_player
    else
      render json: @favorite_player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorite_players/1
  def destroy
    @favorite_player.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_player
      @favorite_player = FavoritePlayer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_player_params
      params.require(:favorite_player).permit(:user_id, :player_id)
    end
end