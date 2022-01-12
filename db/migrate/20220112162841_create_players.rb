class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :full_name
      t.string :pos
      t.integer :age
      t.string :team
      t.integer :games
      t.integer :games_started
      t.float :mpg
      t.float :fg
      t.float :fga
      t.float :fgp
      t.float :threeP
      t.float :threePA
      t.float :twoP
      t.float :twoPA
      t.float :twoPP
      t.float :efg
      t.float :ft
      t.float :fta
      t.float :ftp
      t.float :orb
      t.float :drb
      t.float :rpg
      t.float :apg
      t.float :spg
      t.float :bpg
      t.float :tpg
      t.float :fouls
      t.float :ppg

      t.timestamps
    end
  end
end
