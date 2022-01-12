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

ActiveRecord::Schema.define(version: 2022_01_12_012038) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "branded_items", force: :cascade do |t|
    t.bigint "brand_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["brand_id"], name: "index_branded_items_on_brand_id"
    t.index ["item_id"], name: "index_branded_items_on_item_id"
  end

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "full_names", force: :cascade do |t|
    t.string "team"
    t.string "position"
    t.float "age"
    t.integer "gp"
    t.float "mpg"
    t.integer "FTa"
    t.float "FTper"
    t.integer "twoPA"
    t.float "twoPer"
    t.integer "threePa"
    t.string "threePer"
    t.float "ppg"
    t.float "rpg"
    t.float "apg"
    t.float "spg"
    t.float "bpg"
    t.float "topg"
    t.float "versatilityIndex"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "price"
    t.float "rating"
    t.integer "seller_id"
    t.integer "buyer_id"
    t.bigint "brand_id", null: false
    t.boolean "sold", default: false
    t.boolean "sale", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
    t.index ["brand_id"], name: "index_items_on_brand_id"
  end

  create_table "nba_teams", force: :cascade do |t|
    t.string "name"
    t.string "team_abbr"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "full_name"
    t.string "team"
    t.string "position"
    t.float "age"
    t.integer "gp"
    t.float "mpg"
    t.integer "FTa"
    t.float "FTper"
    t.integer "twoPA"
    t.float "twoPer"
    t.integer "threePa"
    t.string "threePer"
    t.float "ppg"
    t.float "rpg"
    t.float "apg"
    t.float "spg"
    t.float "bpg"
    t.float "topg"
    t.float "versatilityIndex"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin"
    t.string "email"
  end

  create_table "watch_lists", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_watch_lists_on_item_id"
    t.index ["user_id"], name: "index_watch_lists_on_user_id"
  end

  add_foreign_key "branded_items", "brands"
  add_foreign_key "branded_items", "items"
  add_foreign_key "items", "brands"
  add_foreign_key "watch_lists", "items"
  add_foreign_key "watch_lists", "users"
end
