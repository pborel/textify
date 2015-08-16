class CreateComments < ActiveRecord::Migration
  def change
    create_table  :comments do |t|
      t.integer   :user_id, presence: true
      t.integer   :book_id, presence: true
      t.string    :body, limit: 400
      t.string    :username

      t.timestamps null: false
    end
  end
end
