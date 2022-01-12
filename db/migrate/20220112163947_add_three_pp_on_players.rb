class AddThreePpOnPlayers < ActiveRecord::Migration[6.1]
  def change
    add_column  :players, :threePP, :float
  end
end
