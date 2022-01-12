class CreateUserRosters < ActiveRecord::Migration[6.1]
  def change
    create_table :user_rosters do |t|
      t.string :name
      t.references :player, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
