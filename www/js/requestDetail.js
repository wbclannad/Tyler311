$(document).ready(function(){

	$('#detailHeader').text(selectedRequestType);

	$('#submitBtn').click(function(e){
		console.log(request);

		requestList.push(request);

		/*
		request = {
					TypeId:5,
					Description: "test Description 1", 
					ManualLocations: [{Address: "test address 1"}], 
					PortalRequestNumber:null,
					PortalRequestId: 0,
					RequestId:null,
		      		RequestNumber:null,
		      		Locations:[
		      		 {
			            Address:"3318 Lansbury Village Dr, Atlanta, Georgia, 30341",
			           X:-84.25224383068746,
			            Y:33.868637096725706
			         }],
		      		ManualLocations:[
			         {
			            Address:"Manual Location"
			         }
		      		],
				        
		      		Attachments:[],
		      		AttachmentData:[]
				};
		*/

		portalRequest = {
		   
		      "TypeId":request.TypeId,
		      "Description":request.Description,
		      "PortalRequestNumber":null,
		      "PortalRequestId":0,
		      "RequestId":null,
		      "RequestNumber":null,
		      "Locations":[],
		      "ManualLocations":[
		         {
		            "Address":request.ManualLocations[0].Address
		         }
		      ],
		      "Attachments":[

		      ],
		      "AttachmentData":[

		      ]
		   
		};


		//submmit request		
		var postUrl = baseUrl + tenant + "/Request?id=" + token;

		$.ajax({
		  type: "POST",
		  url: postUrl,
		  data: portalRequest,
		  success: function(data){
		  	  request.requestNumber = data.PortalRequestNumber;
		  	  alert(request.requestNumber);
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