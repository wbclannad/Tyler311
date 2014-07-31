
$(document).ready(function(){

	    var serviceUrl = baseUrl + tenant + "/RequestType";

		$.getJSON(serviceUrl, function(result){
		    
		    $.each(result, function(i, item){
		      var listItem = "<li><a href='#requestDetailPage'" + "data-type-id='" + item.PortalRequestTypeId + "'>" + item.Name + "</a></li>";
		      $("#requestTypeList").append(listItem);
		    });

		    $("#requestTypeList").listview("refresh");
		});

		$('#requestTypeList').on('click', 'li', function(e) {
        	
        	var typeId = $(this).find('a').attr('data-type-id')
        	request.TypeId = typeId;
        	selectedRequestType = $(this).find('a').text();
            $('#detailHeader').text(selectedRequestType);
        	console.log(request);
    	});

});