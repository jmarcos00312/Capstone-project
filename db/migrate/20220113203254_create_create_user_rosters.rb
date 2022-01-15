class CreateCreateUserRosters < ActiveRecord::Migration[6.1]
  def change
    create_table :create_user_rosters do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :player_id
      t.string :integer

      t.timestamps
    end
  end
end
