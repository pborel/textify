# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'admin', password_digest: '123', email: 'admin@admin.com', date_of_birth: '12-12-90', name:'name')

Playlist.create(user_id: 1, title: "My Books")
Playlist.create(user_id: 1, title: "English 352")
Playlist.create(user_id: 1, title: "Spanish 231")
Playlist.create(user_id: 1, title: "Favorites")

Book.create(playlist_id: 1, title: "My Experience as an Executioner", description: "From 1884 until 1891, James Berry was an executioner. In this time he carried out 131 hangings. In this memoir he writes about the methods he used, and the final moments of some of those he executed.", author: "James Berry", photo_url: "/executioner.jpg", audio_link_mpg: "")
