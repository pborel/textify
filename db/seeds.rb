User.create(username: 'admin', password_hash: '123', email: 'admin@admin.com')

Book.create(user_id: 1, title: "My Experience as an Executioner", description: "From 1884 until 1891, James Berry was an executioner. In this time he carried out 131 hangings. In this memoir he writes about the methods he used, and the final moments of some of those he executed.", author: "James Berry", photo_url: "/executioner.jpg" )
