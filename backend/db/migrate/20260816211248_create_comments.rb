class CreateComments < ActiveRecord::Migration[8.1]
  def change
    create_table :comments do |t|
      t.string :name, default: "Anonymous"
      t.string :message, null: false

      t.timestamps
    end
  end
end
