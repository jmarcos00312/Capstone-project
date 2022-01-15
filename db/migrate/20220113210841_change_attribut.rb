class ChangeAttribut < ActiveRecord::Migration[6.1]
  def change
    remove_column :create_user_rosters, :player_id
    add_column :create_user_rosters, :player_id, :integer
  end
end
