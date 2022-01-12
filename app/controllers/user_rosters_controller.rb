class UserRostersController < ApplicationController
  before_action :set_user_roster, only: [:show, :update, :destroy]

  # GET /user_rosters
  def index
    @user_rosters = UserRoster.all

    render json: @user_rosters
  end

  # GET /user_rosters/1
  def show
    render json: @user_roster
  end

  # POST /user_rosters
  def create
    @user_roster = UserRoster.new(user_roster_params)

    if @user_roster.save
      render json: @user_roster, status: :created, location: @user_roster
    else
      render json: @user_roster.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_rosters/1
  def update
    if @user_roster.update(user_roster_params)
      render json: @user_roster
    else
      render json: @user_roster.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_rosters/1
  def destroy
    @user_roster.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_roster
      @user_roster = UserRoster.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_roster_params
      params.require(:user_roster).permit(:user_id, :players)
    end
end
