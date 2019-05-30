var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/data/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/data/friends", function (req, res) {
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

    for (var i = 0; i<friends.length; i++){
      console.log(friends[i].name);
      totDifference = 0;
      conso
    }


  });

}