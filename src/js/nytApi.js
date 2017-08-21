export const nyt = (url) => {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: url,
			method: "GET"
		}).done(function(result){
			resolve(result);
			}).fail(function(err){
				reject(result);
			});
		})
};	