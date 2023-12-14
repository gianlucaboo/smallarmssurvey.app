//----------------------------------------------------------------------
// Helper functions
//----------------------------------------------------------------------

// // generate website colour
// function setColour() {
//   const colours = ["#FD6A7E", "#78FB57", "#FD932A", "#46FBC5"];
//   const randomColour = colours[Math.floor(Math.random() * colours.length)];

//   document.documentElement.style.setProperty('--siteColour', randomColour);
// }


// // fills the template in the page contained in page_element
// function fillTemplate(page_element, lang) {
//   // get the name of page_element
//   var page_name = page_element.id.replace(/Page/,"");
//   // get the tempate source, which is in each page's #template element
//   var templateSource = document.getElementById(page_name + "_template");
//   // get the target for the template, which is in each page's #target element
//   var templateTarget = document.getElementById(page_name + "_target");

//   // get the page data from websitePages
//   var page_object = websitePages.find(x => x.name == page_name);
//   var page_data = page_object.text;

//   // get the content from the current page's table object
//   // and according to currentLanguage
//   var content = {};
//   for (var i = 0; i < page_data.getRowCount(); i++) {
//     // assign content to template tag:  tag: content
//     content[page_data.get(i, 0)] = page_data.get(i, lang);
//   }

//   // compile the template
//   var template = Handlebars.compile(templateSource.innerHTML);

//   // apply the content to the template
//   var rendered = template(content);

//   // write the filled template in #target
//   templateTarget.innerHTML = rendered;
// }


// // updates currentLanguage according to user selection
// function updateLanguage() {
//   currentLanguage = event.target.innerHTML;

//   // fill templates with new currentLanguage
//   for (var i = 0; i < pageElements.length; i++) {
//     // fill the template
//     fillTemplate(pageElements[i], currentLanguage);
//   }
// }


// website navigation: scroll to element containing the page in the navigation menu
function scrollToElement(targetName, containerName) {

  // get target page element
  var targetElement = document.getElementById(targetName + "Page");

  // get container element
  var containerElement = document.getElementById(containerName);

  // scroll container to target element
  containerElement.scroll({
    top: targetElement.offsetTop
  });

  // fold in the navigation menu
  toggleNavMenu();
}


// handle nav menu collapse
function toggleNavMenu() {
  var content = document.getElementById("navMenu");
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}


// // populate datesList in dates page
// function populateDatesList(ulElement) {
//   // for each row in datesData, add a list item in ulElement
//   for(var i = 0; i < datesData.getRowCount(); i++) {
//     var row = datesData.getRow(i);
//     var txt = row.get("day") + "." + row.get("month") + "." + row.get("year") + ", " + row.get("detail");
//     var dateListItem = document.createElement("li");
//     dateListItem.innerHTML = txt;

//     // check if current date has passed
//     if(checkDatePassed(row.get("year"), row.get("month"), row.get("day"))) {
//       // if dates has passed apply strikethrough class
//       dateListItem.classList.add("strikethrough");
//     }

//     // append the date to the dates list
//     ulElement.appendChild(dateListItem);
//   }
// }


// // checks if the input date has passed, return true if yes
// function checkDatePassed(yyyy, mm, dd) {
//   // get today's date
//   var today = new Date();

//   var inputDate = new Date(yyyy, mm, dd);
//   // increase the month by 1 month to get correct result
//   inputDate.setMonth(inputDate.getMonth() - 1);

//   // compare input date with today
//   if(inputDate.getTime() < today.getTime()) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// // print pdf posters specified by url. called from "poster" page
// function printPoster(url) {
//   // get the pdf from url
//   var pdfUrl = url;

//   // create a hidden iFrame with the pdf
//   var hiddenFrame = document.createElement("iframe");
//      hiddenFrame.onload = setPrint;
//      hiddenFrame.style.position = "fixed";
//      hiddenFrame.style.right = "0";
//      hiddenFrame.style.bottom = "0";
//      hiddenFrame.style.width = "0";
//      hiddenFrame.style.height = "0";
//      hiddenFrame.style.border = "0";
//      hiddenFrame.src = pdfUrl;
//      document.body.appendChild(hiddenFrame);

//    function setPrint () {
//      var self = this;
//      self.contentWindow.focus();
//      self.contentWindow.print();
//    }
// }


/*
// handlers for the modal lightbox (image gallery page)
// adapted from w3schools: https://www.w3schools.com/howto/howto_js_lightbox.asp
//----------------------------------------------------------------------

// set up swipe detection (jquery mobile)
// source: https://stackoverflow.com/questions/72529850/how-to-make-image-slider-respond-to-thumb-swipe
function setSwipe() {
  $("#lightbox").on("touchstart", function(event) {

    const xClick = event.originalEvent.touches[0].pageX;

    $(this).on("touchmove", function(event) {
      const xMove = event.originalEvent.touches[0].pageX;
      const sensitivityInPx = 5;

      if (Math.floor(xClick - xMove) > sensitivityInPx) {
        plusSlides(1);
        $(this).off('touchmove');
      }
      else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
        plusSlides(-1);
        $(this).off('touchmove');
      }

    });
  });
}

// open the modal when a thumbnail image is clicked
function openModal() {
  document.getElementById("lightbox").style.display = "inline-block";

  // disable scroll when modal is open
  document.body.style.overflow = "hidden";

}

// close modal when user clicks close button
function closeModal() {
  document.getElementById("lightbox").style.display = "none";
  // enable scroll when modal is closed
  document.body.style.overflow = "auto";
}

// changes the displayed slide when user clicks "prev" and "next" buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// shows slide n, called whenever a new slide is displayed
function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
*/
