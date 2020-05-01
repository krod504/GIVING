var quotes = ["YOU ARE SMART", "YOU CHANGE THE WOLRD", "YOU INSPIRE OTHERS", "YOU MAKE OTHERS SMILE", "YOU ARE DRIVEN",
"YOU ARE KIND", "YOU ARE CREATIVE", "YOU ARE POWERFUL", "YOU ARE SPECIAL", "THERE IS NO ONE BETTER AT BEING YOU THEN YOU!",
"YOU CAN DO ANYTHING YOUR HEART DESIRES", "YOU ARE FUNNY", "YOU MAKE A DIFFERENCE","YOU HAVE A KIND HEART", "YOU ARE TALENTED" ]
var button = $('button');
var quotehere = $('.facthere');

button.on('click', randomizer);

function randomizer(){
  event.preventDefault();
  var random = Math.floor(Math.random()*(quotes.length-1));
  var newquote = quotes[random];
  quotehere.text(newquote);
}
