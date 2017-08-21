import {nyt} from './nytApi.js';
import {populate} from './populateHTML.js';

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$("#selectDropdown") .on("change", function(){
  $('#newsblock').empty();

let val = $("#selectDropdown option:selected").val();
let url ="https://api.nytimes.com/svc/topstories/v2/"+ val +".json";
url += '?' + $.param({'api-key': "b9c05d24b71e49bf9b72e24feaff8b0b"});

nyt(url)
    .then(function(result) {
        populate(result);
        //console.log(result);
    })
    .catch(err => {
        console.log(error);
    });

});