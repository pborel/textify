var Container = React.createClass({
  render: function() {
    return (
      <SideNav playlists={this.props.playlists} />

      <div id="page_container">
        <h1><%= @playlists.find(params[:id] || 1).title %></h1>

        <ul id="book_list">
          <% @playlists.find(params[:id] || 1).books.each do |t| %>
          <li id="<%= t.id %>" class="outer">

            <table class="book pure-table pure-table-horizontal">
             <tbody>
              <tr>
               <td>
                <a href="/users/<%= params[:user_id] %>/playlists/<%= t.playlist_id %>/books/<%= t.id %>"><img src="<%= t.photo_url %>" class="book-thumbnail"></a></td>
                <td>
                  <div class="title"><a href="/users/<%= params[:user_id] %>/playlists/<%= t.playlist_id %>/books/<%= t.id %>"><%= t.title %></a></div>
                  <div class="author">by <%= t.author %></div></td>
                  <td class="audio-container">
                    <audio controls class="audio">
                      <source src="<%= t.audio_link_mpg %>" type="audio/mpeg" class ="audiobox">
                        Your browser does not support the audio element.
                      </audio>
                    </td>
                    <td class="star">

                      <ul class="nav nav-pills">
                       <li class="dropdown">
                         <a href="#" id="menuLink1" data-toggle="dropdown" class="dropdown-toggle">&nabla;</a>
                         <ul class="dropdown-menu" id="menu1">
                           <li>
                             <% @playlists.each do |t| %>


                             <form action="/users/<%= t.user_id %>/playlists/<%= t.id %>/books" method="post">
                               <input type="hidden" name="author" value="<%= t.books %>">
                               <input type="hidden" name="photo_url">
                               <input type="hidden" name="audio_link_mpg">
                               <input type="hidden" name="title">
                               <input type="hidden" name="description">
                               <li class="pure-menu-item">
                                 <input class="pure-menu-link" type="submit" value="<%= t.title %>">
                               </li>
                             </form>
                             <% end %>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </td>
                 </tr>
               </tbody>
             </table>
           </li>
           <% end %>
         </ul>

       </div>
    )
  }
})
