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

ActiveRecord::Schema.define(version: 2022_01_22_012308) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.bigint "user_id", null: false
    t.bigint "player_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_comments_on_player_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "create_user_rosters", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "player_id"
    t.index ["user_id"], name: "index_create_user_rosters_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "player_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_likes_on_player_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "nba_teams", force: :cascade do |t|
    t.string "name"
    t.string "team_abbr"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "imageURL"
  end

  create_table "players", force: :cascade do |t|
    t.string "full_name"
    t.string "pos"
    t.integer "age"
    t.string "team"
    t.integer "games"
    t.integer "games_started"
    t.float "mpg"
    t.float "fg"
    t.float "fga"
    t.float "fgp"
    t.float "threeP"
    t.float "threePA"
    t.float "twoP"
    t.float "twoPA"
    t.float "twoPP"
    t.float "efg"
    t.float "ft"
    t.float "fta"
    t.float "ftp"
    t.float "orb"
    t.float "drb"
    t.float "rpg"
    t.float "apg"
    t.float "spg"
    t.float "bpg"
    t.float "tpg"
    t.float "fouls"
    t.float "ppg"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "threePP"
    t.integer "likeCount", default: 0
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "favorite_player"
    t.string "favorite_team"
    t.boolean "admin", default: false
  end

  add_foreign_key "comments", "players"
  add_foreign_key "comments", "users"
  add_foreign_key "create_user_rosters", "users"
  add_foreign_key "likes", "players"
  add_foreign_key "likes", "users"
end
