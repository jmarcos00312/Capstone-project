require 'csv'
Player.destroy_all
NbaTeam.destroy_all

puts 'seeding players'
csv_text = File.read('lib/tasks/seed/twentyOne_players.csv')
csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')
csv.each do |t|
  Player.create(
    {
      full_name: t['full_name'],
      pos: t['pos'],
      age: t['age'],
      team: t['team'],
      games: t['games'],
      games_started: t['games_started'],
      mpg: t['mpg'],
      fg: t['fg'],
      fga: t['fga'],
      fgp: t['fgp'],
      threeP: t['threeP'],
      threePA: t['threePA'],
      twoP: t['twoP'],
      twoPP: t['twoPP'],
      efg: t['efg'],
      ft: t['ft'],
      fta: t['fta'],
      ftp: t['ftp'],
      orb: t['orb'],
      drb: t['drb'],
      rpg: t['rpg'],
      apg: t['apg'],
      spg: t['spg'],
      bpg: t['bpg'],
      tpg: t['tpg'],
      fouls: t['fouls'],
      ppg: t['ppg'],
      threePP: t['threePP'],
    },
  )
end

puts 'seeding teams'

NbaTeam.create(name: 'Atlanta Hawks', team_abbr: 'ATL')
NbaTeam.create(name: 'Brooklyn Nets', team_abbr: 'BKN')
NbaTeam.create(name: 'Boston Celtics', team_abbr: 'BOS')
NbaTeam.create(name: 'Charlotte Hornets', team_abbr: 'CHA')
NbaTeam.create(name: 'Chicago Bulls', team_abbr: 'Chi')
NbaTeam.create(name: 'Cleaveland Cavaliers', team_abbr: 'Cle')
NbaTeam.create(name: 'Dallas Mavericks', team_abbr: 'DAL')
NbaTeam.create(name: 'Denver Nuggets', team_abbr: 'DEN')
NbaTeam.create(name: 'Detroit Pistons', team_abbr: 'DET')
NbaTeam.create(name: 'Golden State Warriors', team_abbr: 'GSW')
NbaTeam.create(name: 'Houston Rockets', team_abbr: 'HOU')
NbaTeam.create(name: 'Indiana Pacers', team_abbr: 'IND')
NbaTeam.create(name: 'Los Angeles Clippers', team_abbr: 'LAC')
NbaTeam.create(name: 'Los Angeles Lakers', team_abbr: 'LAL')
NbaTeam.create(name: 'Memphis Grizzlies', team_abbr: 'MEM')
NbaTeam.create(name: 'Miami Hear', team_abbr: 'MIA')
NbaTeam.create(name: 'Milwaukee Bucks', team_abbr: 'MIL')
NbaTeam.create(name: 'Minnesota Timberwolves', team_abbr: 'MIN')
NbaTeam.create(name: 'New Orleans Pelicans', team_abbr: 'NOP')
NbaTeam.create(name: 'New York Knicks', team_abbr: 'NYK')
NbaTeam.create(name: 'Oklahoma City Thunder', team_abbr: 'OKC')
NbaTeam.create(name: 'Orlando Magic', team_abbr: 'ORL')
NbaTeam.create(name: 'Philadelphia 76ers', team_abbr: 'PHI')
NbaTeam.create(name: 'Phoenix Suns', team_abbr: 'PHX')
NbaTeam.create(name: 'Portland Trail Blazers', team_abbr: 'POR')
NbaTeam.create(name: 'Sacremento Kings', team_abbr: 'SAC')
NbaTeam.create(name: 'San Antonio Spurs', team_abbr: 'SAS')
NbaTeam.create(name: 'Toronto Raptors', team_abbr: 'TOR')
NbaTeam.create(name: 'Utah Jazz', team_abbr: 'UTA')
NbaTeam.create(name: 'Washington Wizards', team_abbr: 'Was')

puts 'creating users'

User.create(
  first_name: 'Jeremiah',
  last_name: 'Marcos',
  username: 'jmarcos',
  password_digest: BCrypt::Password.create('jeremiah01'),
  email: 'jeremiah@gmail.com',
  favorite_player: 'Damian Lillard',
  favorite_team: 'Los Angeles Lakers',
  admin: true,
)
User.create(
  first_name: 'other',
  last_name: 'user',
  username: 'other_user',
  password_digest: BCrypt::Password.create('jeremiah01'),
  email: 'otherUser@gmail.com',
  favorite_player: 'Devin Booker',
  favorite_team: 'Portland Trail Blazers',
)
