var TopNav = React.createClass({
  render: function() {
    return (
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="/users/<%= current_user.id %>/playlists" class="pure-menu-link">Home</a></li>
        <li class="pure-menu-item"><a href="/users/<%= current_user.id %>" class="pure-menu-link">Profile</a></li>
        <li class="pure-menu-item"><a href="/logout" class="pure-menu-link">Logout</a></li>
      </ul>
    )
  }
})
