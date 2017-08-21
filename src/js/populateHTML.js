export const populate = (result) => {

	let count = 1;

	for (let i=0; i<result.results.length; i++) {


	    if (count <=12){


			if (result.results[i].multimedia.length>0){

			  let abstract = '<p class = "abstract">'+result.results[i].abstract +' </p> ' ;
			  let link = result.results[i].url;
			  let image = result.results[i].multimedia[4].url;
			  let htmlElements =  '<a href="' +link +'">' +abstract + ' </a> ';

			  let createDiv = $("<div></div>");
			  createDiv.addClass('singlenews');
			  $('body').append(createDiv);
			  createDiv.css('background-image', "url(" + image + ")");
			  createDiv.append(htmlElements);

			$(count++);
			}else{
				break;
			}


		}	
	}    

};