class CreateUserRosters < ActiveRecord::Migration[6.1]
  def change
    create_table :user_rosters do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :players

      t.timestamps
    end
  end
end
