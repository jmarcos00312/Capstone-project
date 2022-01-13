class AddPlayersToRoster < ActiveRecord::Migration[6.1]
  def change
    add_column :user_rosters, :player_id, :integer, array: true, default:[]
  end
end
