class PlayersController < ApplicationController

  def index
    render json: Player.all
  end

  def show
    player = find_players
    render json: player, except: %i[created_at updated_at], status: :ok
  end

  def create
    newPlayer = Player.create!(player_params)
    render json: newPlayer
  end

  def update
    player = find_players
    player.update!(player_params)
    render json: player
  end

  def destroy
    player = find_players
    player.destroy
    head :no_content
    puts 'deleted'
  end

  private

  def find_players
    Player.find(params[:id])
  end

  def player_params
    params.permit(
      :full_name,
      :pos,
      :age,
      :team,
      :games,
      :games_started,
      :mpg,
      :fg,
      :fga,
      :fgp,
      :threeP,
      :threePA,
      :twoP,
      :twoPP,
      :efg,
      :ft,
      :fta,
      :ftp,
      :drb,
      :orb,
      :rpg,
      :ppg,
      :apg,
      :spg,
      :bpg,
      :tpg,
      :fouls,
      :threePP,
    )
  end
end
