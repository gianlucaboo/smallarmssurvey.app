//----------------------------------------------------------------------
// - initialise global variables for the website
// - preload table data from csv: all website text
// - load initial active page once tables are loaded
// - handle toggle language
// - handle navigation between website pages
//----------------------------------------------------------------------

// initialise an objects array to store pages' information
var websitePages = [];
let pageNames = ["navMenu", "home", "what", "how", "system", "threat", "counter", "together"];
for (let i = 0; i < pageNames.length; i++) {
  websitePages.push({name: pageNames[i]});
}

// var tablesLoaded = false;
// var datesLoaded = false;
// var pagesLoaded = 0;

// var langButtons;
var navMenuToggle;
var navButtons;
var pageElements;

// // current site language, initialise to Italian
var currentLanguage = "EN";

// variable to store a table object with dates list
var datesData;



// Preload: text and dates from table,
// html pages to their elements in index.html
function preload() {

  // load navigation menu template
  $("#navMenu").load("./assets/pages/navMenu.html", function() {
    // pagesLoaded += 1;
  });

  // load page templates to page elements
  pageElements = document.getElementsByClassName("pageElement");
  // load html pages to their designated element
  for (var i = 0; i < pageElements.length; i++) {
    var pId = pageElements[i].id;
    var pName = pageElements[i].id.replace(/Page/,"");
    $("#" + pId).load("./assets/pages/" + pName + ".html", function() {
      // pagesLoaded += 1;
    });
  }
}

function setup() {}


function draw() {

  // Set collapsible menu
  navMenuToggle = document.getElementById("navMenuToggle");
  navMenuToggle.onclick = function(){toggleNavMenu()};

  document.getElementById("bodyContent").scrollTo(0, 0);

  // disable loop; templates will be re-filled on language change
  noLoop();
}
