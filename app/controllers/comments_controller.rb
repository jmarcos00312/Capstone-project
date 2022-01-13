class CommentsController < ApplicationController
  def index
    render json: Comment.all
  end
  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end
  def show
    render json: find_comments
  end

  def update
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment
  end

  private

  def find_comments
    Comment.find(params[:id])
  end

  def comment_params
    params.permit(:content, :user_id, :player_id)
  end
end
