class RemoveName < ActiveRecord::Migration[6.1]
  def change
    remove_column :create_user_rosters, :name
  end
end
