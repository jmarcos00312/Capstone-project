class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :full_name
      t.string :team
      t.string :position
      t.float :age
      t.integer :gp
      t.float :mpg
      t.integer :FTa
      t.float :FTper
      t.integer :twoPA
      t.float :twoPer
      t.integer :threePa
      t.string :threePer
      t.float :ppg
      t.float :rpg
      t.float :apg
      t.float :spg
      t.float :bpg
      t.float :topg
      t.float :versatilityIndex

      t.timestamps
    end
  end
end
