class AddAdminColumnToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :admin, :boolean, default: false
  end
end


# user has one user_roster
# user_roster belongs to user and has_many players
# players has_many user_roster