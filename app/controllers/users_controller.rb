class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: %i[create me]

  def index
    render json: User.all
  end

  def create
    user = User.create!(user_params)
    player = Player.find_by(full_name: user.favorite_player)
    team = NbaTeam.find_by(name: user.favorite_team)
    if player && team
      session[:user_id] = user.id
      render json: user
    else
      user.destroy
      render json: 'favorite player or team is does not exist',
             status: :unprocessable_entity
    end
  end

  def me
    if current_user
      render json: current_user, status: :ok
    else
      render json: 'Not authenticated', status: :unauthorized
    end
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :username,
      :email,
      :password,
      :favorite_player,
      :favorite_team,
    )
  end
end
