var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://stackoverflow.com/questions/16507222/create-json-object-dynamically-via-javascript-without-concate-strings";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $(".answercell code").html();

    console.log(temperature);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
