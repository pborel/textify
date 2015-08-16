class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :user_id, presence: true
      t.string  :title, presence: true, limit: 120

      t.timestamps null: false
    end
  end
end
