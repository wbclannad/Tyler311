
$(document).ready(function(){

	    $.each(requestList, function(i, item){
		      var listItem = "<li><a href='#'> <img class='thumbnailImage' src='" + item.imageUrl + "'>" 
		      				 + "<h2>" + item.Description + "</h2>" 
		      				 + 	"<p>" + item.ManualLocations[0].Address+ "</p>"
		      				 + "</a></li>";
		      
		      $("#recentRequestList").append(listItem);
		});

		$("#recentRequestList").listview("refresh");

});