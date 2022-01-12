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

ActiveRecord::Schema.define(version: 2022_01_12_173736) do

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

  create_table "favorite_players", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_favorite_players_on_player_id"
    t.index ["user_id"], name: "index_favorite_players_on_user_id"
  end

  create_table "favorite_teams", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "nba_team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nba_team_id"], name: "index_favorite_teams_on_nba_team_id"
    t.index ["user_id"], name: "index_favorite_teams_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "likes"
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
  end

  create_table "user_rosters", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "players"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["user_id"], name: "index_user_rosters_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "players"
  add_foreign_key "comments", "users"
  add_foreign_key "favorite_players", "players"
  add_foreign_key "favorite_players", "users"
  add_foreign_key "favorite_teams", "nba_teams"
  add_foreign_key "favorite_teams", "users"
  add_foreign_key "likes", "players"
  add_foreign_key "likes", "users"
  add_foreign_key "user_rosters", "users"
end
