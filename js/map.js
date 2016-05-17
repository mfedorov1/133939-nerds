      // JS для API google map
      
      function initialize() {
        var latlng = new google.maps.LatLng(59.9, 30.3);
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
		    setMarkers(map, places);
        }  
        var places = [['Nerds Studio', 59.9387942, 30.3230833, 19],];    
 
      function setMarkers(map, locations) {
		  		var latlngbounds = new google.maps.LatLngBounds();	
		      var image = new google.maps.MarkerImage('img/logo-for-map.png',      
		                  new google.maps.Size(207,190),      
      	              new google.maps.Point(0,0),      
      	              new google.maps.Point(50, 190)); 
		      for (var i = 0; i < places.length; i++) {
            var myLatLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
			    latlngbounds.extend(myLatLng);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map, 
                icon: image,    
                title: locations[i][0],
            }); 
         }
          map.setZoom(17);
	        map.setCenter({lat: 59.9387942, lng: 30.3230833});
       };
      initialize();
      
      