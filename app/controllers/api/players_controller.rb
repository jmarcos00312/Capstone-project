class Api::PlayersController < ApplicationController
  def index
    players = Player.order(ppg: :desc).limit(params[:limit]).offset(params[:offset])
    render json: players
  end

  def by_apg
    players = Player.order(apg: :desc).limit(params[:limit]).offset(params[:offset])
    render json: players
  end
  def by_rpg
    players = Player.order(rpg: :desc).limit(params[:limit]).offset(params[:offset])
    render json: players
  end
  def by_spg
    players = Player.order(spg: :desc).limit(params[:limit]).offset(params[:offset])
    render json: players
  end
  def by_bpg
    players = Player.order(bpg: :desc).limit(params[:limit]).offset(params[:offset])
    render json: players
  end

  def by_team
    players = Player.where(team: [params[:team]]).order(ppg: :desc)
    render json: players
  end
  def find_by_name
    player = Player.find_by_name(params[:name])
    render json: player
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

  def player_comments
    players = find_players
    render json: players.comments, except: %i[created_at updated_at]
  end

  def get_player_like_count
    player = find_players
    render json: player.likes.count
  end

  def find_by_name
    player = Player.find_by_full_name(params[:full_name])
    render json: player
  end


  private

  def find_players
    Player.find(params[:id])
  end
  def createLike
    current_user.likes.create!(params[:player_id])
  end

  def like_params
    params.permit(:player_id, :user_id)
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
