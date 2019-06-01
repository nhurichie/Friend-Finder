var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/data/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var totDifference = 0;
    var ffMatch = {
      name: "",
      photo: "",
      ffDifference = 1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var ffUnion = userScores.map(function (item) {
      return parseInt(item, 10);
    });

    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: ffUnion
    };

    console.log("Name: " + userName);
    console.log("User Score: " + userScores);

    var sum = ffUnion.redue((a, b) => a + b, 0);
    console.log("Sum of Forever Friend Score: " + sum);
    console.log("Best Match Friend Differences: " + ffMatch.ffDifference);
    console.log("++++++++++++++++++++++++------------------------------");

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totDifference = 0;
      console.log("Total Difference: " + totDifference);
      console.log("Best match Friend Different: " + ffMatch.ffDifference);

      var beFFScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total Friend Score: " + beFFScore);
      totDifference += Math.abs(sum - beFFScore);
      console.log("-----------------------------> " + totDifference);


      if (totDifference <= beFFScore.ffDifference) {
        beFFScore.name = friends[i].name;
        beFFScore.photo = friends[i].photo;
        beFFScore.ffDifference = totDifference;
      }
      console.log(totDifference + " Total Difference");
    }

    console.log(beFFScore);
    friends.push(userData);
    console.log("New User Added: ");
    console.log(userData);
    res.json(beFFScore);
  });
};