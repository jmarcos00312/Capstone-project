class CreateNbaTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :nba_teams do |t|
      t.string :name
      t.string :team_abbr

      t.timestamps
    end
  end
end
