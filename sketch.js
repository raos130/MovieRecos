//Coding Train https://www.youtube.com/watch?v=mj8_w11MvH8

var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=1SV4pabytnFm1GVjXB0Qp78lCnuU0n0e'


function setup() {
  noCanvas();
  strokeWeight(8);
  loadJSON(url, gotData, myFunction);
}

// creates a var that randomizes results what the api pulls
var r;

function gotData(data) {
  var title = data.results;

  r = title[Math.floor(Math.random() * title.length)];
  console.log(r);

  createElement('h3', r.display_title);
  myDiv2 = createImg(r.multimedia.src);
}


// Right button: pulls more content from api and re-organizes the layers.
function myFunction(data) {

  myDiv2.remove();
  createImg(r.multimedia.src);
  createElement('sum', r.summary_short);
  createElement('mpaa', r.mpaa_rating);


}


//https://stackoverflow.com/questions/7803814/prevent-refresh-of-page-when-button-inside-form-clicked
$('#myForm').submit(function() {
  doSomething();
});
