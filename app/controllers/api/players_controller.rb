class Api::PlayersController < ApplicationController
  def index
    players = Player.order(ppg: :desc)
    render json: players
  end

  def by_apg
    players = Player.order(apg: :desc)
    render json: players
  end
  def by_rpg
    players = Player.order(rpg: :desc)
    render json: players
  end
  def by_three_point_percentage
    players = Player.order(threePP: :desc)
    render json: players
  end
  def by_efg
    players = Player.order(efg: :desc)
    render json: players
  end
  def by_team
    players = Player.where(team: [params[:team]]).order(ppg: :desc)
    render json: players
  end

  def show
    player = find_players
    render json: player, except: %i[created_at updated_at], status: :ok
  end

  def create
    if current_user.admin?
      newPlayer = Player.create!(player_params)
      render json: newPlayer
    else
      render json: 'You are not an admin'
    end
  end

  def update
    if current_user.admin?
      player = find_players
      player.update!(player_params)
      render json: player
    else
      render json: 'You are not an admin'
    end
  end

  def destroy
    if current_user.admin?
      player = find_players
      player.destroy
      head :no_content
      puts 'deleted'
    else
      render json: 'You are not an admin'
    end
  end

  def addLiketoPlayer
    player = find_players
    player.update(likeCount: player.likes.count)
    render json: player
  end

  def find_by_name
    player = Player.find_by_full_name(params[:full_name])
    render json: player
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