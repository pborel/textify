class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :picture
      t.string :username
      t.string :name
      t.string :date_of_birth
      t.string :password_digest
      t.string :email

      t.timestamps null: false
    end
  end
end
