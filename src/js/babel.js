(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _nytApi = require('./nytApi.js');

var _populateHTML = require('./populateHTML.js');

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i = void 0;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

$("#selectDropdown").on("change", function () {
  $('#newsblock').empty();

  var val = $("#selectDropdown option:selected").val();
  var url = "https://api.nytimes.com/svc/topstories/v2/" + val + ".json";
  url += '?' + $.param({ 'api-key': "b9c05d24b71e49bf9b72e24feaff8b0b" });

  (0, _nytApi.nyt)(url).then(function (result) {
    (0, _populateHTML.populate)(result);
    //console.log(result);
  }).catch(function (err) {
    console.log(error);
  });
});

},{"./nytApi.js":2,"./populateHTML.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var nyt = exports.nyt = function nyt(url) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url,
			method: "GET"
		}).done(function (result) {
			resolve(result);
		}).fail(function (err) {
			reject(result);
		});
	});
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var populate = exports.populate = function populate(result) {

	var count = 1;

	for (var i = 0; i < result.results.length; i++) {

		if (count <= 12) {

			if (result.results[i].multimedia.length > 0) {

				var abstract = '<p class = "abstract">' + result.results[i].abstract + ' </p> ';
				var link = result.results[i].url;
				var image = result.results[i].multimedia[4].url;
				var htmlElements = '<a href="' + link + '">' + abstract + ' </a> ';

				var createDiv = $("<div></div>");
				createDiv.addClass('singlenews');
				$('body').append(createDiv);
				createDiv.css('background-image', "url(" + image + ")");
				createDiv.append(htmlElements);

				$(count++);
			} else {
				break;
			}
		}
	}
};

},{}]},{},[1]);
