/*
 * Specify the information about our spreadsheet
 */
var spreadsheet_id = "0AgIgT1G7qZ2adHhDVkczVGRVeWlQMVB1N1l4NjZEZ2c",
worksheet_id = "od6";

/*
 * Creates a script tag in the page that loads in the 
 * JSON feed for the specified spreadsheet_id/worksheet_id. 
 * Once loaded, it calls loadGraphJSON.
 */
function getJSON() {
  var script = document.createElement('script');

  script.setAttribute('src', 'http://spreadsheets.google.com/feeds/list'
                         + '/' + spreadsheet_id + '/' + worksheet_id + '/public/values' +
                        '?alt=json-in-script&callback=loadGraphJSON');
  // insert the script tag into the header
  document.documentElement.firstChild.appendChild(script);
}

/*
 * Extract the information we need into 2 lists (data and labels)
 * We iterate over the rows (json.feed.entry)
 * and extract our day and distance columns int 2 lists.
 * Once this list created, we call drawChart to draw the graph.
 */
function loadGraphJSON(json) {
    var verbs = [];
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        verbs.push(entry["gsx$verbs"].$t);
    }
    drawChart(verbs);
}