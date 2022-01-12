class Api::SessionController < ApplicationController
  # skip_before_action :authenticate_user, only: %i[create logout]

  def create
    user = User.find_by!(username: params[:username])
    if user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: 'invalid credentials' }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
  end
end
