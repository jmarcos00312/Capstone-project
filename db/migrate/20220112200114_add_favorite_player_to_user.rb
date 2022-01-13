class AddFavoritePlayerToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :favorite_player, :string
  end
end
