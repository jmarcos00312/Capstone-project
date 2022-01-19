class Api::LikesController < ApplicationController
  def create
    liked = Like.create!(like_params)
    current_user.Like.create!(like_params)
    render json: liked
  end

  def destroy
    not_like_anymore = Like.find(params[:id])
    not_like_anymore.destroy
    head :no_content
  end

  private

  def like_params
    params.permit(:player_id, :user_id)
  end
end
