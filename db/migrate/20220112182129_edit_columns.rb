class EditColumns < ActiveRecord::Migration[6.1]
  def change
    change_column_default :players, :fgp, 0
    change_column_default :players, :threePP, 0
    change_column_default :players, :twoPA, 0
    change_column_default :players, :twoPP, 0
    change_column_default :players, :ftp, 0
    change_column :players, :likeCount, :integer
    change_column_default :players, :likeCount, 0
  end
end
