//Coding Train https://www.youtube.com/watch?v=mj8_w11MvH8

var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=1SV4pabytnFm1GVjXB0Qp78lCnuU0n0e'


function setup() {
  noCanvas();
  strokeWeight(8);
  loadJSON(url, gotData, myFunction);
  myLink= createElement(r.link.url);
}
var r;

function gotData(data) {
  var title = data.results;
  // let r = title[Math.floor(Math.random() * title.length)];
  // var r = random(title);
  r = title[Math.floor(Math.random() * title.length)];
  console.log(r);

  createElement('h3', r.display_title);
  myDiv2 = createImg(r.multimedia.src);
}

function myFunction(data) {
// myLink= createElement(r.link.url);
  myDiv2.remove();
    createImg(r.multimedia.src);
  createElement('sum', r.summary_short);
  createElement('mpaa', r.mpaa_rating);
  // createElement('sum', myLink, r.link.suggested_link_text);

}


// createElement('h2', r.summary_short);
//https://stackoverflow.com/questions/7803814/prevent-refresh-of-page-when-button-inside-form-clicked
$('#myForm').submit(function() {
  doSomething();
});



// for (var i = 0; i < title.length; i++)
