class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.integer :user_id
      t.string  :title, presence: true, limit: 120
      t.string  :description, presence: true, limit: 3000
      # t.string  :languages, presence: true, limit: 250
      t.string  :audio_link, limit: 200

      t.timestamps null: false
    end
  end
end
