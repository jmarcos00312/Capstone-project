class Api::SessionsController < ApplicationController
  # skip_before_action :authenticate_user, only: %i[create logout]
  # skip_before_action :authorize, only: :create
# skip_before_action :authenticate_user, only: [:create]
  def create
    user = User.find_by!(username: params[:username])
    # byebug
    if user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {message: 'invalid credentials'}, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
  end
end
