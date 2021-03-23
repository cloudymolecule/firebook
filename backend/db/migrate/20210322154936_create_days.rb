class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :date
      t.integer :open_hour
      t.integer :close_hour
      t.string  :barbers

      t.timestamps
    end
  end
end
