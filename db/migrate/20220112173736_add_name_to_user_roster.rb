class AddNameToUserRoster < ActiveRecord::Migration[6.1]
  def change
    add_column :user_rosters, :name, :string
  end
end
