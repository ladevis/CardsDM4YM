
      function initMap() {
        var uluru = {lat: 42.567773, lng: 1.597761};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          mapTypeId: 'satellite',
          fullscreenControl : false,
          center: uluru
        });
        var goldStar = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: 'gold',
    fillOpacity: 0.8,
    scale: .5,
    strokeColor: 'white',
    strokeWeight: 1
  };
        var marker = new google.maps.Marker({
          position: uluru,
          icon: goldStar,
          map: map
        });
      }
