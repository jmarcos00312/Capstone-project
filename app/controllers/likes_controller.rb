class LikesController < ApplicationController
  def create
    liked = Like.create!(like_params)
    render json: liked
  end

  private

  def like_params
    params.permit(:player_id, :user_id)
  end
end
