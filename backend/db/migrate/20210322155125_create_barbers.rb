class CreateBarbers < ActiveRecord::Migration[6.1]
  def change
    create_table :barbers do |t|
      t.string :name
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
