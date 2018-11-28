---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

        <div class="playerContainer" id="playerContainer">
          <div id="player">
            <button id="videoButton" onclick="if(!video_opened){openVideo();}else{closeVideo();}"><i class="material-icons">local_movies</i></button>
            <button id="playlistButton" onclick="if(!opened){openPlaylist();}else{closePlaylist();}"><i class="material-icons">queue_music</i></button>
            <button id="playButton" onclick="if(!playing){play();}else{pause();}"><i class="material-icons" id="player-icon">play_arrow</i></button>
            <div id="myProgress">
              <div id="myBar"></div>
            </div>
            <span class="t" id="timeCount">8:58</span>
            <div>
              <audio height="0" id="audio" onended="if(n!=tracks.length-1){n++;newTrack();play();}else{n=0;newTrack();pause();}" src="https://freealise-181308.appspot.com/mp3/cant-walk-away.mp3" width="0">
                <embed src="https://freealise-181308.appspot.com/mp3/album.mp3" type="audio/mpeg" width="256" height="32">
              </audio>
            </div>
          </div>
          <div id="playlist">
            <ol>
              <li><a class="currentTrack" href="#" id="track0" onclick="n=0;newTrack();play();">Can't Walk Away <span class="t">3:14</span></a></li>
              <li><a href="#" id="track1" onclick="n=1;newTrack();play();">Fools' Paradise <span class="t">3:31</span></a></li>
            </ol>
          </div>
          <div id="videoContainer">
            <iframe allow="autoplay; encrypted-media" allowfullscreen="1" allowtransparency="allowtransparency" frameborder="0" height="100%" id="video" name="video" src="about:blank" width="100%"></iframe>
          </div>
          <img src="https://assets-cdn.github.com/images/icons/emoji/octocat.png" width="256" height="256" id="cover">
          <script src="https://freealise-181308.appspot.com/js/player.js" type="text/javascript"></script>
        </div>
        
        <div id="payment">
          <div id="giveawayPurpose">
            <div><b>Giveaway</b></div><br/>
            Enter your credit or debit card details and your chosen payment, get monthly updates and download the album in lossless quality with lyrics and cover art when it is released.
            <p><button onclick="document.getElementById('payForm').style.display='block';">Pay now</button></p>
          </div>
          <div id='giveawayExpense'>
            The money will be spent on recording in a UK studio, online and CD distribution, event management and promotion.
          </div>
          <div id="graph">
            <button id="queueButton" onclick="if(!q_opened){queue();openQueue();}else{closeQueue();}"><i class='material-icons'>people</i></button>
            <div id="giveProgress">
              <div id="giveBar">
                <div id="amountGiven">
                  £0
                </div>
              </div>
            </div>

            <div id="recurring">monthly</div>
            <div id="amountNeeded">£375</div>

            <div id="queue"></div>
            <script type='text/javascript' src='https://freealise-181308.appspot.com/js/giveaway.js' onload='getSum();'></script>
          </div>
        </div>

        <div id='payForm'>
          <div id='payFormOverlay' onclick="this.parentNode.style.display='none';"></div>
          <div id='payFormContainer'>
            <script src='https://js.stripe.com/v3/'></script>
            <form action='https://freealise-181308.appspot.com/' id='payment-form' method='get' target='_top'>
              <b>* Email</b> <input class='pay-form follow-by-email-address' expr:placeholder='data:messages.emailAddress' id='stripeEmail' name='stripeEmail' size='16' type='email' value=''/><br/>
              <input name='stripeTokenType' type='hidden' value='card'/>
                <b>* &#163;</b> <a href='https://www.google.ru/search?q=£' id='rateLink' target='_blank'>See current rate</a>
              <input autocomplete='off' class='follow-by-email-address' id='amount' name='amount' placeholder='Payment' size='4' type='text' value='6.99'/><div id='costPrice'>Your amount has to be equal or higher than &#163;0.01</div>
                <div class='form-row'>
                  <label for='card-element'>
                      Card
                  </label>
                  <div id='card-element'>
                      <!-- A Stripe Element will be inserted here. -->
                  </div>
                  <!-- Used to display form errors. -->
                  <div id='card-errors' role='alert'></div>
                  <button class='flat-button submit-button follow-by-email-submit' id='pay-button'>Pay now and save your card</button>
                <div style='float:left;font-size:12px;font-weight:bold'>* Required</div>
                <div style='float:right;font-size:12px;'>Powered by <a href='https://stripe.com' target='_blank'>Stripe</a></div>
              </div>
            </form>
            <script src='https://freealise-181308.appspot.com/js/stripe.js' type='text/javascript'></script>
          </div>
        </div>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>


Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
