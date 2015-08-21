class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.integer :playlist_id
      t.string :title
      t.string :description
      t.string :audio_link_mpg
      t.string :author
      t.string :photo_url

      t.timestamps null: false
    end
  end
end
