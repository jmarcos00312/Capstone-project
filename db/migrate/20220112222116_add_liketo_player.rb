class AddLiketoPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :likeCount, :integer, default: 0
  end
end
