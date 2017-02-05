    function initialize() {
        var latlng = new google.maps.LatLng(42.635569, 23.334236);
        var myOptions = {
            zoom: 15,
            scrollwheel: false,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);


        var myMarker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Secure Group",
            icon: '../images/mapsmarker.png'

        });



    }

    initialize();