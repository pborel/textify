var LeftNav = React.createClass({
  render: function() {
    return (
      <div id="layout">
        <div id="menu">
          <div class="pure-menu">
            <ul class="pure-menu-list">
              <li class="pure-menu-item pure-menu-selected">
                <a href="/users/1/playlists" class="pure-menu-link">My Books</a>
              </li>
              <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                <a href="#" id="menuLink1" class="pure-menu-link">Playlists</a>
                <% if playlists.count > 1 %>
                  <ul class="pure-menu-children">
                    <% playlists.each do |playlist| %>
                      <li class="pure-menu-item"><a href="<%= user_playlist_path(playlist.user_id, playlist.id) %>" class="pure-menu-link"><%= playlist.title %></a></li>
                    <% end %>
                  </ul>
                <% end %>
              </li>
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">Trending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});
