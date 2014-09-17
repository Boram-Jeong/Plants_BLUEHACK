
var searchList;

function initialize() {
	var myLatlng = new google.maps.LatLng(37.508952, 127.061016);
	
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    
    
    //jQuery request ( coords, 4개 상호검색명)
    var url = 'http://210.118.74.119:8080/hackathon/getCategoryList.do?category=ALL'
    	+ '&lat=37.508952,&lng=127.061016';
    
	$.ajax({
		url : url,
		type : 'get',
		dataType : 'json',
		success : function(result) {
			searchList = result;
			
			make_marker(myLatlng, map, "Here I am", "My Space!", 0);
		    //시간차로 마커 떨구기 소스
		    //for (var i =0; i < searchList.length;i++) {
		    var i = 0;
	    	function drop()
	    	{
	    		if(i > searchList.length)
	    			return;
	    		
	    		var latlng = new google.maps.LatLng(searchList[i].lat, searchList[i].lng);
	    		var name = searchList[i].name;
	    		var address = searchList[i].address;
	    		var cate = searchList[i].cate;
	    		i++;
	    		var speed = i*60;
	    		if(speed>250)
	    			speed = 250;
	    		make_marker(latlng, map, name, address, cate);
		    	setTimeout(function() {
		    		drop();
		    	}, speed)
	    	}
    		drop();
		   // }
		},
		error : function(e) {
			console.log(e.responseText);
		}
	});
}

function makeMakersbyTag(searchData)
{
	console.log(searchData);
	
	var myLatlng = new google.maps.LatLng(37.508952, 127.061016);
	
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    
	searchList = searchData;

	make_marker(myLatlng, map, "Here I am", "My Space!", 0);
    //시간차로 마커 떨구기 소스
    //for (var i =0; i < searchList.length;i++) {
    var i = 0;
	function drop()
	{
		if(i > searchList.length)
			return;
		
		var latlng = new google.maps.LatLng(searchList[i].lat, searchList[i].lng);
		var name = searchList[i].name;
		var address = searchList[i].address;
		var cate = searchList[i].cate;
		i++;
		var speed = i*60;
		if(speed>250)
			speed = 250;
		
		make_marker(latlng, map, name,address, cate);
    	setTimeout(function() {
    		drop();
    	}, speed)
	}
	drop();
}

function load_MiniMap(_lat, _lng)
{
	var myLatlng = new google.maps.LatLng(_lat, _lng);
		
	    var mapOptions = {
	      center: myLatlng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map_canvas"),
	        mapOptions);
	    
	    var marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
	        title:'',
	        animation: google.maps.Animation.DROP,
	    });
}



// color : red(0), blue(1), green(2)
function make_marker(_latlng, _map, _title, _content, _cate)
{
	var marker = new google.maps.Marker({
        position: _latlng,
        map: _map,
        title:_title + "&" + _content,
        animation: google.maps.Animation.DROP,
    });
	
	
	if(_cate === 'food' || _cate === 'restaurant' || _cate === 'bakery')
		marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png');
	else if(_cate === 'movie_theater' || _cate === 'bank')
		marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green.png');
	else if(_cate === 'cafe')
		marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
	else if(_cate === 'bar'|| _cate === 'night_club')
		marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
	else if(_cate != 0)
		marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow.png');
	
    make_maker_content(marker, _map);
}


function make_maker_content(_marker, _map){
	google.maps.event.addListener(_marker, 'click', function(event) {
	    var lat = event.latLng.lat();
	    var lng = event.latLng.lng();
	    
	    var temptitle = _marker.getTitle().split("&");
	    var title = temptitle[0];
	    selectTitle = title;
	    var content = temptitle[1];
	    
	    var contentString = '<div id="content" style="width:150px; height:100px">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<font size="3sp" style="font-familly:맑은고딕">'+
	      '<span id="firstHeading" >' + title + '</span></font>'+
	      '<div id="bodyContent">'+
	      '<p>'+content +'</p>'+
	      '</div>'+
	      '<div id="btnContent">'+
	      '<button id="btnDetail" onClick= "select();">detail</button>'+
	      '</div>'+
	      '</div>';

		  var infowindow = new google.maps.InfoWindow({
		      content: contentString
		  });
		  
		  infowindow.open(_map,_marker);
	});
}

var selectTitle;
function select()
{
	name = selectTitle;
	for ( var idx = 0; idx < searchList.length; idx++) {
		if (name === searchList[idx].name) {
			selectedIndex = idx;
		}
	}

	var selected = searchList[selectedIndex];

//	console.log(selected);

	var url = "./view/search_information.html?id="
			+ selected.id
			+ "&name="
			+ selected.name
			+ "&lat="
			+ selected.lat
			+ "&lng="
			+ selected.lng
			+ "&cate="
			+ selected.cate
			+ "&address="
			+ selected.address
			+ "&rate="
			+ selected.rate;

//	console.log(url);

	window.location.href = url;
}