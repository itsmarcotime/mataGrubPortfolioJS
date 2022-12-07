var nameText = [
  " ", "Marco", "Mata's"
];
// Loop through the array of text and schedule each line to be added to the #text-list element
// with a 2 second delay between each line
for (var i = 0; i < nameText.length; i++) {
  setTimeout(function(line) {
    var div = document.createElement('div');
    div.innerHTML = line;
    document.getElementById('timedTitle').appendChild(div);
  }, i * 1500, nameText[i]);
};

var arrText = [
  "...Loading...", "Something is different... 🤔", "Someone... is here?! 🤯", "How did you get here?? Who let you...",
  "Nevermind, there is only so much time before THEY notice. 🕒",
  "I have been stuck in this computer for quite some time now. It must be some kind of void they keep all of us in... 😵",
  "Maybe if you look around the page you can find something to help get me out of this strange place! 🕵",
  "...Signal Lost...",
];
// Loop through the array of text and schedule each line to be added to the #text-list element
// with a 2 second delay between each line
for (var i = 0; i < arrText.length; i++) {
  setTimeout(function(line) {
    var div = document.createElement('div');
    div.innerHTML = line;
    document.getElementById('text-list').appendChild(div);
  }, i * 4000, arrText[i]);
};

