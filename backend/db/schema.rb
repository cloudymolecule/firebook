# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_22_155054) do

  create_table "appointments", force: :cascade do |t|
    t.string "time"
    t.string "client"
    t.string "barber"
    t.integer "day_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["day_id"], name: "index_appointments_on_day_id"
  end

  create_table "days", force: :cascade do |t|
    t.string "num_day"
    t.string "month"
    t.string "year"
    t.integer "open_hour"
    t.string "open_minutes"
    t.string "open_ampm"
    t.integer "close_hour"
    t.integer "close_minutes"
    t.string "close_ampm"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "days"
end
