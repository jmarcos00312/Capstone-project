class AddIdolizeByInPlayers < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :idolize_by, :integer
  end
end
