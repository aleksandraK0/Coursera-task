(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (i in names) {
    var firstLetter = names[i].toLowerCase().charAt(0);
    if (firstLetter == "j") {
      byeSpeaker.sayGoodBye(names[i]);
    } else {
      helloSpeaker.sayHello(names[i]);
    }
  }
})();
