class CreateFavoriteTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_teams do |t|
      t.references :user, null: false, foreign_key: true
      t.references :nba_team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
