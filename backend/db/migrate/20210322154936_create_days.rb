class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :num_day
      t.string :month
      t.string :year
      t.integer :open_hour
      t.string :open_minutes
      t.string :open_ampm
      t.integer :close_hour
      t.string :close_minutes
      t.string :close_ampm

      t.timestamps
    end
  end
end
