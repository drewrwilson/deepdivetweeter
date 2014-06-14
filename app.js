var Twit = require('twit')
var T = new Twit(require('./config.js'))
var jargon = require('deepdive')

// maybe add cowsay to the tweet later
//var cowsay = require('cowsay')
var random = [];
var madLib = [];

// This function lets us call pick() on any array to get a random element from it.
Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

//This function lets us call pickRemove() on any array to get a random element from it, then remove that element so we can't get it again.
Array.prototype.pickRemove = function() {
  var index = Math.floor(Math.random()*this.length);
  return this.splice(index,1)[0];
};


//returns a string with all white spaces removed
function removeWhiteSpace (words) {
  return words.replace(/\s/g,'')
}
function tweet() {
  //generate a random deepdive jargon word
  myTweet = jargon.random();
  random[0] = jargon.random();
  random[1] = jargon.random();
  random[2] = jargon.random();

  madLib[0] = 'It is very important that before we use the ' + random[0] + ', we first need to make sure that our ' + random[1] + ' is fully integrated with ' + random[2]; '.'
  madLib[1] = 'In the 21st century it is vital that there be ' + random[0] + ' included in every ' + random[1] + '. Otherwise there will be no ' + random[2]; '.'
  madLib[2] = 'Who was it who said that a ' + random[0] + ' is the first step towards ' + random[1] + '? I wonder if they considered the implications of the ' + random[2]; '.'
  madLib[3] = 'The ' + random[0] + ' is nothing without ' + random[1] + '!'
  madLib[4] = 'If I hear about one more ' + random[0] + ', I am going to seriously ' + random[1] + '.'
  madLib[5] = 'The ' + random[0] + ' is more likely to involve ' + random[1] + ' than you may think.'
  madLib[6] = 'My ' + random[0] + ' can kick your ' + random[1] + '\'s butt.'
  madLib[7] = 'Without a significant ' + random[0] + ', ' + random[1] + ' is almost worthless.'
  madLib[8] = 'Recipe for success: take a big spoonful of ' + random[0] + ', sprinkle in ' + random[1] + ', and don\'t forget a hint of ' + random[2] + '. Now you\'re cooking!'
  madLib[9] = 'Recipe for success: take a big spoonful of ' + random[0] + ', sprinkle in ' + random[1] + ', and don\'t forget a hint of ' + random[2] + '. What could go wrong?'
  madLib[10] = 'Your project could always use a little more ' + random[0] + ' or maybe some ' + random[1] + '. So go out there and make it happen.'
  madLib[11] = 'Your project could always use a little more ' + random[0] + ' and a lot more ' + random[1] + '. Got it, champ?'
  madLib[11] = '' + random[0] + ' is best in conjunction with ' + random[1];

  myTweet = madLib.pick();

  //include a hashtag 10% of the time
  randomNumber = Math.floor(Math.random()*100);  //random number between 0-100
  if (randomNumber <= 10) {
    myTweet += ' #' + removeWhiteSpace(jargon.random());
  }


  console.log(myTweet);

  //put it into the console
  //console.log(myTweet);

  //tweet it
  T.post('statuses/update', { status: myTweet }, function(err, reply) {
          if (err) {
            console.log('error:', err);
          }
          else {
            console.log('reply:', reply);
          }
  });

}

//tweet once when the script starts
tweet()

//every 4 hours, tweet again
setInterval(function () {
  try {
    tweet();
  }
  catch (e) {
    console.log(e);
  }
}, 1000 * 60 * 60 * 4);
