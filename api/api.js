var XMLHttpRequest = require("xhr2").XMLHttpRequest;

var search = process.argv.splice(2).join(" "),
url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&profile=strict&format=json";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhr.responseText);

    var title   = data[1],
    	  intro   = data[2],
    	  link    = data[3],
    	  results = {};

    for (var i = 0; i < title.length; i++) {
      results[i + 1] = {"Title": title[i], "Intro": intro[i], "Link": link[i]}; 	
    }
    
    if (Object.keys(results).length === 0) {
      console.log("No results found for your search. Try searching a different word.")
    } else {
      console.log(results);
  	}
  }
};

xhr.open('GET', url, true);
xhr.send();