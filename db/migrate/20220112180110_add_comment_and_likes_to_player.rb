class AddCommentAndLikesToPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :comments_id, :integer
    add_column :players, :likeCount, :integer, default: 0
  end
end
