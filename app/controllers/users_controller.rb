class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
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
    params.permit(:first_name, :last_name, :username, :email, :password, :favorite_player, :favorite_team)
  end
end
