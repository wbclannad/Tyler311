$(document).ready(function(){

	$('#detailHeader').text(selectedRequestType);

	$('#submitBtn').click(function(e){
		console.log(request);

		requestList.push(request);

		//submmit request		
		var postUrl = baseUrl + tenant + "/Request";

		$.ajax({
		  type: "POST",
		  url: postUrl,
		  data: JSON.stringify({portalRequest: request, id: token}),
		  success: function(data){

		  },
		  dataType: "json"
		});
	});
});


/*
$( '#requestDetailPage' ).on( 'pageinit',function(event){
  alert( 'This page was just enhanced by jQuery Mobile!' );
});
*/