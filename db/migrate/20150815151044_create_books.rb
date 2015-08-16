class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.integer :playlist_id
      t.string  :title, presence: true, limit: 120
      t.string  :description, presence: true, limit: 3000
      # t.string  :languages, presence: true, limit: 250
      t.string  :audio_link_mpg, presence: true
      t.string  :author
      t.string  :photo_url

      t.timestamps null: false
    end
  end
end
