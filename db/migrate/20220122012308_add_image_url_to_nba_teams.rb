class AddImageUrlToNbaTeams < ActiveRecord::Migration[6.1]
  def change
    add_column :nba_teams, :imageURL, :string
  end
end
