//WINDOW ONLOAD
$(window).load(function() {

	/*-------------------------------------------------*/
    /* =  MAP
    /*-------------------------------------------------*/


      	var styles = [
         {
          "featureType": "administrative",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "off" },
            { "color": "#ffffff" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "visibility": "on" },
            { "color": "#ffffff" }

          ]
        },{
          "featureType": "transit",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "landscape",
          "stylers": [
            { "visibility": "on" },
            { "color": "#B3B3B3" }
          ]
        },{
          "featureType": "water",
          "stylers": [
            { "visibility": "on" },
            { "color": "#14a1fb" }
          ]
        }

      ];


      var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"})

      var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(45.258493, 19.836867),
        scrollwheel: false,

        // disable mapType-top_right corner
        mapTypeControl: false,
        disableDefaultUI: false,
        draggable: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map']
        }
      };
        var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(45.258493, 19.836867),
            map: map,
            icon: 'images/pin.svg' // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
        });



        map.mapTypes.set('map', styledMap);
        map.setMapTypeId('map');

});
