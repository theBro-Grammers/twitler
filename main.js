//var counter = 0
$(document).ready(function(){
  var $body = $('body');
  var $main = $('div#main');
  $main.html('');
  var $nav = $('<nav id="nav"></nav>');
  $nav.prependTo($body)
  $nav.append('<img src="logo.png">')
  $nav.append('<button id="refresh">Refresh</button');
  generateTweets();
  $('button#refresh').on('click',function(){
    $main.html('');
    generateTweets();
  })

  function generateTweets(){
    var index = streams.home.length - 1;
//    counter++
    while(index >= 0){
      var tweet = streams.home[index];
      var datePost = tweet.created_at.toLocaleDateString('en-EN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'2-digit' , minute:'2-digit', second:'2-digit'});

      var $tweet = $('<div class="tweetBox"></div>');

      $tweet.append("<div class='userDiv'> @" + tweet.user + "</div>") ;     
      $tweet.append("<div class='dateDiv'> " + datePost + "</div>") ; 
      $tweet.append("<div class='messageDiv'> " + tweet.message + "</div>") ; 
      $tweet.appendTo($main);


      index -= 1;
    }


  }
});

