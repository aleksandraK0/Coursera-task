(function () {
  var byeSpeaker = {};
  var speakWord = "Good Bye ";
  byeSpeaker.sayGoodBye = function (name) {
    console.log(speakWord + name);
  };

  window.byeSpeaker = byeSpeaker;
})();
