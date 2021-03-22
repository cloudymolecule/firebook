class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :time
      t.string :client
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
