class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
