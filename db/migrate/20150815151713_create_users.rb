class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :picture
      t.string :username, presence: true
      t.string :name, presence: true
      t.string :date_of_birth
      t.string :password_hash, presence: true
      t.string :gender
      t.string :location
      t.string :email, presence: true
      t.timestamps null: false
    end
  end
end
