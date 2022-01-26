require 'csv'
Player.destroy_all
NbaTeam.destroy_all
User.destroy_all

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

NbaTeam.create(name: 'Atlanta Hawks', team_abbr: 'ATL', imageURL: 'https://i.imgur.com/i1TZWrw.png')
NbaTeam.create(name: 'Brooklyn Nets', team_abbr: 'BKN', imageURL:'https://i.imgur.com/lDrufi8.png')
NbaTeam.create(name: 'Boston Celtics', team_abbr: 'BOS', imageURL:'https://i.imgur.com/dXFfRqJ.png')
NbaTeam.create(name: 'Charlotte Hornets', team_abbr: 'CHA', imageURL:'https://i.imgur.com/hW7G08N.png')
NbaTeam.create(name: 'Chicago Bulls', team_abbr: 'CHI', imageURL:'https://i.imgur.com/Nulx9UE.png')
NbaTeam.create(name: 'Cleaveland Cavaliers', team_abbr: 'CLE', imageURL:'https://i.imgur.com/Mh8KHoh.png')
NbaTeam.create(name: 'Dallas Mavericks', team_abbr: 'DAL', imageURL:'https://i.imgur.com/OGDsVKN.png')
NbaTeam.create(name: 'Denver Nuggets', team_abbr: 'DEN', imageURL:'https://i.imgur.com/qdYVFSV.png')
NbaTeam.create(name: 'Detroit Pistons', team_abbr: 'DET', imageURL:'https://i.imgur.com/XKpV0aX.png')
NbaTeam.create(name: 'Golden State Warriors', team_abbr: 'GSW', imageURL:'https://i.imgur.com/lPL67qh.png')
NbaTeam.create(name: 'Houston Rockets', team_abbr: 'HOU', imageURL:'https://i.imgur.com/nrigz17.png')
NbaTeam.create(name: 'Indiana Pacers', team_abbr: 'IND', imageURL:'https://i.imgur.com/9MYESXY.png')
NbaTeam.create(name: 'Los Angeles Clippers', team_abbr: 'LAC', imageURL:'https://i.imgur.com/3WRLhVA.png')
NbaTeam.create(name: 'Los Angeles Lakers', team_abbr: 'LAL', imageURL:'https://i.imgur.com/UWEGaGk.png')
NbaTeam.create(name: 'Memphis Grizzlies', team_abbr: 'MEM', imageURL:'https://i.imgur.com/8A1a3zw.png')
NbaTeam.create(name: 'Miami Heat', team_abbr: 'MIA', imageURL:'https://i.imgur.com/GpjJXPd.png')
NbaTeam.create(name: 'Milwaukee Bucks', team_abbr: 'MIL', imageURL:'https://i.imgur.com/DphT0BT.png')
NbaTeam.create(name: 'Minnesota Timberwolves', team_abbr: 'MIN', imageURL:'https://i.imgur.com/037yAWf.png')
NbaTeam.create(name: 'New Orleans Pelicans', team_abbr: 'NOP', imageURL:'https://i.imgur.com/vB0C6GZ.png')
NbaTeam.create(name: 'New York Knicks', team_abbr: 'NYK', imageURL:'https://i.imgur.com/5sMoAPA.png')
NbaTeam.create(name: 'Oklahoma City Thunder', team_abbr: 'OKC', imageURL:'https://i.imgur.com/fsQiSlP.png')
NbaTeam.create(name: 'Orlando Magic', team_abbr: 'ORL', imageURL:'https://i.imgur.com/H7YpO5e.png')
NbaTeam.create(name: 'Philadelphia 76ers', team_abbr: 'PHI', imageURL:'https://i.imgur.com/LfVzjKN.png')
NbaTeam.create(name: 'Phoenix Suns', team_abbr: 'PHX', imageURL:'https://i.imgur.com/hyi60nj.png')
NbaTeam.create(name: 'Portland Trail Blazers', team_abbr: 'POR', imageURL:'https://i.imgur.com/IfjmjFJ.png')
NbaTeam.create(name: 'Sacremento Kings', team_abbr: 'SAC', imageURL:'https://i.imgur.com/WgHr0BH.png')
NbaTeam.create(name: 'San Antonio Spurs', team_abbr: 'SAS', imageURL:'https://i.imgur.com/yXLRt2y.png')
NbaTeam.create(name: 'Toronto Raptors', team_abbr: 'TOR', imageURL:'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1024px-Toronto_Raptors_logo.svg.png')
NbaTeam.create(name: 'Utah Jazz', team_abbr: 'UTA', imageURL:'https://i.imgur.com/H3ZIR44.png')
NbaTeam.create(name: 'Washington Wizards', team_abbr: 'WAS', imageURL:'https://i.imgur.com/KAX48d0.png')

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
  # byebug
)
