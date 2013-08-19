(function() {
  var app, express, path;

  express = require("express");

  path = require("path");

  module.exports = app = express();

  app.use(express["static"](path.resolve(path.join(__dirname, "..", "frontend"))));

  app.get("/posts", function(req, res) {
    var i, j, postsArray, _i;
    postsArray = [];
    for (i = _i = 1; _i <= 10; i = ++_i) {
      postsArray.push({
        _id: i,
        title: "Post #" + i,
        text: ((function() {
          var _j, _results;
          _results = [];
          for (j = _j = 0; 0 <= i ? _j < i : _j > i; j = 0 <= i ? ++_j : --_j) {
            _results.push("test");
          }
          return _results;
        })()).join(" ")
      });
    }
    return res.send(200, postsArray);
  });

  if (require.main === module) {
    app.listen(3000);
  }

}).call(this);
